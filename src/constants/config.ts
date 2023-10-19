import { APP_ENVIRONMENTS } from '@pooltogether/hooks'
import { CHAIN_ID, getChain } from '@pooltogether/wallet-connection'
import { Chain } from 'wagmi'

/////////////////////////////////////////////////////////////////////
// Required constant aggregates from the various tools in the app.
// When adding a new tool (or network) to the app, ensure these constants are updated.
// Ideally from a config.ts inside the respective tool.
/////////////////////////////////////////////////////////////////////

export const DEFAULT_CHAIN_ID = Object.freeze({
  [APP_ENVIRONMENTS.mainnets]: CHAIN_ID.optimism,
  [APP_ENVIRONMENTS.testnets]: CHAIN_ID['optimism-goerli']
})

export const RPC_URLS = {
  // Ethereum
  [CHAIN_ID.mainnet]: process.env.NEXT_PUBLIC_ETHEREUM_MAINNET_RPC_URL,
  [CHAIN_ID.goerli]: process.env.NEXT_PUBLIC_ETHEREUM_GOERLI_RPC_URL,
  // Polygon
  [CHAIN_ID.polygon]: process.env.NEXT_PUBLIC_POLYGON_MAINNET_RPC_URL,
  [CHAIN_ID.mumbai]: process.env.NEXT_PUBLIC_POLYGON_MUMBAI_RPC_URL,
  // Optimism
  [CHAIN_ID.optimism]: process.env.NEXT_PUBLIC_OPTIMISM_MAINNET_RPC_URL,
  [CHAIN_ID['optimism-goerli']]: process.env.NEXT_PUBLIC_OPTIMISM_GOERLI_RPC_URL,
  // Arbitrum
  [CHAIN_ID.arbitrum]: process.env.NEXT_PUBLIC_ARBITRUM_MAINNET_RPC_URL,
  [CHAIN_ID['arbitrum-goerli']]: process.env.NEXT_PUBLIC_ARBITRUM_GOERLI_RPC_URL
}

export const SUPPORTED_CHAIN_IDS = Object.freeze({
  [APP_ENVIRONMENTS.mainnets]: [CHAIN_ID.optimism],
  [APP_ENVIRONMENTS.testnets]: [CHAIN_ID['optimism-goerli']]
})

export const SUPPORTED_CHAINS: { [key: string]: Chain[] } = Object.freeze({
  [APP_ENVIRONMENTS.mainnets]: SUPPORTED_CHAIN_IDS[APP_ENVIRONMENTS.mainnets].map(getChain),
  [APP_ENVIRONMENTS.testnets]: SUPPORTED_CHAIN_IDS[APP_ENVIRONMENTS.testnets].map(getChain)
})

export const ALL_SUPPORTED_CHAINS: Chain[] = [
  ...SUPPORTED_CHAINS[APP_ENVIRONMENTS.mainnets],
  ...SUPPORTED_CHAINS[APP_ENVIRONMENTS.testnets]
]

export const TWAB_DELEGATOR_ADDRESS: { [chainId: number]: string } = Object.freeze({
  [CHAIN_ID.optimism]: '0x3989CBC1FB0eb278601c018eD7627B07be9De4cB',
  [CHAIN_ID['optimism-goerli']]: '0x43522DfD29B8a975059F93b03DaB1545935710Bb'
})

export const QUERY_PARAM = Object.freeze({
  delegator: 'delegator',
  delegationChain: 'delegation_chain'
})

export const DELEGATION_LEARN_MORE_URL = 'https://docs.pooltogether.com/how-to/deposit-delegator'
