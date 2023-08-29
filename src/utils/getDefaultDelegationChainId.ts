import { APP_ENVIRONMENTS, getStoredIsTestnetsCookie } from '@pooltogether/hooks'
import { DEFAULT_CHAIN_ID } from '@constants/config'

/**
 *
 * @returns
 */
export const getDefaultDelegationChainId = () => {
  const isTestnets = getStoredIsTestnetsCookie()
  return isTestnets
    ? DEFAULT_CHAIN_ID[APP_ENVIRONMENTS.testnets]
    : DEFAULT_CHAIN_ID[APP_ENVIRONMENTS.mainnets]
}
