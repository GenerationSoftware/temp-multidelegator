import { ErrorMessage } from '@components/ErrorMessage'
import { StyledInput } from '@components/Input'
import { Label } from '@components/Label'
import { useV4Ticket } from '@hooks/v4/useV4Ticket'
import { Button, Tooltip } from '@pooltogether/react-components'
import { sToD } from '@pooltogether/utilities'
import { useMaxLockDuration } from '@hooks/useMaxLockDuration'
import { DelegationFormValues } from '../interfaces'
import { isAddress, parseUnits } from 'ethers/lib/utils'
import FeatherIcon from 'feather-icons-react'
import { useForm } from 'react-hook-form'

interface DelegationFormProps {
  onSubmit: (data: DelegationFormValues, resetForm: () => void) => void
  defaultValues: DelegationFormValues
  submitString: string
  chainId: number
}

/**
 *
 * @param props
 * @returns
 */
export const DelegationForm: React.FC<DelegationFormProps> = (props) => {
  const { onSubmit, defaultValues, submitString, chainId } = props

  const ticket = useV4Ticket(chainId)
  const { data: maxLockDuration, isFetched: isMaxLockFetched } = useMaxLockDuration(chainId)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<DelegationFormValues>({
    mode: 'onTouched',
    defaultValues,
    shouldUnregister: true
  })

  return (
    <form
      onSubmit={handleSubmit((v) => onSubmit(v, reset))}
      className='flex flex-col'
      autoComplete='off'
    >
      <Label className='uppercase' htmlFor='delegatee'>
        Delegatee *
      </Label>
      <StyledInput
        id='delegatee'
        invalid={!!errors.delegatee}
        className='w-full'
        placeholder='0xabc...'
        {...register('delegatee', {
          required: {
            value: true,
            message: 'Delegatee is required'
          },
          validate: {
            isAddress: (v) => isAddress(v) || 'Invalid address'
          }
        })}
      />
      <ErrorMessage className='mb-4'>
        {!!errors?.delegatee?.message && typeof errors.delegatee.message === 'string'
          ? errors.delegatee.message
          : null}
      </ErrorMessage>
      <Label className='uppercase' htmlFor='balance'>
        {`Amount (${ticket.symbol})`} *
      </Label>
      <StyledInput
        id='balance'
        invalid={!!errors.balance}
        className='w-full'
        placeholder='eg. 1000'
        {...register('balance', {
          required: {
            value: true,
            message: 'Balance is required'
          },
          validate: {
            isNumber: (v) => !isNaN(Number(v)) || 'Balance must be a number',
            isValidBigNumber: (v) => {
              try {
                parseUnits(v, ticket.decimals)
                return true
              } catch (e) {
                return 'Invalid balance'
              }
            },
            isPositive: (v) => Number(v) >= 0 || 'Balance must be a positive number'
          }
        })}
      />
      <ErrorMessage className='mb-4'>{errors.balance?.message}</ErrorMessage>

      <Tooltip id={`lock-tooltip-form`} tip={'Duration to lock the delegation'}>
        <div className='col-span-2 flex space-x-2 items-center'>
          <Label className='uppercase' htmlFor='duration'>
            Optional Lock Duration (Days)
          </Label>
          <FeatherIcon icon={'help-circle'} className='w-4 h-4 opacity-70' />
        </div>
      </Tooltip>

      {/* TODO: Probably want to add a toggle here. On is unlocked and duration input is disabled. Off lets users input the number of days. */}
      <StyledInput
        id='duration'
        invalid={!!errors.duration}
        className='w-1/3'
        placeholder='eg. 0'
        disabled={!isMaxLockFetched}
        {...register('duration', {
          required: {
            value: true,
            message: 'Duration is required'
          },
          valueAsNumber: true,
          min: {
            value: 0,
            message: 'Minimum duration of 0 days'
          },
          max: {
            value: sToD(maxLockDuration),
            message: `Maximum duration of ${sToD(maxLockDuration)} days`
          }
        })}
      />
      <ErrorMessage>{errors.duration?.message}</ErrorMessage>
      <Button className='mt-4' disabled={!isValid || !isMaxLockFetched} type='submit'>
        {submitString}
      </Button>
    </form>
  )
}
