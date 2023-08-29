import { TWAB_DELEGATOR_ADDRESS } from '@constants/config'

export const getTwabDelegatorContractAddress = (chainId: number) => {
  return TWAB_DELEGATOR_ADDRESS[chainId]
}
