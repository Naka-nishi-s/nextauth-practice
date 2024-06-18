"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <main className={styles.main}>
      <div>
        <button onClick={() => signIn("google", { callbackUrl })}>
          ログインボタン
        </button>
      </div>
    </main>
  );
}
