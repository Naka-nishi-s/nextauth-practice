"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/table";

  return (
    <main>
      <div>ログインページ</div>
      <div>
        <button onClick={() => signIn("google", { callbackUrl })}>
          ログインボタン
        </button>
      </div>
    </main>
  );
}
