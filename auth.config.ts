import { ThirdwebAuth } from "@thirdweb-dev/auth/next/solana";
import { domainName } from "./const/Details";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY!,
  domain: domainName,
});