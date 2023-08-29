import { APP_ENVIRONMENTS, useIsTestnets } from '@pooltogether/hooks'
import { SUPPORTED_CHAIN_IDS } from '@constants/config'

export const useDelegationSupportedChainIds = () => {
  const { isTestnets } = useIsTestnets()
  return isTestnets
    ? SUPPORTED_CHAIN_IDS[APP_ENVIRONMENTS.testnets]
    : SUPPORTED_CHAIN_IDS[APP_ENVIRONMENTS.mainnets]
}
