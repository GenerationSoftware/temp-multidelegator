import { CHAIN_ID } from '@constants/misc'
import { Token } from '@pooltogether/hooks'

export const TICKET: { [chainId: number]: Token } = Object.freeze({
  [CHAIN_ID.optimism]: {
    address: '0x62BB4fc73094c83B5e952C2180B23fA7054954c4', // TODO: update on actual V5 deployment
    symbol: 'PTaUSDC',
    name: 'Prize Aave USDC',
    decimals: '6'
  },
  [CHAIN_ID['optimism-goerli']]: {
    address: '0xA1860843Be50A4795f2b10E2ADBA0b8e7C602041',
    symbol: 'PTUSDCHYT',
    name: 'PoolTogether USDC Prize Token',
    decimals: '6'
  }
})
