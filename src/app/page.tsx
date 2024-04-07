"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

{ useRouter }

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/tasks');
  })

  return (
    <main>

    </main>
  );
}
