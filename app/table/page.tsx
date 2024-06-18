"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Table() {
  const session = useSession();
  console.log(session);

  const router = useRouter();
  if (session.status === "unauthenticated") {
    router.push("/login");
  }

  const handleClick = () => {
    signOut();
  };

  return (
    <div>
      <div>こんにちは。</div>
      <div>サインアウト</div>
      <button onClick={handleClick}>サインアウト</button>
    </div>
  );
}
