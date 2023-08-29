import { TICKET } from '@constants/tickets'

export const getTicketContractAddress = (chainId: number) => TICKET[chainId]?.address
