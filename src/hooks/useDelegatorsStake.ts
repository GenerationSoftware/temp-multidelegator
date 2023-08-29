import { useTokenBalance } from '@pooltogether/hooks'
import { getTwabDelegatorContractAddress } from '@utils/getTwabDelegatorContractAddress'

export const useDelegatorsStake = (chainId: number, delegator: string) => {
  const twabDelegatorAddress = getTwabDelegatorContractAddress(chainId)
  return useTokenBalance(chainId, delegator, twabDelegatorAddress)
}
