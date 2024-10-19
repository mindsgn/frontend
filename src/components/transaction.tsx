"use client";

import React from "react";
import { Box, Text } from "@chakra-ui/react";

//@ts-expect-error
const TransactionCard: React.FC = ({
  title,
  amount,
  type,
  status = "PENDING",
}: {
  title: string;
  amount: string;
  type?: string;
  status?: string;
}) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginY={2}
      cursor="pointer"
      background="#1E1E1E"
      padding={2}
      width="100%"
      borderRadius={10}
    >
      <Box>
        <Text fontSize={21} color="white" fontFamily={"heavy"}>
          {title}
        </Text>
        <Text fontSize={18} color="white" fontFamily={"heavy"}>
          {status}
        </Text>
      </Box>

      <Text
        fontSize={21}
        fontFamily={"heavy"}
        color={type == "deposit" ? "green" : "red"}
      >
        {type == "deposit"? "+ " : "- "}
        {"R"}
        {amount}
      </Text>
    </Box>
  );
};

export default TransactionCard;
