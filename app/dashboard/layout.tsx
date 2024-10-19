"use client"

import React from 'react';
import SideNavigation from '@/components/sideNavigation';
import { Box } from '@chakra-ui/react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
        height={'100vh'}
        width={'100vw'}
        display={'flex'}
        flexDir={'row'}
        paddingX={5}
        alignItems={'center'}
        justifyContent={'flex-start'}
        background="black"
        >
        <SideNavigation />
        {children}
    </Box>
  );
}
