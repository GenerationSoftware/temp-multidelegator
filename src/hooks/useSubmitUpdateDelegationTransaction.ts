import { useTicket } from '@hooks/useTicket'
import { useTokenAllowance } from '@pooltogether/hooks'
import {
  SendTransactionOptions,
  TransactionCallbacks,
  useSendTransaction,
  useUsersAddress
} from '@pooltogether/wallet-connection'
import {
  delegationChainIdAtom,
  delegationCreationsAtom,
  delegationFundsAtom,
  delegationUpdatesAtom,
  delegationWithdrawalsAtom,
  delegatorAtom
} from '../atoms'
import { DelegationId } from '../interfaces'
import { getTwabDelegatorContract } from '@utils/getTwabDelegatorContract'
import { getTwabDelegatorContractAddress } from '@utils/getTwabDelegatorContractAddress'
import { getTicketContract } from '@utils/getTicketContract'
// import { signERC2612Permit } from 'eth-permit'
import { BigNumber, PopulatedTransaction } from 'ethers'
import { useAtom } from 'jotai'
import { useTranslation } from 'next-i18next'
import { toast } from 'react-toastify'
import { useSigner } from 'wagmi'
import { useDelegatorsTwabDelegations } from './useDelegatorsTwabDelegations'
import { useIsUserDelegatorsRepresentative } from './useIsUserDelegatorsRepresentative'
import { approveErc20Spender } from '@utils/transactions/approveErc20Spender'

export const useSubmitUpdateDelegationTransaction = (
  setTransactionId: (id: string) => void,
  setApprovalPending: (isPending: boolean) => void,
  callbacks?: TransactionCallbacks
) => {
  const [chainId] = useAtom(delegationChainIdAtom)
  const [delegator] = useAtom(delegatorAtom)
  const [delegationCreations] = useAtom(delegationCreationsAtom)
  const [delegationUpdates] = useAtom(delegationUpdatesAtom)
  const [delegationFunds] = useAtom(delegationFundsAtom)
  const [delegationWithdrawals] = useAtom(delegationWithdrawalsAtom)
  const { data: delegations } = useDelegatorsTwabDelegations(chainId, delegator)
  const usersAddress = useUsersAddress()
  const { data: isUserARepresentative } = useIsUserDelegatorsRepresentative(
    chainId,
    usersAddress,
    delegator
  )
  const { refetch: getSigner } = useSigner()
  const ticket = useTicket(chainId)
  const twabDelegatorAddress = getTwabDelegatorContractAddress(chainId)
  const { data: allowance } = useTokenAllowance(
    chainId,
    usersAddress,
    twabDelegatorAddress,
    ticket.address
  )
  const { t } = useTranslation()
  const sendTransaction = useSendTransaction(t)

  const getDelegation = (delegationId: DelegationId) =>
    delegations.find(
      (delegation) =>
        delegation.delegationId.slot.eq(delegationId.slot) &&
        delegation.delegationId.delegator === delegationId.delegator
    )

  return async () => {
    const { data: signer } = await getSigner()
    const twabDelegatorContract = getTwabDelegatorContract(chainId, signer)
    const ticketContract = getTicketContract(chainId)
    const fnCalls: string[] = []
    const withdrawToStakeFnCalls: string[] = []
    const depositToStakeFnCalls: string[] = []
    let totalAmountToFund = BigNumber.from(0)

    // Add creations to the list of transactions
    for (const delegationCreation of delegationCreations) {
      const { slot, delegatee, lockDuration } = delegationCreation
      const populatedTx = await twabDelegatorContract.populateTransaction.createDelegation(
        delegator,
        slot,
        delegatee,
        lockDuration
      )
      fnCalls.push(populatedTx.data)
    }

    // Add updates to the list of transactions
    for (const delegationUpdate of delegationUpdates) {
      const { slot, delegatee, lockDuration } = delegationUpdate
      const populatedTx = await twabDelegatorContract.populateTransaction.updateDelegatee(
        delegator,
        slot,
        delegatee,
        lockDuration
      )
      fnCalls.push(populatedTx.data)
    }

    // Add withdrawals to the list of transactions
    for (const delegationWithdrawal of delegationWithdrawals) {
      const { slot, amount } = delegationWithdrawal
      const delegation = getDelegation(delegationWithdrawal)
      const amountToWithdraw = delegation.delegation.balance.sub(amount)
      let populatedTx: PopulatedTransaction
      if (isUserARepresentative) {
        populatedTx = await twabDelegatorContract.populateTransaction.withdrawDelegationToStake(
          delegator,
          slot,
          amountToWithdraw
        )
      } else {
        populatedTx = await twabDelegatorContract.populateTransaction.transferDelegationTo(
          slot,
          amountToWithdraw,
          delegator
        )
      }
      fnCalls.push(populatedTx.data)
    }

    // Add funds to the list of transactions
    for (const delegationFund of delegationFunds) {
      const { slot, amount } = delegationFund
      const delegation = getDelegation(delegationFund)
      let amountToFund: BigNumber

      // If there's an existing delegation, amountToFund is the difference
      if (!!delegation) {
        amountToFund = amount.sub(delegation.delegation.balance)
      } else {
        amountToFund = amount
      }

      let populatedTx: PopulatedTransaction
      if (amountToFund.isNegative()) {
        const amountToWithdraw = amountToFund.mul(-1)
        if (isUserARepresentative) {
          populatedTx = await twabDelegatorContract.populateTransaction.withdrawDelegationToStake(
            delegator,
            slot,
            amountToWithdraw
          )
        } else {
          populatedTx = await twabDelegatorContract.populateTransaction.transferDelegationTo(
            slot,
            amountToWithdraw,
            delegator
          )
        }
        withdrawToStakeFnCalls.push(populatedTx.data)
      } else if (!amountToFund.isZero()) {
        totalAmountToFund = totalAmountToFund.add(amountToFund)
        if (isUserARepresentative) {
          populatedTx = await twabDelegatorContract.populateTransaction.fundDelegationFromStake(
            delegator,
            slot,
            amountToFund
          )
        } else {
          populatedTx = await twabDelegatorContract.populateTransaction.fundDelegation(
            delegator,
            slot,
            amountToFund
          )
        }
        depositToStakeFnCalls.push(populatedTx.data)
      }
    }
    // Add withdrawal transactions before deposits to ensure balance is sufficient
    fnCalls.push(...withdrawToStakeFnCalls, ...depositToStakeFnCalls)

    let transactionToSend: SendTransactionOptions

    // If allowance is not high enough get an approval
    if (!isUserARepresentative && !totalAmountToFund.isZero() && allowance.lt(totalAmountToFund)) {
      setApprovalPending(true)

      const amountToIncrease = totalAmountToFund //.sub(allowance)

      // const domain = {
      //   name: 'PoolTogether ControlledToken',
      //   version: '1',
      //   chainId,
      //   verifyingContract: ticketContract.address
      // }

      // NOTE: Nonce must be passed manually for signERC2612Permit to work with WalletConnect
      // const deadline = (await signer.provider.getBlock('latest')).timestamp + 5 * 60
      // const response = await ticketContract.functions.nonces(usersAddress)
      // const nonce: BigNumber = response[0]

      // const signaturePromise = signERC2612Permit(
      //   signer,
      //   domain,
      //   usersAddress,
      //   twabDelegatorContract.address,
      //   amountToIncrease.toString(),
      //   deadline,
      //   nonce.toNumber()
      // )

      const approvalPromise = approveErc20Spender(
        signer,
        ticketContract.address,
        twabDelegatorContract.address,
        amountToIncrease
      )

      toast.promise(approvalPromise, {
        pending: t('signatureIsPending'),
        error: t('signatureRejected')
      })

      try {
        // const signature = await signaturePromise
        await approvalPromise

        // Overwrite v for hardware wallet signatures
        // https://ethereum.stackexchange.com/questions/103307/cannot-verifiy-a-signature-produced-by-ledger-in-solidity-using-ecrecover
        // const v = signature.v < 27 ? signature.v + 27 : signature.v

        // transactionToSend = {
        //   name: t('updateDelegations'),
        //   callTransaction: async () =>
        //     twabDelegatorContract.permitAndMulticall(
        //       amountToIncrease,
        //       {
        //         deadline: signature.deadline,
        //         v,
        //         r: signature.r,
        //         s: signature.s
        //       },
        //       fnCalls
        //     ),
        //   callbacks
        // }
      } catch (e) {
        setApprovalPending(false)
        console.error(e)
        return
      }
    } else {
      transactionToSend = {
        name: t('updateDelegations'),
        callTransaction: async () => twabDelegatorContract.multicall(fnCalls),
        callbacks
      }
    }

    !!transactionToSend && setTransactionId(sendTransaction(transactionToSend))
    setApprovalPending(false)
  }
}
