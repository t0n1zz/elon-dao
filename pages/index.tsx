import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Map from '../components/Map'

import Header from '../components/Header'
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import { useEffect } from 'react'

import Image from 'next/image'
import islandLogo from '../public/islandLogo.png'
import dynamic from 'next/dynamic';

import LoginBtn from "../components/loginBtn/loginBtn";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    session && status === "authenticated" && router.push("./user");
  }, [session, status]);

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
            <p>Login</p>
            <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">2</div>
            <p>Add your information</p>
            <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">3</div>
            <p>Appear on Anybodies' Island!</p>
          </div>
        </div>

        {/* right */}
        <div className="md:basis-1/4 flex items-center space-x-2 justify-end">
          {!session ? (
            <LoginBtn />
          ) : (
            <>Loading...</>
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

export default Home
