import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { TOKENOMICS } from "data/tokenomics";
import React from "react";

export default function Tokenomics() {
  return (
    <Box className="maxW">
      <TemplateText
        txt="TOKENOMICS"
        fontWeight={700}
        textAlign="center"
        fontSize="35px"
        mb={{ base: "20px", lg: "48px" }}
        mt={{ base: "40px", lg: "unset" }}
      />
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        h="100%"
        alignItems="center"
        justifyContent="center"
        gap="50px"
      >
        <Image
          src="/images/bg/tokenomics.png"
          w={{ base: "100%", lg: "30%" }}
        />
        <Flex
          p={{ base: "0 16px", lg: "unset" }}
          w={{ base: "100%", lg: "20%" }}
          direction={{ base: "column-reverse", lg: "column" }}
          justifyContent="space-between"
          h="300px"
        >
          <Flex direction="column" gap="10px">
            {TOKENOMICS.map((item) => (
              <Flex gap="10px" alignItems="center" key={item.color}>
                <Box bg={item.color} w="40px" h="30px" borderRadius="10px" />
                <TemplateText txt={item.label} />
              </Flex>
            ))}
          </Flex>
          <TemplateText
            w="250px"
            mt="20px"
            txt="The launch of the $POPOY token will help sustain the growth of the PoPoy Memes community and reward loyal members."
          />
        </Flex>
      </Flex>
    </Box>
  );
}
