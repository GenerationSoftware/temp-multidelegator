import { useTokenBalance } from '@pooltogether/hooks'
import { DelegationFund } from '../interfaces'
import { getTwabDelegatorContractAddress } from '@utils/getTwabDelegatorContractAddress'
import { useIsAmountSufficientForFunds } from './useIsAmountSufficientForFunds'

/**
 * Fetches the delegators staked balances and checks if it is greater than the amount of tickets the user has committed to delegating while updating their delegations
 * @param chainId
 * @param delegator
 * @returns
 */
export const useIsDelegatorsStakeSufficient = (
  chainId: number,
  delegator: string,
  delegationFunds: DelegationFund[]
) => {
  const twabDelegatorAddress = getTwabDelegatorContractAddress(chainId)
  const { data: stakeBalance } = useTokenBalance(chainId, delegator, twabDelegatorAddress)
  return useIsAmountSufficientForFunds(
    chainId,
    delegator,
    stakeBalance?.amountUnformatted,
    delegationFunds
  )
}
