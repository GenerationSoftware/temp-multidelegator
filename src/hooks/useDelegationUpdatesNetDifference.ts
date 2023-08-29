import { DelegationFund } from '../interfaces'
import { BigNumber } from 'ethers'
import { useDelegatorsTwabDelegations } from './useDelegatorsTwabDelegations'

/**
 * The net change in delegation funds for the staged delegation updates
 * @param chainId
 * @param delegator
 * @returns
 */
export const useDelegationUpdatesNetDifference = (
  chainId: number,
  delegator: string,
  delegationFunds: DelegationFund[]
) => {
  const { data: delegations, isFetched } = useDelegatorsTwabDelegations(chainId, delegator)

  if (!isFetched) return null

  return delegationFunds.reduce((total, delegationFund) => {
    const delegation = delegations.find(
      (delegation) =>
        delegation.delegationId.slot.eq(delegationFund.slot) &&
        delegation.delegationId.delegator === delegationFund.delegator
    )

    let amountToFund
    if (!!delegation) {
      amountToFund = delegationFund.amount.sub(delegation.delegation.balance)
    } else {
      amountToFund = delegationFund.amount
    }

    return total.add(amountToFund)
  }, BigNumber.from(0))
}
