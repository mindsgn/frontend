'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from 'store';
// Dynamically import the component that uses document
export default function Page() {
  const router = useRouter();
  const state = useAuth();
  //@ts-expect-error
  const { auth, step } = state;

  useEffect(() => {
    if (!auth) {
      router.push('/');
    }
  }, [auth, router]);
  return (
      <></>
  );
}
