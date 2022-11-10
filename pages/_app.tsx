import '../styles/globals.css'
import WalletContextProvider from '../components/WalletContextProvider'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  )
}

export default MyApp
