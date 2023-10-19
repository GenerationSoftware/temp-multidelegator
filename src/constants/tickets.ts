import { CHAIN_ID } from '@constants/misc'
import { Token } from '@pooltogether/hooks'

export const TICKET: { [chainId: number]: Token } = Object.freeze({
  [CHAIN_ID.optimism]: {
    address: '0x31515cfC4550d9C83E2d86E8a352886d1364E2D9',
    symbol: 'PTUSDC',
    name: 'Prize USDC',
    decimals: '6'
  },
  [CHAIN_ID['optimism-goerli']]: {
    address: '0xA1860843Be50A4795f2b10E2ADBA0b8e7C602041',
    symbol: 'PTUSDCHYT',
    name: 'PoolTogether USDC Prize Token',
    decimals: '6'
  }
})
