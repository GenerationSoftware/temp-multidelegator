import TicketAbi from '@abis/Ticket'
import { Signer } from '@ethersproject/abstract-signer'
import { BaseProvider } from '@ethersproject/providers'
import { getReadProvider } from '@pooltogether/wallet-connection'
import { getTicketContractAddress } from '@utils/getTicketContractAddress'
import { Contract, ethers } from 'ethers'

export const getTicketContract = (
  chainId: number,
  _providerOrSigner?: BaseProvider | Signer
): Contract => {
  const ticketAddress = getTicketContractAddress(chainId)
  const providerOrSigner = _providerOrSigner || getReadProvider(chainId)
  return new ethers.Contract(ticketAddress, TicketAbi, providerOrSigner)
}
