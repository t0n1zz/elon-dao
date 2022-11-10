import { useWallet } from "@solana/wallet-adapter-react"
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div>
      <Head>
        <title>Elon Dao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Map /> 
      </main>

      <Footer />
    </div>
  )
}

export default Home
