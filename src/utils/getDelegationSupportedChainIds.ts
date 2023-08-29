import { APP_ENVIRONMENTS, getStoredIsTestnetsCookie } from '@pooltogether/hooks'
import { SUPPORTED_CHAIN_IDS } from '@constants/config'

/**
 *
 * @returns
 */
export const getDelegationSupportedChainIds = () => {
  const isTestnets = getStoredIsTestnetsCookie()
  return isTestnets
    ? SUPPORTED_CHAIN_IDS[APP_ENVIRONMENTS.testnets]
    : SUPPORTED_CHAIN_IDS[APP_ENVIRONMENTS.mainnets]
}
