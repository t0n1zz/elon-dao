import { FC } from "react"
import Image from 'next/image'
import islandLogo from '../public/islandLogo.png'
import dynamic from 'next/dynamic';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

const Header: FC = () => {
  const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  return (
    <header className="sticky top-0 z-50 flex flex-row bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="basis-1/4 relative flex items-center h-10 cursor-pointer my-auto">
        <Image 
          src={islandLogo}
          alt="islandLogo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div> 

      {/* middle */}
      <div className="basis-1/2 flex items-center space-x-2">
        <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">1</div>
        <p>Connect your wallet</p>
        <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">2</div>
        <p>Add your information</p>
        <div className=" bg-gray-700 p-2 text-white w-8 h-8 rounded-full flex justify-center items-center">3</div>
        <p>Appear on Anybodies' Island!</p>
      </div>

      {/* right */}
      <div className="basis-1/4 flex items-center space-x-4 justify-end">
        <WalletMultiButtonDynamic />
      </div>
    </header>
  )
}

export default Header