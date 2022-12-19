import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import { Network } from "@thirdweb-dev/sdk/solana";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { domainName, networkName } from '../const/Details';
require("@solana/wallet-adapter-react-ui/styles.css");

import { SessionProvider } from "next-auth/react";
import { Session } from 'inspector';

// export const network: Network = networkName;

function MyApp({ Component, pageProps }: AppProps<{session:Session;}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
