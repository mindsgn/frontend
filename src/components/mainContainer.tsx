'use client';

import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useApp } from 'store/app';
import { Button } from './button';
import { useDisclosure } from '@chakra-ui/react';
import { AssetDetails } from './AssetDetails';
import { useAuth } from 'store/auth';
import { useRouter } from 'next/navigation';
import TransactionCard from './transaction';
import BarStack from '@/components/barStack';

export type MainContainerProp = {};

function MainContainer({}: MainContainerProp) {
  const router = useRouter();
  const [assetModal, setAssetModal] = useState<boolean>(false);
  const [current, setCurrent] = useState<any>({
    _id: '',
    name: '',
    image: ''
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authState = useAuth();
  const state = useApp();
  //@ts-expect-error
  const { getTransactions, transactions, total, pools } = state;
  //@ts-expect-error
  const { logout, auth } = authState;

  useEffect(() => {
    if (!auth) {
      router.push('/login');
    }
  }, [auth, router]);

  useEffect(() => {
    
  }, []);

  return (
    <Box
      flex={1}
      display={'flex'}
      height={'95vh'}
      width={'50vw'}
      padding={4}
      marginLeft={[0, 0, 0, 4]}
      flexDirection={'column'}
    >
      <Box
        display="flex"
        flexDir={['column', 'column', 'row', 'row']}
        cursor="pointer"
      >
        <Box
          padding={2}
          borderRadius={10}
          minW={200}
          background='#1E1E1E'
        >
          
          <Text 
            fontSize={52} 
            fontFamily={'heavy'} 
            color='white'
          >
            R {total}
          </Text>
          <Text 
            marginTop={-5} 
            fontSize={20} 
            fontFamily={'bold'} 
            color={'#ddd'}
          >
            Total Value
          </Text>
          {  
            //@ts-expect-error
          
            <BarStack
              width={500}
              height={400}/>
          }
        </Box>
      </Box>
      <Box>
          <Box
            marginY={4}>
            <Text
              fontSize={40} 
              fontFamily={'heavy'} 
              color="white"
            >
              Stokvels
            </Text>
          </Box>
          <Box
            display={'flex'}
            width={["100%", '100%', 750 ,750]}>
            {
              pools.map((item: any) => {
                return(
                 <Box cursor={'pointer'} width={200} height={60} background="#1E1E1E" borderRadius={10} marginRight={4}/>
                )
              })
            }
          </Box>
      </Box>
      <Box>
          <Box
            marginY={4}>
            <Text
              fontSize={40} 
              fontFamily={'heavy'} 
              color="white"
            >
              Transactions
            </Text>
          </Box>
          <Box
            width={["100%", '100%', 750 ,750]}>
            {
              transactions.map((item: any) => {
                const { title, amount, type} = item
                return(
                  <TransactionCard
                    //@ts-expect-error
                    type={type}
                    title={title}
                    amount={amount}
                  />
                )
              })
            }
          </Box>
        </Box>
    </Box>
  );
}

export default MainContainer;
