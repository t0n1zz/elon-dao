import React from "react";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button className="inline-block rounded-sm bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
