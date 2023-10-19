import { CHAIN_ID } from '@constants/misc'
import { Token } from '@pooltogether/hooks'

export const TICKET: { [chainId: number]: Token } = Object.freeze({
  [CHAIN_ID.optimism]: {
    address: '0xE3B3a464ee575E8E25D2508918383b89c832f275',
    symbol: 'pUSDC.e',
    name: 'Prize USDC.e - Aave',
    decimals: '6'
  },
  [CHAIN_ID['optimism-goerli']]: {
    address: '0xc3d6a8d76B304E0716b3227C00a83187340DC846',
    symbol: 'pUSDC-HY-T',
    name: 'Prize USDC High Yield',
    decimals: '6'
  }
})
