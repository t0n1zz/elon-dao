import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from "react"
import Head from 'next/head'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Profile from '../components/Profile'

import islandLogo from '../public/islandLogo.png'
import dynamic from 'next/dynamic';

import { useWallet } from "@solana/wallet-adapter-react";
import {
  useClaimNFT,
  useLogin,
  useLogout,
  useProgram,
  useUser,
} from "@thirdweb-dev/react/solana";
import Link from "next/link";

const Login: NextPage = () => {
  const { publicKey } = useWallet();
  const { user, isLoading: userLoading } = useUser();
  const login = useLogin();
  const logout = useLogout();
  const program = useProgram("programAddress", "nft-drop");
  const { mutate, isLoading } = useClaimNFT(program.data);

  if (userLoading) return <></>;

  const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  return (
    <div>
      <Head>
        <title>Elon Dao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="sticky top-0 z-50 flex flex-row bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div className="md:basis-1/4  relative flex items-center h-10 cursor-pointer my-auto">
          <Image 
            src={islandLogo}
            alt="islandLogo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div> 

        {/* middle */}
        <div className="md:basis-1/2 hidden md:inline">
          <div className="flex items-center space-x-2">
            <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center ">1</div>
            <p>Connect your wallet</p>
            <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">2</div>
            <p>Add your information</p>
            <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">3</div>
            <p>Appear on Anybodies' Island!</p>
          </div>
        </div>

        {/* right */}
        <div className="md:basis-1/4 flex items-center space-x-2 justify-end">
          {!publicKey && <WalletMultiButtonDynamic />}
          {publicKey && !user && (
            <button onClick={() => login()}>
              Login
            </button>
          )}
          {publicKey && user && (
            <div>
              <link href="/">
                Add Profile
              </link>
              <button onClick={() => logout()}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* main */}
      <main>
        <Map />
      </main>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Login