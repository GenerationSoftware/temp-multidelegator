import { StyledInput } from '@components/Input'
import { StakeSvg } from '@components/SvgComponents'
import { ToolNetworkSelectionTrigger } from '@components/ToolNetworkSelectionTrigger'
import { useTicket } from '@hooks/useTicket'
import { useTokenBalance } from '@pooltogether/hooks'
import {
  BottomSheet,
  Button,
  ButtonTheme,
  ThemedClipSpinner,
  TokenIcon
} from '@pooltogether/react-components'
import { getNetworkNameAliasByChainId } from '@pooltogether/utilities'
import { AccountAvatar, BlockExplorerLink, useUsersAddress } from '@pooltogether/wallet-connection'
import { getPoolTogetherDepositUrl } from '@utils/getPoolTogetherDepositUrl'
import classNames from 'classnames'
import { constants } from 'ethers/lib'
import { isAddress } from 'ethers/lib/utils'
import FeatherIcon from 'feather-icons-react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDelegationSupportedChainIds } from '@hooks/useDelegationSupportedChainIds'
import { useDelegatorsStake } from '@hooks/useDelegatorsStake'
import { useIsUserDelegatorsRepresentative } from '@hooks/useIsUserDelegatorsRepresentative'
import { useTotalAmountDelegated } from '@hooks/useTotalAmountDelegated'
import { ManageRepresentativeModal } from './ManageRepresentativeModal'

interface UsersDelegationStateProps {
  className?: string
  chainId: number
  delegator: string
  setChainId: (chainId: number) => void
  setDelegator: (delegator: string) => void
}

export const UsersDelegationState: React.FC<UsersDelegationStateProps> = (props) => {
  const { className, chainId, setChainId, setDelegator, delegator } = props
  const ticket = useTicket(chainId)
  const { data: ticketBalance, isFetched: isTicketBalanceFetched } = useTokenBalance(
    chainId,
    delegator,
    ticket.address
  )
  const { data: delegationBalance, isFetched: isDelegationBalanceFetched } =
    useTotalAmountDelegated(chainId, delegator)
  const { t } = useTranslation()
  const chainIds = useDelegationSupportedChainIds()

  return (
    <>
      <div className='flex items-center bg-white dark:bg-pt-purple-dark rounded-full py-2 px-4'>
        <div className='w-full flex justify-between'>
          <div className='flex space-x-2 items-center'>
            <AccountAvatar sizeClassName='w-4 h-4' address={delegator || constants.AddressZero} />
            <BlockExplorerLink
              chainId={chainId}
              address={delegator || constants.AddressZero}
              shorten
              noIcon
            />
            <ChangeDelegatorButton delegator={delegator} setDelegator={setDelegator} />
            <ClearDelegatorButton delegator={delegator} setDelegator={setDelegator} />
          </div>
          <ToolNetworkSelectionTrigger
            currentChainId={chainId}
            supportedChainIds={chainIds}
            setChainId={setChainId}
            description={t('delegetionNetworkSelectDescription')}
            label='select-delegation-network-modal'
          />
        </div>
      </div>

      <div className={classNames(className, 'flex justify-between')}>
        <div className='flex flex-col space-y-1 mt-4 ml-4'>
          <div className='flex space-x-2 items-center'>
            <TokenIcon chainId={chainId} address={ticket.address} sizeClassName='w-4 h-4' />
            <span className='font-semibold opacity-60 text-xxs'>{ticket.symbol}</span>
            <a
              className='text-pt-teal hover:opacity-70 transition underline text-xxxs flex space-x-1 items-center'
              href={getPoolTogetherDepositUrl(chainId)}
              target='_blank'
              rel='noreferrer'
            >
              <span>{t('getTicker', { ticker: ticket.symbol })}</span>
              <FeatherIcon icon='external-link' className='w-3 h-3' />
            </a>
          </div>
          {delegator && (
            <div className='flex flex-col space-y-1'>
              {(!isDelegationBalanceFetched || !isDelegationBalanceFetched) && (
                <ThemedClipSpinner sizeClassName='w-3 h-3' />
              )}
              {isTicketBalanceFetched && (
                <div className='flex space-x-2 items-center'>
                  <FeatherIcon icon='credit-card' className='w-4 h-4 text-pt-teal' />
                  <div className='flex space-x-1 items-center text-xxs'>
                    <span className='opacity-80 font-semibold'>{`${ticketBalance.amountPretty}`}</span>
                    <span className='opacity-50 lowercase'>{t('balance')}</span>
                  </div>
                </div>
              )}
              {isDelegationBalanceFetched && (
                <div className='flex space-x-2 items-center'>
                  <FeatherIcon icon='gift' className='w-4 h-4 text-pt-teal' />
                  <div className='flex space-x-1 items-center text-xxs'>
                    <span className='opacity-80 font-semibold'>{`${delegationBalance.amountPretty}`}</span>
                    <span className='opacity-50 lowercase'>{t('delegated')}</span>
                  </div>
                </div>
              )}
              <DelegatorsStake chainId={chainId} delegator={delegator} />
            </div>
          )}
        </div>
        <div className='flex flex-col space-y-1 mt-4 mr-4 items-end'>
          <BulkDelegationRepresentativeButton chainId={chainId} delegator={delegator} />
          <ManageRepresentativeButton chainId={chainId} delegator={delegator} />
          <RepresentativeIcon chainId={chainId} delegator={delegator} />
        </div>
      </div>
    </>
  )
}

const ClearDelegatorButton: React.FC<{
  delegator: string
  setDelegator: (delegator: string) => void
}> = (props) => {
  const { delegator, setDelegator } = props
  const usersAddress = useUsersAddress()

  if (delegator === usersAddress) return null

  return (
    <button onClick={() => setDelegator(usersAddress)}>
      <FeatherIcon icon='x' className='text-pt-red-light w-4 h-4 transition hover:opacity-70' />
    </button>
  )
}

const ChangeDelegatorButton: React.FC<{
  delegator: string
  setDelegator: (delegator: string) => void
}> = (props) => {
  const { delegator, setDelegator } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (!delegator) return null

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='transition text-highlight-3 hover:text-pt-teal items-center'
      >
        <FeatherIcon icon='search' className='w-3 h-3' />
      </button>
      <ChangeDelegatorModal
        isOpen={isOpen}
        delegator={delegator}
        setDelegator={setDelegator}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export const ChangeDelegatorModal: React.FC<{
  isOpen: boolean
  delegator: string
  setDelegator: (delegator: string) => void
  setIsOpen: (isOpen: boolean) => void
}> = (props) => {
  const { isOpen, delegator, setDelegator, setIsOpen } = props

  const usersAddress = useUsersAddress()
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid }
  } = useForm<{ delegator: string }>({
    mode: 'onTouched',
    defaultValues: { delegator },
    shouldUnregister: true
  })

  const onSubmit = (v: { delegator: string }) => {
    setDelegator(v.delegator)
    setIsOpen(false)
    reset()
  }

  return (
    <BottomSheet label='delegator-change-modal' isOpen={isOpen} closeModal={() => setIsOpen(false)}>
      <h6 className='text-center uppercase text-sm mb-3 mt-2'>{t('viewADelegator')}</h6>
      <p className='max-w-sm mx-auto text-xs mb-8 text-center'>
        {t('enterAddressToViewDelegations')}
      </p>
      <form
        onSubmit={handleSubmit((v) => onSubmit(v))}
        autoComplete='off'
        className='flex flex-col'
      >
        {/* TODO: Is this clearer than the clear button? Showing a shortcut to fill input with the users address. */}
        {/* {usersAddress && (
          <button
            type='button'
            className='transition ml-auto font-bold text-pt-teal hover:opacity-70'
            disabled={!isValid}
            onClick={() => setValue('delegator', usersAddress, { shouldValidate: true })}
          >
            {shorten({ hash: usersAddress })}
          </button>
        )} */}
        <StyledInput
          id='delegator'
          invalid={!!errors.delegator}
          className='w-full mb-4'
          placeholder='0xabc...'
          {...register('delegator', {
            required: {
              value: true,
              message: t('delegatorRequired')
            },
            validate: {
              isAddress: (v) => isAddress(v) || (t('invalidAddress') as string)
            }
          })}
        />
        <Button className='w-full capitalize' disabled={!isValid}>
          {t('viewDelegations')}
        </Button>
        {usersAddress && delegator && usersAddress !== delegator && (
          <Button
            type='button'
            className='w-full mt-4 capitalize'
            theme={ButtonTheme.orangeOutline}
            onClick={() => {
              setDelegator(usersAddress)
              setIsOpen(false)
            }}
          >
            {t('clearDelegator')}
          </Button>
        )}
      </form>
    </BottomSheet>
  )
}

const ManageRepresentativeButton: React.FC<{
  delegator: string
  chainId: number
}> = (props) => {
  const { chainId, delegator } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const usersAddress = useUsersAddress()
  const { t } = useTranslation()

  if (!usersAddress || usersAddress !== delegator) return null

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='flex space-x-2 transition  hover:opacity-70 items-center text-right'
      >
        <span>{t('representatives')}</span>
        <FeatherIcon icon='user' className='w-4 h-4 text-highlight-3' />
      </button>
      <ManageRepresentativeModal
        delegator={delegator}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        chainId={chainId}
      />
    </>
  )
}

const BulkDelegationRepresentativeButton: React.FC<{
  delegator: string
  chainId: number
}> = (props) => {
  const { chainId, delegator } = props

  const router = useRouter()

  if (router.pathname === '/bulk') return null

  return (
    <Link
      href={`/bulk?delegator=${delegator}&delegation_chain=${getNetworkNameAliasByChainId(
        chainId
      )}`}
    >
      <a className='flex space-x-2 transition  hover:opacity-70 items-center text-right'>
        <span>Bulk delegation</span>
        <FeatherIcon icon='align-justify' className='w-4 h-4 text-highlight-3' />
      </a>
    </Link>
  )
}

const RepresentativeIcon: React.FC<{
  delegator: string
  chainId: number
}> = (props) => {
  const { chainId, delegator } = props
  const usersAddress = useUsersAddress()
  const { data: isUserARepresentative, isFetched: isRepresentativeFetched } =
    useIsUserDelegatorsRepresentative(chainId, usersAddress, delegator)
  const { t } = useTranslation()

  if (!usersAddress || !delegator || !isRepresentativeFetched || !isUserARepresentative) return null

  return (
    <div className='flex items-center space-x-1 ml-auto'>
      <span className='text-xxs'>{t('approvedRep', 'Approved rep')}</span>
      <FeatherIcon icon='check' className='w-4 h-4 text-pt-teal' />
    </div>
  )
}

const DelegatorsStake: React.FC<{ chainId: number; delegator: string }> = (props) => {
  const { chainId, delegator } = props
  const { data: stake, isFetched } = useDelegatorsStake(chainId, delegator)
  const { t } = useTranslation()

  if (!isFetched || !stake.hasBalance) return null

  return (
    <div className='flex space-x-2 items-center'>
      <div className='text-pt-teal w-4 h-4'>
        <StakeSvg />
      </div>
      <div className='flex space-x-1 items-center text-xxs'>
        <span className='opacity-80 font-semibold'>{`${stake.amountPretty}`}</span>
        <span className='opacity-50 lowercase'>{t('staked', 'Staked')}</span>
      </div>
    </div>
  )
}
