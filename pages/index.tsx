import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Map from '../components/Map'
import { useWallet } from "@solana/wallet-adapter-react"

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
