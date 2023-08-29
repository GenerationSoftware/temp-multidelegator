import { TxButton } from '@components/Buttons/TxButton'
import { ErrorMessage } from '@components/ErrorMessage'
import { StyledInput } from '@components/Input'
import { BottomSheet, ModalTitle, Button, ButtonTheme } from '@pooltogether/react-components'
import {
  useSendTransaction,
  useTransaction,
  useUsersAddress
} from '@pooltogether/wallet-connection'
import { isAddress } from 'ethers/lib/utils'
import FeatherIcon from 'feather-icons-react'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSigner } from 'wagmi'
import { DELEGATION_LEARN_MORE_URL } from '@constants/config'
import { useIsUserDelegatorsRepresentative } from '@hooks/useIsUserDelegatorsRepresentative'
import { getTwabDelegatorContract } from '@utils/getTwabDelegatorContract'

enum ModalState {
  main = 'MAIN',
  add = 'ADD',
  remove = 'REMOVE'
}

/**
 *
 * @param props
 * @returns
 */
export const ManageRepresentativeModal: React.FC<{
  chainId: number
  isOpen: boolean
  delegator: string
  setIsOpen: (isOpen: boolean) => void
}> = (props) => {
  const { chainId, delegator, isOpen, setIsOpen } = props

  const [modalState, setModalState] = useState<ModalState>(ModalState.main)
  const { t } = useTranslation()

  let view = (
    <ManageRepresentativeHomeView
      chainId={chainId}
      delegator={delegator}
      setIsOpen={setIsOpen}
      setModalState={setModalState}
    />
  )
  if (modalState === ModalState.add) {
    view = (
      <AddRepresentativeView
        chainId={chainId}
        delegator={delegator}
        setIsOpen={setIsOpen}
        setModalState={setModalState}
      />
    )
  } else if (modalState === ModalState.remove) {
    view = (
      <RemoveRepresentativeView
        chainId={chainId}
        delegator={delegator}
        setIsOpen={setIsOpen}
        setModalState={setModalState}
      />
    )
  }

  return (
    <BottomSheet
      label='representative-management-modal'
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}
      className='space-y-4'
    >
      {view}
    </BottomSheet>
  )
}

const ManageRepresentativeHomeView: React.FC<{
  chainId: number
  delegator: string
  setIsOpen: (isOpen: boolean) => void
  setModalState: (modalState: ModalState) => void
}> = (props) => {
  const { delegator, setModalState, chainId } = props
  const { t } = useTranslation()
  const usersAddress = useUsersAddress()
  return (
    <>
      <ModalTitle chainId={chainId} title={t('manageRepresentatives', 'Manage representatives')} />
      <p className='mx-auto text-xs'>{t('representativeExplainer')}</p>
      <a
        className='transition text-pt-teal hover:opacity-70 underline flex items-center space-x-1'
        href={DELEGATION_LEARN_MORE_URL}
        target='_blank'
        rel='noreferrer'
      >
        <span>{t('learnMore')}</span>
        <FeatherIcon icon='external-link' className='w-3 h-3' />
      </a>
      {usersAddress === delegator && (
        <div className='mx-auto space-y-2'>
          <div className='text-xs opacity-70'>{t('manageRepresentatives')}</div>
          <Button onClick={() => setModalState(ModalState.add)} className='w-full'>
            {t('addARep')}
          </Button>
          <Button onClick={() => setModalState(ModalState.remove)} className='w-full'>
            {t('removeARep')}
          </Button>
        </div>
      )}
    </>
  )
}

const SetRepresentativeView: React.FC<{
  chainId: number
  set: boolean
  delegator: string
  setIsOpen: (isOpen: boolean) => void
  setModalState: (modalState: ModalState) => void
}> = (props) => {
  const { chainId, set, delegator, setModalState } = props
  const { t } = useTranslation()

  const [transactionId, setTransactionId] = useState<string>('')
  const transaction = useTransaction(transactionId)
  const {
    register,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm<{ representative: string }>({
    mode: 'onTouched',
    shouldUnregister: true
  })
  const { data: signer } = useSigner()
  const sendTransaction = useSendTransaction()
  const representative = watch('representative')

  const {
    data: isAddressARepresentative,
    isFetched,
    isFetching
  } = useIsUserDelegatorsRepresentative(chainId, representative, delegator)

  const onSubmit = (representative: string) => {
    const contract = getTwabDelegatorContract(chainId, signer)

    setTransactionId(
      sendTransaction({
        name: set ? 'Add Representative' : 'Remove Representative',
        callTransaction: () => contract.setRepresentative(representative, set),
        callbacks: {
          onConfirmedByUser: () => reset()
        }
      })
    )
  }
  return (
    <>
      <form autoComplete='off' className='flex flex-col'>
        <span className='ml-1 opacity-70'>{t('repAddress', 'Representative Address')}</span>
        <StyledInput
          id='representative'
          invalid={!!errors.representative}
          className='w-full'
          placeholder='0xabc...'
          {...register('representative', {
            required: {
              value: true,
              message: 'Representative required'
            },
            validate: {
              isAddress: (v) => isAddress(v) || (t('invalidAddress') as string)
            }
          })}
        />
        <ErrorMessage className=''>
          {errors.representative?.message || (
            <>
              {!!representative &&
                !isAddressARepresentative &&
                !set &&
                'Address is not a representative'}
              {!!representative &&
                isAddressARepresentative &&
                set &&
                'Address is already a representative'}
            </>
          )}
        </ErrorMessage>
        <TxButton
          type='button'
          chainId={chainId}
          state={transaction?.state}
          status={transaction?.status}
          className='w-full capitalize mb-3'
          disabled={
            !isValid ||
            isFetching ||
            !isFetched ||
            (!isAddressARepresentative && !set) ||
            (isAddressARepresentative && set)
          }
          onClick={() => onSubmit(representative)}
        >
          {set ? 'Add representative' : 'Remove representative'}
        </TxButton>
        <Button theme={ButtonTheme.tealOutline} onClick={() => setModalState(ModalState.main)}>
          Back
        </Button>
      </form>
    </>
  )
}

const AddRepresentativeView: React.FC<{
  chainId: number
  delegator: string
  setIsOpen: (isOpen: boolean) => void
  setModalState: (modalState: ModalState) => void
}> = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <ModalTitle chainId={props.chainId} title={t('addARep', 'Add a representative')} />
      <p className='mx-auto text-xs mb-12'>
        {t(
          'addRepExplainer',
          'Enter an address to add it as a representative. Representatives have access to edit your delegations while you maintain full custody of your staked funds.'
        )}
      </p>
      <a
        className='transition text-pt-teal hover:opacity-70 underline flex items-center space-x-1'
        href={DELEGATION_LEARN_MORE_URL}
        target='_blank'
        rel='noreferrer'
      >
        <span>{t('learnMore')}</span>
        <FeatherIcon icon='external-link' className='w-3 h-3' />
      </a>
      <SetRepresentativeView {...props} set={true} />
    </>
  )
}

const RemoveRepresentativeView: React.FC<{
  chainId: number
  delegator: string
  setIsOpen: (isOpen: boolean) => void
  setModalState: (modalState: ModalState) => void
}> = (props) => {
  const { t } = useTranslation()
  return (
    <>
      <ModalTitle chainId={props.chainId} title={t('removeARep', 'Remove a representative')} />
      <p className='mx-auto text-xs'>
        {t(
          'removeRepExplainer',
          'Enter an address to remove it from your representatives. They will no longer have access to edit your delegations once the transaction has confirmed.'
        )}
      </p>
      <a
        className='transition text-pt-teal hover:opacity-70 underline flex items-center space-x-1'
        href={DELEGATION_LEARN_MORE_URL}
        target='_blank'
        rel='noreferrer'
      >
        <span>{t('learnMore')}</span>
        <FeatherIcon icon='external-link' className='w-3 h-3' />
      </a>
      <SetRepresentativeView {...props} set={false} />
    </>
  )
}
