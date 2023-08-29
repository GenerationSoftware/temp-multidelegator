import { APP_ENVIRONMENTS } from '@pooltogether/hooks'
import { CHAIN_ID, getChain } from '@pooltogether/wallet-connection'
import { Chain } from 'wagmi'

/////////////////////////////////////////////////////////////////////
// Required constant aggregates from the various tools in the app.
// When adding a new tool (or network) to the app, ensure these constants are updated.
// Ideally from a config.ts inside the respective tool.
/////////////////////////////////////////////////////////////////////

export const DEFAULT_CHAIN_ID = Object.freeze({
  [APP_ENVIRONMENTS.mainnets]: CHAIN_ID.polygon,
  [APP_ENVIRONMENTS.testnets]: CHAIN_ID.rinkeby
})

export const RPC_URLS = {
  // Ethereum
  [CHAIN_ID.mainnet]: process.env.NEXT_PUBLIC_ETHEREUM_MAINNET_RPC_URL,
  [CHAIN_ID.rinkeby]: process.env.NEXT_PUBLIC_ETHEREUM_RINKEBY_RPC_URL,
  [CHAIN_ID.ropsten]: process.env.NEXT_PUBLIC_ETHEREUM_ROPSTEN_RPC_URL,
  [CHAIN_ID.kovan]: process.env.NEXT_PUBLIC_ETHEREUM_KOVAN_RPC_URL,
  [CHAIN_ID.goerli]: process.env.NEXT_PUBLIC_ETHEREUM_GOERLI_RPC_URL,
  // Avalanche
  [CHAIN_ID.avalanche]: process.env.NEXT_PUBLIC_AVALANCHE_MAINNET_RPC_URL,
  [CHAIN_ID.fuji]: process.env.NEXT_PUBLIC_AVALANCHE_FUJI_RPC_URL,
  // Polygon
  [CHAIN_ID.polygon]: process.env.NEXT_PUBLIC_POLYGON_MAINNET_RPC_URL,
  [CHAIN_ID.mumbai]: process.env.NEXT_PUBLIC_POLYGON_MUMBAI_RPC_URL,
  // Optimism
  [CHAIN_ID.optimism]: process.env.NEXT_PUBLIC_OPTIMISM_MAINNET_RPC_URL,
  [CHAIN_ID['optimism-goerli']]: process.env.NEXT_PUBLIC_OPTIMISM_GOERLI_RPC_URL,
  // Arbitrum
  [CHAIN_ID.arbitrum]: process.env.NEXT_PUBLIC_ARBITRUM_MAINNET_RPC_URL,
  [CHAIN_ID['arbitrum-goerli']]: process.env.NEXT_PUBLIC_ARBITRUM_GOERLI_RPC_URL,
  // Celo
  [CHAIN_ID.celo]: process.env.NEXT_PUBLIC_CELO_MAINNET_RPC_URL,
  [CHAIN_ID['celo-testnet']]: process.env.NEXT_PUBLIC_CELO_TESTNET_RPC_URL
}

export const SUPPORTED_CHAIN_IDS = Object.freeze({
  [APP_ENVIRONMENTS.mainnets]: [
    CHAIN_ID.optimism,
    CHAIN_ID.polygon,
    CHAIN_ID.mainnet,
    CHAIN_ID.avalanche
  ],
  [APP_ENVIRONMENTS.testnets]: [
    CHAIN_ID['optimism-goerli'],
    CHAIN_ID.mumbai,
    CHAIN_ID.rinkeby,
    CHAIN_ID.fuji
  ]
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
  [CHAIN_ID.optimism]: '0x469C6F4c1AdA45EB2E251685aC2bf05aEd591E70',
  [CHAIN_ID.polygon]: '0x89Ee77Ce3F4C1b0346FF96E3004ff7C9f972dEF8',
  [CHAIN_ID.mainnet]: '0x5cFbEE38362B9A60be276763753f64245EA990F7',
  [CHAIN_ID.avalanche]: '0xd23723fef8A16B77eaDc1fC822aE4170bA9d4009',
  [CHAIN_ID['optimism-kovan']]: '0xDDbd5eab2011a2240F69FD1255246922931C66A6',
  [CHAIN_ID['optimism-goerli']]: '0x6176776490147b41813C1a0e342080d2CAA4e618',
  [CHAIN_ID.mumbai]: '0xaAc4688AB7AD2c0CbC51E9674D53Bf394910aF6a',
  [CHAIN_ID.rinkeby]: '0x448200d83e48f561B42e90274566d3FA3914B8A4',
  [CHAIN_ID.fuji]: '0xdB4B551C21860028c4CA951CC7067699eB7c5Bfe'
})

export const QUERY_PARAM = Object.freeze({
  delegator: 'delegator',
  delegationChain: 'delegation_chain'
})

export const DELEGATION_LEARN_MORE_URL = 'https://docs.pooltogether.com/how-to/deposit-delegator'
