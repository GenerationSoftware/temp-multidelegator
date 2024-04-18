import { CHAIN_ID } from '@constants/misc'
import { Token } from '@pooltogether/hooks'

export const TICKET: { [chainId: number]: Token } = Object.freeze({
  [CHAIN_ID.optimism]: {
    address: '0x03D3CE84279cB6F54f5e6074ff0F8319d830dafe',
    symbol: 'przUSDC',
    name: 'Prize USDC',
    decimals: '6'
  }
})
