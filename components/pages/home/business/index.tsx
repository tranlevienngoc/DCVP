import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";

import React from "react";

export default function Business() {
  return (
    <Box className="maxW" p={{ base: "0 16px", lg: "unset" }}>
      <Flex
        p={{ base: "0 16px", lg: "unset" }}
        mt="24px"
        direction="column"
        alignItems="center"
      >
        <Image src="/svg/meme/wow-meme.svg" w="200px" />
        <TemplateText
          fontSize={{ base: "48px", md: "35px" }}
          fontWeight={700}
          textAlign="center"
          mt="24px 0"
          p="16px 0"
          txt="EVEN ELON LOVES OUR MEMES!"
        />
        <TemplateText
          pb="24px"
          mt="16px"
          mb="48px"
          fontSize="18px"
          textAlign="center"
          txt="Popoy Meme brings you the long-awaited token for a vibrant community followed and engaged with by even Elon Musk."
        />
      </Flex>
    </Box>
  );
}
