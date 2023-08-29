import { DelegationFund } from '../interfaces'
import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import { useDelegationUpdatesNetDifference } from './useDelegationUpdatesNetDifference'

/**
 * Compares to see if an amount is sufficient for proposed updates
 * @param chainId
 * @param delegator
 * @returns
 */
export const useIsAmountSufficientForFunds = (
  chainId: number,
  delegator: string,
  amountUnformatted: BigNumber,
  delegationFunds: DelegationFund[]
) => {
  const totalDelegationAmount = useDelegationUpdatesNetDifference(
    chainId,
    delegator,
    delegationFunds
  )
  return useMemo(() => {
    if (!amountUnformatted || !totalDelegationAmount) return null
    return amountUnformatted.gte(totalDelegationAmount)
  }, [amountUnformatted?.toString(), totalDelegationAmount?.toString()])
}
