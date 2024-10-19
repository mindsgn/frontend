'use client';

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useAuth } from 'store';
// Dynamically import the component that uses document
const BrowserOnlyComponent = dynamic(
  () => import('../../src/components/mainContainer'),
  {
    ssr: false
  }
);

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
    <BrowserOnlyComponent />
  );
}
