import { Box, Flex, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React from "react";

export default function Tokenomics() {
  const LIST_IMAGE = [
    "images/fire.webp",
    "images/dance.webp",
    "images/fire.webp",
  ];
  return (
    <Box className="maxW">
      <TemplateText
        txt="POPOY TOKENOMICS"
        fontFamily="Bangers"
        letterSpacing="3px"
        fontWeight={700}
        textAlign="center"
        fontSize={{ base: "24px", md: "35px" }}
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
          src="/images/money.webp"
          p={{ base: "0 16px", lg: "0px 0px 0px 6%" }}
          w={{ base: "60%", lg: "35%" }}
          h="100%"
          data-aos="zoom-in-left"
          alt="tokennomics"
        />
        <Flex
          p={{ base: "0 16px", lg: "unset" }}
          w={{ base: "100%", lg: "60%" }}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap={{ base: "20px", md: "unset" }}
          alignItems="center"
        >
          <Box w={{ base: "100%", lg: "85%" }}>
            <TemplateText
              textAlign="center"
              fontSize="20px"
              fontWeight={700}
              txt="Total supply: </br> <span class='textNumber'>51,000,000,000</span>"
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
              <TemplateText
                fontSize="18px"
                txt="ZERO TAX, CONTRACT RENOUNCED, LIQUIDITY BURNED FOREVER. 100% BELONGS TO COMMUNITY, FOR THE PEOPLE.
                  "
              />
            </Flex>
            <Flex
              mt="30px"
              justifyContent={{ base: "space-around", lg: "space-between" }}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {LIST_IMAGE.map((item, index) => {
                return (
                  <Image key={index} src={item} borderRadius="50%" w="30%" />
                );
              })}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
