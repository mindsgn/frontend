"use client";

import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useApp } from "store/app";
import { Button } from "./button";
import { useDisclosure } from "@chakra-ui/react";
import { AssetDetails } from "./AssetDetails";
import { useAuth } from "store/auth";
import { useRouter } from "next/navigation";
import TransactionCard from "./transaction";
import BarStack from "@/components/barStack";


export type MainContainerProp = {
  id: string,
  members: any[],
  transaction: any[],
  isMember: boolean
};

function MainContainer({
  id 
}: MainContainerProp) {
  const router = useRouter();
  const [assetModal, setAssetModal] = useState<boolean>(false);
  const [current, setCurrent] = useState<any>({
    _id: "",
    name: "",
    image: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authState = useAuth();
  const state = useApp();
  //@ts-expect-error
  const { getStockvel, stokvelBalance, joinPool } = state;

  useEffect(() => {
    getStockvel(id);
  }, []);

  return (
    <Box
      flex={1}
      display={"flex"}
      height={"95vh"}
      width={"50vw"}
      padding={4}
      marginLeft={[0, 0, 0, 4]}
      flexDirection={"column"}
    >
      <Box
        display="flex"
        flexDir={["column", "column", "row", "row"]}
        cursor="pointer"
      >
        <Box
          display={'flex'}
          flexDir={'column'}
          justifyContent={'space-between'}
          padding={2}
          paddingY={4}
          borderRadius={10}
          background="#1E1E1E"
          minW={["100%", "100%", 400, 400]}
          height={250}
          minH={200}
        >
          <Box>
            <Text fontSize={52} fontFamily={"heavy"} color="white">
              R {stokvelBalance}
            </Text>
            <Text marginTop={-5} fontSize={20} fontFamily={"bold"} color={"#ddd"}>
              Total Value
            </Text>
          </Box>

          <Button onClick={() => {
            joinPool(id)
          }} title="JOIN" color='white' background='green'/>
        </Box>
      </Box>

      <Box>
        <Box marginY={4}>
          <Text fontSize={40} fontFamily={"heavy"} color="white">
            Members
          </Text>
        </Box>
        <Box
            display="flex"
            flexDir={["column"]}
            alignItems={"center"}
            justifyContent={"center"}
            cursor="pointer"
            padding={2}
            borderRadius={10}
            minW={["100%", "100%", 400, 400]}
            background="#1E1E1E"
            minH={200}
            onClick={() => {
              router.push("/dashboard/stokvel");
            }}
          >
            <Text fontSize={28} fontFamily={"heavy"} color="white">
              No Members have joined
            </Text>
          </Box>
      </Box>

      <Box>
        <Box marginY={4}>
          <Text fontSize={40} fontFamily={"heavy"} color="white">
            Transactions
          </Text>
        </Box>

        <Box>
          <Box
            display="flex"
            flexDir={["column"]}
            alignItems={"center"}
            justifyContent={"center"}
            cursor="pointer"
            padding={2}
            borderRadius={10}
            minW={["100%", "100%", 400, 400]}
            background="#1E1E1E"
            minH={200}
            onClick={() => {
              router.push("/dashboard/stokvel");
            }}
          >
            <Text fontSize={28} fontFamily={"heavy"} color="white">
              No Transactions have been made
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainContainer;
