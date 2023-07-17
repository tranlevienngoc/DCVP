import { Box, Flex } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React from "react";

interface props {
  completed: string;
  content: string;
}

export default function Progress({ completed, content }: props) {
  return (
    <Box position="relative" h="25px" w="100%" bg="#fff" borderRadius="50px">
      <Flex
        h="100%"
        w={completed}
        bg="#308807"
        borderRadius={completed === "100%" ? "inherit" : "50px 0 0 50px"}
        transition="width 1s ease-in-out"
      >
        <TemplateText
          position="absolute"
          txt={content}
          color="text.100"
          fontWeight={600}
          left="30%"
          top="5%"
        />
      </Flex>
    </Box>
  );
}
