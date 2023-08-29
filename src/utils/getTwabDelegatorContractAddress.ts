import { TWAB_DELEGATOR_ADDRESS } from '@constants/config'

export const getTwabDelegatorContractAddress = (chainId: number) => TWAB_DELEGATOR_ADDRESS[chainId]
