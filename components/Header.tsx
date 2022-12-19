import { FC, useState } from "react"
import Image from 'next/image'
import islandLogo from '../public/islandLogo.png'
import dynamic from 'next/dynamic';
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { useWallet } from "@solana/wallet-adapter-react"
import {
  useClaimNFT,
  useLogin,
  useLogout,
  useProgram,
  useUser,
} from "@thirdweb-dev/react/solana";

const Header: FC = ( toggle ) => {
  const { publicKey } = useWallet();
  const { user, isLoading: userLoading } = useUser();
  const login = useLogin();
  const logout = useLogout();

  const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  return (
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
          <p>Connect your wallet and login</p>
          <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">2</div>
          <p>Add your information</p>
          <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">3</div>
          <p>Appear on Anybodies' Island!</p>
        </div>
      </div>

      {/* right */}
      <div className="md:basis-1/4 flex items-center space-x-2 justify-end">
      {publicKey && !user && (
          <button className="inline-block rounded-sm bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700" onClick={() => login()}>
            Login
          </button>
        )}

        {publicKey && user
          ? <>
              {/* {showProfile 
                ? <XCircleIcon className="w-14 cursor-pointer text-gray-600 hover:text-gray-800" onClick={toggle} />
                : <PlusCircleIcon className="w-14 cursor-pointer text-gray-600 hover:text-gray-800" onClick={toggle} />} */}

              <button className="inline-block rounded- bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"  onClick={() => logout()}>
                Logout
              </button>
            </>
          : <></>}

        <WalletMultiButtonDynamic />
      </div>
    </header>
  )
}

export default Header