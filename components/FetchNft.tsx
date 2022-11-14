import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js"
import { FC, useEffect, useState } from "react"

export const FetchNft: FC = () => {
  interface OffChainData {
    name: string,
    description: string,
    image: string,
    attributes: 
      {
        trait_type: string
          value: string 
        }[],
  }

  const [nftData, setNftData] = useState<OffChainData[]>()
  const { connection } = useConnection()
  const wallet = useWallet()
  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))

  const fetchNfts = async () => {
    if (!wallet.connected) {
      return
    }

    if (!wallet.publicKey) {
      return
    }

    // fetch NFTs for connected wallet
    const nfts = await metaplex
      .nfts()
      .findAllByOwner({ owner: wallet.publicKey })

    // fetch off chain metadata for each NFT
    let nftData = []
    for (let i = 0; i < nfts.length; i++) {
      let fetchResult = await fetch(nfts[i].uri)
      let json = await fetchResult.json()
      nftData.push(json)
    }

    // set state
    setNftData(nftData)
  }

  // fetch nfts when connected wallet changes
  useEffect(() => {
    fetchNfts()
  }, [wallet])

  return (
    <div>
      {nftData && (
        <div>
          {nftData.map((nft) => (
            <div>
              <ul>{nft.name}</ul>
              <img src={nft.image} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
