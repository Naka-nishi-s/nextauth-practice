"use client";

import { signIn } from "next-auth/react";

export default function Signinin() {
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
