import { Box } from "@chakra-ui/react";
import React from "react";

import dynamic from "next/dynamic";

export default function Banner() {
  return (
    <Box
      backgroundImage="/images/bg/bg.svg"
      backgroundSize={{
        base: "cover",
        lg: "contain",
      }}
      backgroundRepeat="no-repeat"
      h="80vh"
      maxH="90vh"
      w="100%"
      pt="90px"
    ></Box>
  );
}
