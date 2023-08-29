import { Delegation } from '../interfaces'

export const getIsDelegationLocked = (delegation: Delegation) => {
  const currentTimeMs = Date.now()
  return delegation.lockUntil.gte(currentTimeMs)
}
