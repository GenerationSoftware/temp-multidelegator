import { TransactionState, useTransaction } from '@pooltogether/wallet-connection'
import { CreateDelegationModal } from '@components/DelegationList/CreateDelegationModal'
import { useDelegatorsUpdatedTwabDelegations } from '@hooks/useDelegatorsUpdatedTwabDelegations'
import { useResetDelegationAtomsOnAccountChange } from '@hooks/useResetDelegationAtomsOnAccountChange'
import classNames from 'classnames'
import { useState } from 'react'
import { ActiveState } from './ActiveState'
import { ConfirmUpdatesModal } from './ConfirmUpdatesModal'
import { EditDelegationModal } from './EditDelegationModal'
import { EmptyState } from './EmptyState'
import { ListStateActions } from './ListStateActions'
import { LoadingState } from './LoadingState'
import { NoDelegatorState } from './NoDelegatorState'

export interface DelegationListProps {
  className?: string
  chainId: number
  delegator: string
  setDelegator: (delegator: string) => void
}

export enum ListState {
  readOnly = 'READ_ONLY',
  edit = 'EDIT',
  withdraw = 'WITHDRAW'
}

/**
 *
 * @returns
 */
export const DelegationList: React.FC<DelegationListProps> = (props) => {
  const { chainId, delegator, className, setDelegator } = props
  useResetDelegationAtomsOnAccountChange()
  const useQueryResult = useDelegatorsUpdatedTwabDelegations(chainId, delegator)
  const [listState, setListState] = useState<ListState>(ListState.readOnly)
  const [transactionId, setTransactionId] = useState<string>()
  const transaction = useTransaction(transactionId)
  const [signaturePending, setSignaturePending] = useState(false)

  const transactionsPending = transaction?.state === TransactionState.pending || signaturePending
  const { data: delegations, isFetched } = useQueryResult

  if (isFetched) {
    let list
    if (delegations.length === 0) {
      list = (
        <EmptyState
          {...props}
          className='mb-10'
          delegator={delegator}
          setDelegator={setDelegator}
          listState={listState}
          setListState={setListState}
        />
      )
    } else {
      list = (
        <ActiveState
          {...props}
          className='mb-10'
          delegator={delegator}
          listState={listState}
          setListState={setListState}
          transactionsPending={transactionsPending}
        />
      )
    }
    return (
      <div className={classNames(className, 'text-xxxs xs:text-xs')}>
        <p
          className='text-center text-xs xs:text-sm uppercase font-semibold text-pt-purple-light mt-8 mb-2 xs:mb-2 xs:mt-2'
          id='delegations-title'
        >
          Delegations
        </p>

        {delegations.length >= 1 && (
          <ListStateActions
            chainId={chainId}
            listState={listState}
            delegator={delegator}
            setDelegator={setDelegator}
            setListState={setListState}
            transactionsPending={transactionsPending}
          />
        )}

        <div>{list}</div>

        <EditDelegationModal chainId={chainId} />
        <CreateDelegationModal chainId={chainId} delegator={delegator} />
        <ConfirmUpdatesModal
          chainId={chainId}
          delegator={delegator}
          transactionId={transactionId}
          setSignaturePending={setSignaturePending}
          setTransactionId={setTransactionId}
          onSuccess={() => setListState(ListState.readOnly)}
          transactionsPending={transactionsPending}
        />
      </div>
    )
  } else {
    if (!delegator) {
      return <NoDelegatorState {...props} />
    }
    return <LoadingState {...props} />
  }
}
