import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Map from '../components/Map'

import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react'

import Image from 'next/image'
import islandLogo from '../public/islandLogo.png'
import dynamic from 'next/dynamic';

import LoginBtn from "../components/loginBtn/loginBtn";
import LogoutBtn from "../components/logoutBtn/logoutBtn";
import Link from 'next/link'
import 'mapbox-gl/dist/mapbox-gl.css';

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // session && status === "authenticated" && router.push("./user");
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(false));
    router.events.on("routeChangeComplete", (e) => setLoading(true));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(false));
      router.events.off("routeChangeComplete", (e) => setLoading(true));
    };
  }, [session, status, router.events]);

  console.log(loading);

  return (
    <div>
      <Head>
        <title>Elon Dao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="sticky top-0 z-50 flex flex-row bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div className="md:basis-1/4  relative flex items-center h-10 my-auto">
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
            <p>Login go to Profile</p>
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
            <>
            { status == "authenticated" ?
                <>
                  {!loading ? 
                    <button className="inline-block rounded-sm bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700" disabled
                    >
                      Loading...
                    </button>
                    :
                    <>
                      <Link href={"/user"} passHref>
                        <button className="inline-block rounded-sm bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                        >
                          Profile
                        </button> 
                      </Link>
                      <LogoutBtn />
                    </>
                  }
                </>
              :
                <button className="inline-block rounded-sm bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700" disabled
                >
                  Loading...
                </button>
            }
            </>
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
