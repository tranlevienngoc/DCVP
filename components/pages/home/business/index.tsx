import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { TEXT_DESCRIPTIONS } from "data/bussiness";

import React from "react";

export default function Business() {
  return (
    <Box className="maxW" p={{ base: "0 16px", "2xl": "unset" }}>
      <Flex mt="24px" direction="column" alignItems="center">
        <Image src="/images/apple-touch-icon.png" w="200px" />
        <TemplateText
          fontSize={{ base: "48px", md: "35px" }}
          fontWeight={700}
          textAlign="center"
          p="16px 0"
          fontFamily="Bangers"
          letterSpacing="3px"
          txt="THE MOST AMUSING MEMECOIN IN THE UNIVERSE"
        />
        <Flex mt="16px" direction="column" gap="15px">
          {TEXT_DESCRIPTIONS.map((item) => (
            <TemplateText
              key={item.paragraph}
              fontSize="18px"
              textAlign={{ base: "center", lg: "start" }}
              txt={item.paragraph}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
