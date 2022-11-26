import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import { Network } from "@thirdweb-dev/sdk/solana";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

export const network: Network = "devnet";
export const domain = "elon-dao.com";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      authConfig={{
        authUrl: "/api/auth",
        domain: process.env.VERCEL_URL || domain,
      }}
      network={network}
    >
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
