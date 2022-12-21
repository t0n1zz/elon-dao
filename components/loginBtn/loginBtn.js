import React from "react";
import { signIn } from "next-auth/react";

export default function LoginBtn() {
  const authenticate = async () => {
    const provider = window.phantom?.solana;
    const resp = await provider.connect();
    const address = resp.publicKey.toString();
    const chain = 'mainnet';
    const account = {
      address: address,
      chain: chain,
      network: "solana",
    };
    const message = "Sign to provide access to app";
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await provider.signMessage(encodedMessage, "utf8");
    const signature = window.btoa(
      String.fromCharCode.apply(null, signedMessage.signature)
    );
    try {
      await signIn("credentials", {
        address,
        chain,
        message,
        signature,
        redirect: false,
      });
      push("/");
    } catch (e) {
      console.log(e);
      return;
    }
  };

  return (
    <button className="inline-block rounded-sm bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
      onClick={() => {
        authenticate();
      }}
    >
      Login
    </button>
  );
}
