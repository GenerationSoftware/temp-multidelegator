import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { NextPage } from 'next/types'
import nextI18NextConfig from '../../next-i18next.config.js'
import { PagePadding } from '@components/Layout/PagePadding'
import { PageTitle } from '@components/Layout/PageTitle'
import { LoadingScreen } from '@pooltogether/react-components'
import { useUsersAddress } from '@pooltogether/wallet-connection'
import { DelegationDescription } from '@components/DelegationDescription'
import { DelegationList } from '@components/DelegationList'
import { UsersDelegationState } from '@components/UsersDelegationState'
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
} from '../atoms'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig))
    }
  }
}

const Layout = dynamic(() => import('@components/Layout'), {
  suspense: true
})

const Home: NextPage = () => {
  const [chainId] = useAtom(delegationChainIdAtom)
  const setChainId = useUpdateAtom(setDelegationChainAtom)
  const usersAddress = useUsersAddress()
  const [delegator] = useAtom(delegatorAtom)
  const setDelegator = useUpdateAtom(setDelegatorAtom)
  const { t } = useTranslation()

  // Lazy way to get the app to react on wallet connection
  useEffect(() => {
    if (!delegator) {
      setDelegator(usersAddress)
    }
  }, [usersAddress])

  return (
    <>
      <Head>
        <title>Delegate - PoolTogether</title>
        <meta name='description' content='Manage your deposit delegations.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Suspense fallback={<LoadingScreen />}>
        <Layout>
          <PagePadding>
            <PageTitle title={t('depositDelegator')} />
            <DelegationDescription className='mb-8' />
            <UsersDelegationState
              chainId={chainId}
              delegator={delegator}
              setDelegator={setDelegator}
              setChainId={setChainId}
              className='mb-8'
            />
            <DelegationList delegator={delegator} chainId={chainId} setDelegator={setDelegator} />
          </PagePadding>
        </Layout>
      </Suspense>
    </>
  )
}

export default Home
