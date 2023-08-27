import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { TEXT_DESCRIPTIONS } from "data/bussiness";

import React from "react";

export default function Business() {
  return (
    <Box className="maxW" p={{ base: "0 16px", "2xl": "unset" }}>
      <Flex mt="24px" direction="column" alignItems="center">
        <Image src="/images/Coin.svg" w="200px" data-aos="zoom-in" />
        <TemplateText
          fontSize={{ base: "24px", md: "35px" }}
          fontWeight={700}
          textAlign="center"
          p="16px 0"
          fontFamily="Bangers"
          letterSpacing="3px"
          txt="THE MOST ENTHUSIASTIC MEMECOIN IN THE UNIVERSE"
          data-aos="fade-up"
        />
        <Flex
          mt="16px"
          direction="column"
          gap="15px"
          border="1px solid #000"
          boxShadow="4px 4px 0 #262626"
          p="16px"
          borderRadius="29px"
        >
          {TEXT_DESCRIPTIONS.map((item) => (
            <TemplateText
              key={item.paragraph}
              fontSize="16px"
              textAlign={{ base: "center", lg: "start" }}
              txt={item.paragraph}
              data-aos={item.animation}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
