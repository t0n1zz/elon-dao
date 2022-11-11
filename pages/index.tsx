import type { NextPage } from 'next'
import { useWallet } from "@solana/wallet-adapter-react"
import Head from 'next/head'
import Header from '../components/Header'
import Disconnected from '../components/Disconnected'
import Footer from '../components/Footer'
import Connected from '../components/Connected'

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div>
      <Head>
        <title>Elon Dao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* main */}
      <main>
        {connected ? <Connected /> : <Disconnected />}
      </main>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home
