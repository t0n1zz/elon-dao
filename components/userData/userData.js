import React from "react";
import { useSession } from "next-auth/react";

export default function UserData() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <div>
        {session?.user.address}
      </div>
    );
  }
}
