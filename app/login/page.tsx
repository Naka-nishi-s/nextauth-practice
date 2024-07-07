"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main>
      <div>ログインページ</div>
      <div>
        <button onClick={() => signIn("google", { callbackUrl: "/sample" })}>
          ログインボタン
        </button>
      </div>
    </main>
  );
}
