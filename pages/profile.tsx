import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Header from '../components/Header'
import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import { getUser } from '../auth.config'
import { programAddress } from "../const/Details";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Elon Dao | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* main */}
      <main>
        <div className="fixed inset-0 bg-white bg-opacity-80 overflow-y-auto h-full w-full ">
          <div className="relative top-20 mx-auto p-5">
            <div className="mt-3 text-center">
              <label className="block text-lg font-bold">Add your information below</label>
              <i>Nothing is mandatory</i>
            </div>
            <div className="mt-10 text-center">
              <div className="mb-5">
                <label className="block font-bold text-gray-700 text-xs">Username</label>
                <input className="w-80 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>

              <div className="mb-5">
                <label className="block font-bold text-gray-700 text-xs">Country</label>
                <div className="inline-block relative w-80">
                  <select className="block appearance-none w-full py-2 px-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option disabled>Select country</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <label className="block font-bold text-gray-700 text-xs">City</label>
                <div className="inline-block relative w-80">
                  <select className="block appearance-none w-full py-2 px-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option disabled>Select city</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="mb-10 flex flex-row space-x-4 justify-center"> 
                <div className="inline-flex">
                  <svg
                    className="w-6 h-6 text-blue-300 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    />
                  </svg>
                  <input className="w-50 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="inline-flex">
                  <svg 
                    className="w-6 h-auto dark:fill-indigo-200 mr-3"
                    viewBox="0 0 24 26" fill="#838CF1" xmlns="http://www.w3.org/2000/svg" 
                    data-darkreader-inline-fill="" >
                    <path d="M9.434 10C8.632 10 8 10.675 8 11.5S8.646 13 9.434 13c.801 0 1.434-.675 1.434-1.5.014-.825-.633-1.5-1.434-1.5zm5.132 0c-.801 0-1.434.675-1.434 1.5s.646 1.5 1.434 1.5c.802 0 1.434-.675 1.434-1.5s-.632-1.5-1.434-1.5z"></path><path d="M21.188 0H2.812c-.37 0-.737.07-1.078.206a2.832 2.832 0 00-.913.58 2.666 2.666 0 00-.609.869A2.55 2.55 0 000 2.677v17.577c0 .351.071.698.212 1.023.141.324.348.62.609.868s.571.446.913.58c.341.136.708.206 1.078.206h15.55l-.726-2.404 1.756 1.547 1.659 1.456L24 26V2.678c0-.35-.071-.698-.212-1.022a2.667 2.667 0 00-.609-.868 2.833 2.833 0 00-.913-.581A2.953 2.953 0 0021.188 0zm-5.294 16.978s-.493-.559-.905-1.053c1.797-.481 2.482-1.547 2.482-1.547a7.997 7.997 0 01-1.577.766 9.396 9.396 0 01-1.988.56c-1.175.205-2.38.2-3.552-.013a11.992 11.992 0 01-2.016-.559 8.246 8.246 0 01-1-.442c-.043-.026-.083-.04-.124-.065a.173.173 0 01-.055-.039c-.247-.13-.384-.221-.384-.221s.659 1.04 2.4 1.534c-.412.494-.92 1.079-.92 1.079-3.03-.09-4.181-1.976-4.181-1.976 0-4.186 1.974-7.58 1.974-7.58C8.023 6.02 9.9 6.059 9.9 6.059l.138.157C7.57 6.89 6.432 7.917 6.432 7.917s.301-.156.809-.377c1.467-.61 2.633-.78 3.113-.819.083-.013.15-.026.234-.026a11.704 11.704 0 016.898 1.223s-1.085-.976-3.416-1.653l.193-.207s1.88-.04 3.853 1.365c0 0 1.975 3.394 1.975 7.579 0 0-1.166 1.885-4.197 1.976z"></path>
                  </svg>
                  <input className="w-50 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Id" />
                </div>
              </div>

              <div className="mb-5">
                <label className="block font-bold text-gray-700 text-xs">Select your PFP</label>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </main>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const sdk = ThirdwebSDK.fromNetwork("devnet");

  const user = await getUser(req);

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const program = await sdk.getNFTDrop(programAddress);
  const nfts = await program?.getAllClaimed();

  const hasNFT = nfts?.some((nft) => nft.owner === user.address);

  if (!hasNFT) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
