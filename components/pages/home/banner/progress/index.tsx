import { Box, Flex } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React from "react";

interface props {
  completed: string;
}

export default function Progress({ completed }: props) {
  return (
    <Box position="relative" h="20px" w="100%" bg="#fff" borderRadius="50px">
      <Flex
        h="100%"
        w={completed}
        bg="rgb(30 30 30)"
        position="absolute"
        className="process"
        borderRadius="50px"
        transition="width 1s ease-in-out"
        animation="1.2s linear 0.5s infinite normal none running load"
      ></Flex>
    </Box>
  );
}
