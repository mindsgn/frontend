"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "store";
import dynamic from "next/dynamic";

const BrowserOnlyComponent = dynamic(
  () => import("../../../src/components/stockvelContainer"),
  {
    ssr: false,
  },
);

// Dynamically import the component that uses document
export default function Page() {
  const router = useRouter();
  const state = useAuth();
  //@ts-expect-error
  const { auth, step } = state;

  useEffect(() => {
    if (!auth) {
      router.push("/");
    }
  }, [auth, router]);
  return <BrowserOnlyComponent />;
}
