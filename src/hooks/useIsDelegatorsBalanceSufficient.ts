import { useTicket } from '@hooks/useTicket'
import { useTokenBalance } from '@pooltogether/hooks'
import { DelegationFund } from '../interfaces'
import { useIsAmountSufficientForFunds } from './useIsAmountSufficientForFunds'

/**
 * Fetches the delegators ticket balances and checks if it is greater than the amount of tickets the user has committed to delegating while updating their delegations
 * @param chainId
 * @param delegator
 * @returns
 */
export const useIsDelegatorsBalanceSufficient = (
  chainId: number,
  delegator: string,
  delegationFunds: DelegationFund[]
) => {
  const ticket = useTicket(chainId)
  const { data: tokenBalance, isFetched } = useTokenBalance(chainId, delegator, ticket.address)
  return useIsAmountSufficientForFunds(
    chainId,
    delegator,
    tokenBalance?.amountUnformatted,
    delegationFunds
  )
}
