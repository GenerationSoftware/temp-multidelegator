import { PagePadding } from '@components/Layout/PagePadding'
import { PageTitle } from '@components/Layout/PageTitle'
import { LoadingScreen } from '@pooltogether/react-components'
import { useUsersAddress } from '@pooltogether/wallet-connection'
import { UsersDelegationState } from '../UsersDelegationState'
import { useAtom } from 'jotai'
import { useUpdateAtom } from 'jotai/utils'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic.js'
import { useEffect } from 'react'
import { Suspense } from 'react'
import {
  delegationChainIdAtom,
  delegatorAtom,
  setDelegationChainAtom,
  setDelegatorAtom
} from '../../atoms'
import { BulkDelegationDescription } from './BulkDelegationDescription'
import { BulkTwabDelegationSteps } from './BulkTwabDelegationSteps'
import { LockedDelegationsWarning } from './LockedDelegationsWarning'

const Layout = dynamic(() => import('@components/Layout'), {
  suspense: true
})

export const BulkTwabDelegator: React.FC = () => {
  const [chainId] = useAtom(delegationChainIdAtom)
  const [delegator] = useAtom(delegatorAtom)
  const setChainId = useUpdateAtom(setDelegationChainAtom)
  const usersAddress = useUsersAddress()
  const setDelegator = useUpdateAtom(setDelegatorAtom)
  const { t } = useTranslation()

  // Lazy way to get the app to react on wallet connection
  useEffect(() => {
    if (!delegator) {
      setDelegator(usersAddress)
    }
  }, [usersAddress])

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Layout>
        <PagePadding>
          <PageTitle title={t('bulkDepositDelegator', 'Bulk deposit delegator') + ' (beta)'} />
          <BulkDelegationDescription className='mb-8' />
          <UsersDelegationState
            chainId={chainId}
            delegator={delegator}
            setDelegator={setDelegator}
            setChainId={setChainId}
            className='mb-8'
          />
          <LockedDelegationsWarning chainId={chainId} delegator={delegator} />
          <BulkTwabDelegationSteps />
        </PagePadding>
      </Layout>
    </Suspense>
  )
}
