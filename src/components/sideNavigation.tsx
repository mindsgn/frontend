'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from 'store/auth';
import { useRouter } from 'next/navigation';

const SideNavigation: React.FC = () => {
  const route = useRouter()
  const state = useAuth();
  //@ts-expect-error
  const { logout } = state;

  return (
    <Box
      borderRadius={20}
      background={'#1E1E1E'}
      height={'95vh'}
      padding={2}
      display={['none', 'none', 'flex', 'flex']}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Box display={'flex'} flexDir={'column'} alignItems={'center'}>
        <Box
          width={50}
          height={50}
          marginX={2}
          cursor="pointer"
          backgroundImage="/icon-512.png"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          marginBottom={20}
        />
        <Box 
          margin={'10px'} 
          cursor="pointer" 
          marginTop={10}
          onClick={() => {
            route.push("/dashboard")
          }}>
          <FaHome color="#FEFEFE" size={40} />
        </Box>
        <Box 
          margin={'10px'} 
          cursor="pointer" 
          marginTop={10}
          onClick={() => {
            route.push("/dashboard/profile")
          }}>
          <FaCog color="#FEFEFE" size={40} />
        </Box>
        <Box 
          margin={'10px'} 
          cursor="pointer" 
          marginTop={10}
          onClick={() => {
            route.push("/dashboard/settings")
          }}>
          <FaCog color="#FEFEFE" size={40} />
        </Box>
      </Box>

      <Box 
        display={'flex'}
        onClick={() => {
          try{
            logout()
          }catch(error){
            console.log(error)
          }
        }}
      >
        <FaSignOutAlt color="#EC5929" size={40} />
        {
          /*
            <Box margin={'10px'} cursor="pointer" marginTop={2}>
              <FaCog color="white" size={40} />
            </Box>
          */
        }
      </Box>
    </Box>
  );
};

export default SideNavigation;
