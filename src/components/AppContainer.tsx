import { RPC_URLS } from '@constants/config'
import { useInitCookieOptions } from '@pooltogether/hooks'
import { ScreenSize, useScreenSize, LoadingScreen } from '@pooltogether/react-components'
import { useUpdateStoredPendingTransactions, initRpcUrls } from '@pooltogether/wallet-connection'
import {
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  DisclaimerComponent
} from '@rainbow-me/rainbowkit'
import { getSupportedChains } from '@utils/getSupportedChains'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { publicProvider } from '@wagmi/core/providers/public'
import { Provider as JotaiProvider } from 'jotai'
import { Trans } from 'next-i18next'
import { useTranslation } from 'next-i18next'
import { ThemeProvider, useTheme } from 'next-themes'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer, ToastContainerProps } from 'react-toastify'
import { configureChains, Connector, createClient, useAccount, WagmiConfig } from 'wagmi'
import { getWalletConnectors } from '../services/walletConnection'

// Initialize react-query Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  }
})

// Initialize global RPC URLs for external packages
initRpcUrls(RPC_URLS)

const supportedChains = getSupportedChains()

const { chains, provider } = configureChains(supportedChains, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: RPC_URLS[chain.id]
    })
  }),
  publicProvider()
])

const connectors: () => Connector[] = getWalletConnectors(supportedChains)

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

/**
 * AppContainer wraps all pages in the app. Used to set up globals.
 * @param props
 * @returns
 */
export const AppContainer: React.FC<AppProps> = (props) => {
  const {} = props

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={{
          lightMode: lightTheme({
            accentColor: '#ff77e1',
            accentColorForeground: '#1A1B1F',
            borderRadius: 'small',
            overlayBlur: 'small'
          }),
          darkMode: darkTheme({
            accentColor: '#35f0d0',
            accentColorForeground: '#1A1B1F',
            borderRadius: 'small',
            overlayBlur: 'small'
          })
        }}
        chains={chains}
        appInfo={{
          appName: 'PoolTogether',
          disclaimer: Disclaimer
        }}
      >
        <JotaiProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <ThemeProvider attribute='class' defaultTheme='dark'>
              <ThemedToastContainer />
              <Content {...props} />
            </ThemeProvider>
          </QueryClientProvider>
        </JotaiProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

const Content: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  const isInitialized = useInitialLoad()

  if (!isInitialized) {
    return <LoadingScreen />
  }
  return <Component {...pageProps} />
}

const useInitialLoad = () => {
  const { i18n } = useTranslation()
  useUpdateStoredPendingTransactions()
  useInitCookieOptions(process.env.NEXT_PUBLIC_DOMAIN_NAME)
  const { status } = useAccount()
  return !!i18n.isInitialized && status !== 'reconnecting'
}

const ThemedToastContainer: React.FC<ToastContainerProps> = (props) => {
  const { theme, systemTheme } = useTheme()
  const screenSize = useScreenSize()
  return (
    <ToastContainer
      {...props}
      style={{ zIndex: '99999' }}
      position={screenSize > ScreenSize.sm ? 'bottom-right' : 'top-center'}
      autoClose={7000}
      theme={theme === 'system' ? systemTheme : (theme as 'dark' | 'light')}
    />
  )
}

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    <Trans
      i18nKey='connectWalletTermsAndDisclaimerBlurb'
      components={{
        termsLink: <Link href='https://pooltogether.com/terms/' children={undefined} />,
        disclaimerLink: (
          <Link href='https://pooltogether.com/protocol-disclaimer/' children={undefined} />
        )
      }}
    />
  </Text>
)
