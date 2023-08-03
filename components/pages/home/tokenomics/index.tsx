import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { CONTENT_TOKENOMICS, TOKENOMICS } from "data/tokenomics";
import React from "react";

export default function Tokenomics() {
  return (
    <Box className="maxW">
      <TemplateText
        txt="TOKENOMICS"
        fontFamily="Bangers"
        letterSpacing="3px"
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
          p={{ base: "0 16px", lg: "unset" }}
          w={{ base: "100%", lg: "30%" }}
        />
        <Flex
          p={{ base: "0 16px", lg: "unset" }}
          w={{ base: "100%", lg: "60%" }}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap={{ base: "20px", md: "unset" }}
          alignItems="center"
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <TemplateText
              textAlign="center"
              fontSize="20px"
              fontWeight={700}
              txt="Total supply: </br> 108,642,000,000,000"
              mb="20px"
            />
            <Flex
              direction="column"
              gap="20px"
              border="1px solid #000"
              boxShadow="4px 4px 0 #262626"
              p="16px"
              borderRadius="29px"
            >
              {CONTENT_TOKENOMICS.map((item) => (
                <TemplateText key={item.content} txt={item.content} />
              ))}
            </Flex>
          </Box>
          <Flex direction="column" gap="10px">
            {TOKENOMICS.map((item) => (
              <Flex gap="10px" alignItems="center" key={item.color}>
                <Box bg={item.color} w="40px" h="40px" borderRadius="50px" />
                <TemplateText txt={item.label} />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
