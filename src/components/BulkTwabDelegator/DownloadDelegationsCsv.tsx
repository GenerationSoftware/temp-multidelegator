import { useTicket } from '@hooks/useTicket'
import { Button, ButtonSize } from '@pooltogether/react-components'
import { delegationChainIdAtom, delegatorAtom } from '../../atoms'
import { useDelegatorsTwabDelegations } from '@hooks/useDelegatorsTwabDelegations'
import { Delegation, DelegationId } from '../../interfaces'
import { formatUnits } from 'ethers/lib/utils'
import FeatherIcon from 'feather-icons-react'
import { useAtom } from 'jotai'

export const DownloadDelegationsCsv = () => {
  const [chainId] = useAtom(delegationChainIdAtom)
  const [delegator] = useAtom(delegatorAtom)
  const { data: delegations, isFetched } = useDelegatorsTwabDelegations(chainId, delegator)
  const ticket = useTicket(chainId)

  return (
    <Button
      size={ButtonSize.sm}
      className='flex items-center justify-center space-x-1'
      disabled={!isFetched}
      onClick={() => {
        const csv = generateCsv(delegations, ticket.decimals)
        downloadCsv(csv, 'delegations')
      }}
    >
      <FeatherIcon icon='download' className='w-4 h-4' />
      <span>Download Delegations</span>
    </Button>
  )
}

const generateCsv = (
  delegations: {
    delegation: Delegation
    delegationId: DelegationId
  }[],
  decimals: string
) => {
  const csvHeaders = 'Delegatee (users address),Amount (without token decimal shifting)\n'
  const csvContent = delegations
    .map(({ delegation }) =>
      [delegation.delegatee, formatUnits(delegation.balance, decimals)].join(',')
    )
    .join('\r\n')

  return csvHeaders + csvContent
}

const downloadCsv = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const temp = document.createElement('a')
  temp.href = url
  temp.setAttribute('download', filename + '.csv')
  temp.click()
}
