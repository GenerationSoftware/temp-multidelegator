import { useV4Ticket } from '@hooks/v4/useV4Ticket'
import { BottomSheet, ModalTitle } from '@pooltogether/react-components'
import { dToS } from '@pooltogether/utilities'
import {
  addDelegationFundAtom,
  addDelegationCreationAtom,
  createDelegationModalOpenAtom
} from '../../atoms'
import { DelegationForm } from '../DelegationForm'
import { useNextSlot } from '@hooks/useNextSlot'
import {
  DelegationFormValues,
  DelegationFund,
  DelegationId,
  DelegationUpdate
} from '../../interfaces'
import { parseUnits } from 'ethers/lib/utils'
import { useAtom } from 'jotai'
import { useUpdateAtom } from 'jotai/utils'
import { useTranslation } from 'next-i18next'

export const CreateDelegationModal: React.FC<{
  chainId: number
  delegator: string
}> = (props) => {
  const { chainId, delegator } = props
  const [isOpen, setIsOpen] = useAtom(createDelegationModalOpenAtom)
  const nextSlotId = useNextSlot(chainId, delegator)
  const { t } = useTranslation()

  return (
    <BottomSheet label='delegation-edit-modal' isOpen={isOpen} closeModal={() => setIsOpen(false)}>
      <ModalTitle chainId={chainId} title={t('createDelegation') + ` #${nextSlotId.toString()}`} />
      <CreateDelegationForm
        chainId={chainId}
        delegationId={{
          slot: nextSlotId,
          delegator
        }}
        closeModal={() => setIsOpen(false)}
      />
    </BottomSheet>
  )
}

/**
 * @param props
 * @returns
 */
const CreateDelegationForm: React.FC<{
  chainId: number
  delegationId: DelegationId
  closeModal: () => void
}> = (props) => {
  const { chainId, delegationId, closeModal } = props
  const ticket = useV4Ticket(chainId)
  const { t } = useTranslation()

  const addDelegationCreation = useUpdateAtom(addDelegationCreationAtom)
  const addDelegationFund = useUpdateAtom(addDelegationFundAtom)

  const onSubmit = (data: DelegationFormValues, resetForm: () => void) => {
    const delegationCreation: DelegationUpdate = {
      ...delegationId,
      delegatee: data.delegatee,
      lockDuration: dToS(data.duration)
    }
    const delegationFund: DelegationFund = {
      ...delegationId,

      amount: parseUnits(data.balance, ticket.decimals)
    }

    addDelegationCreation(delegationCreation)
    if (!delegationFund.amount.isZero()) {
      addDelegationFund(delegationFund)
    }

    resetForm()
    closeModal()
  }

  return (
    <DelegationForm
      chainId={chainId}
      onSubmit={onSubmit}
      defaultValues={{
        delegatee: '',
        balance: '',
        duration: 0
      }}
      submitString={t('queueCreation')}
    />
  )
}
