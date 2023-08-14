import { Box, Flex, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { INFORMATION_TEXT } from "data/information";
import React from "react";

export default function Information() {
  return (
    <Flex
      className="maxW"
      alignItems="center"
      justifyContent="center"
      direction={{ base: "column", lg: "row" }}
      p={{ base: "0 16px", "2xl": "unset" }}
      gap={{ base: "20px", lg: "100px" }}
    >
      <Flex
        w={{ base: "100%", lg: "50%" }}
        direction="column"
        alignItems="center"
      >
        <TemplateText
          txt="&POPOY TOKEN"
          textAlign={{ base: "center", lg: "start" }}
          fontSize="35px"
          fontWeight={700}
          mb="40px"
          fontFamily="Bangers"
          letterSpacing="3px"
          data-aos="fade-left"
        />
        <Box
          border="1px solid #000"
          boxShadow="4px 4px 0 #262626"
          p="16px"
          borderRadius="29px"
        >
          {INFORMATION_TEXT.map((item) => (
            <TemplateText
              mb="16px"
              textAlign={{ base: "center", lg: "start" }}
              fontSize="16px"
              key={item.paragraph}
              txt={item.paragraph}
              data-aos={item.animation}
              data-aos-duration={item.duration}
            />
          ))}
        </Box>
      </Flex>
      <Flex
        w={{ base: "100%", lg: "50%" }}
        justifyContent={{ base: "center", lg: "end" }}
      >
        <Image src="/images/bg/Finger.svg" data-aos="zoom-in-up" />
      </Flex>
    </Flex>
  );
}
