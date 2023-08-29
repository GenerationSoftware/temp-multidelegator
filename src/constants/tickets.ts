import { CHAIN_ID } from '@constants/misc'
import { Token } from '@pooltogether/hooks'

export const TICKET: { [chainId: number]: Token } = Object.freeze({
  [CHAIN_ID.optimism]: {
    address: '',
    symbol: 'PTaUSDC',
    name: 'Prize Aave USDC',
    decimals: '6'
  },
  [CHAIN_ID['optimism-goerli']]: {
    address: '0x0410CaE69dD01f58224d54881648E35c6CB874FA',
    symbol: 'PTUSDCHYT',
    name: 'PoolTogether USDC Prize Token',
    decimals: '6'
  }
})
