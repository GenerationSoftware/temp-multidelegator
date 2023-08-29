import { Delegation, DelegationFund } from '../interfaces'
import { BigNumber } from 'ethers'

export const getBalance = (delegation?: Delegation, delegationFund?: DelegationFund) => {
  if (delegationFund) return delegationFund.amount
  if (delegation) return delegation.balance
  return BigNumber.from(0)
}
