"use client";

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export type HeroProp = {};

function Hero({}: HeroProp) {
  const route = useRouter();
  return (
    <Box
      display={"flex"}
      flexDir={["column", "column", "column", "column"]}
      padding={5}
      paddingTop={[100, 100, 150, 150]}
      height="90vh"
      flex={1}
      position={"relative"}
    >
      <Heading
        marginY={2}
        color="white"
        fontFamily="heavy"
        cursor={"pointer"}
        textAlign={"center"}
        fontSize={[20, 40, 60, 60]}
        marginBottom={20}
      >
        {`Welcome to ULUNTU. A smart way to save and investing your money.`.toUpperCase()}
      </Heading>
      <Box
        display={"flex"}
        flexDir={["column", "column", "row", "row"]}
        justifyContent={"center"}
        width="100%"
        alignItems={"center"}
      >
        <Button
          background="white"
          color="black"
          onClick={() => {
            route.push("/login");
          }}
          title="GET STARTED"
        />
        {
          //*<PlatformButton image={'/ios.png'} /> <PlatformButton image={'/google.png'} />*//
        }
      </Box>
    </Box>
  );
}

export { Hero };
