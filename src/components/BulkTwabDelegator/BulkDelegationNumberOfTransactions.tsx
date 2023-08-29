import { SendTransactionOptions } from '@pooltogether/wallet-connection'

export const BulkDelegationNumberOfTransactions: React.FC<{
  isSignaturePending: boolean
  isChunkingPending: boolean
  bulkSendTransactionOptions: SendTransactionOptions[]
  isTransactionOptionsFetching: boolean
  isTransactionOptionsFetched: boolean
}> = (props) => {
  const {
    isSignaturePending,
    isChunkingPending,
    isTransactionOptionsFetching,
    isTransactionOptionsFetched,
    bulkSendTransactionOptions
  } = props

  let content: React.ReactNode

  if (isSignaturePending) {
    content = 'Pending wallet signature'
  } else if (isChunkingPending || isTransactionOptionsFetching) {
    content = 'Building transactions'
  } else if (!isTransactionOptionsFetched) {
    return null
  } else {
    content = `${bulkSendTransactionOptions.length} transaction(s)`
  }

  return <div>{content}</div>
}
