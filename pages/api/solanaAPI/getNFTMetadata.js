import Moralis from "moralis";

export default async function handler(req, res) {

  const { network, address } = req.body;

  try {
    const response = await Moralis.SolApi.nft.getNFTMetadata({
      network: network,
      address: address,
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
}
