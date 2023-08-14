import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { CONTENT_TOKENOMICS, TOKENOMICS } from "data/tokenomics";
import React from "react";

export default function Tokenomics() {
  return (
    <Box className="maxW">
      <TemplateText
        txt="POPOY TOKENOMICS"
        fontFamily="Bangers"
        letterSpacing="3px"
        fontWeight={700}
        textAlign="center"
        fontSize="35px"
        mb={{ base: "20px", lg: "48px" }}
        mt={{ base: "40px", lg: "unset" }}
        data-aos="fade-up"
      />
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        h="100%"
        alignItems="center"
        justifyContent="center"
        gap="50px"
      >
        <Image
          src="/images/bg/Money.svg"
          p={{ base: "0 16px", lg: "unset" }}
          w={{ base: "70%", lg: "30%" }}
          data-aos="zoom-in-left"
        />
        <Flex
          p={{ base: "0 16px", lg: "unset" }}
          w={{ base: "100%", lg: "60%" }}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap={{ base: "20px", md: "unset" }}
          alignItems="center"
        >
          <Box w={{ base: "100%", md: "60%" }}>
            <TemplateText
              textAlign="center"
              fontSize="20px"
              fontWeight={700}
              txt="Total supply: </br> 108,642,000,000,000"
              mb="20px"
              data-aos="fade-down"
            />
            <Flex
              direction="column"
              gap="20px"
              border="1px solid #000"
              boxShadow="4px 4px 0 #262626"
              p="16px"
              borderRadius="29px"
              data-aos="fade-up"
            >
              {CONTENT_TOKENOMICS.map((item) => (
                <TemplateText
                  fontSize="18px"
                  key={item.content}
                  txt={item.content}
                />
              ))}
            </Flex>
          </Box>
          <Flex direction="column" gap="10px">
            {TOKENOMICS.map((item) => (
              <Flex gap="10px" alignItems="center" key={item.color}>
                <Box
                  bg={item.color}
                  w="40px"
                  h="40px"
                  borderRadius="50px"
                  data-aos="zoom-in-left"
                />
                <TemplateText txt={item.label} data-aos="zoom-in-right" />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
