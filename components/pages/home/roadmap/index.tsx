import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { ROADMAP } from "data/roadmap";
import React from "react";

export default function Roadmap() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="maxW"
      p={{ base: "0 16px", "2xl": "unset" }}
    >
      <TemplateText
        txt="POPOY ROADMAP"
        fontFamily="Bangers"
        letterSpacing="3px"
        fontSize={{ base: "24px", md: "35px" }}
        fontWeight={700}
        data-aos="fade-up"
      />
      <TemplateText
        m="16px 0"
        pb="24px"
        textAlign="center"
        fontSize="18px"
        data-aos="zoom-in"
        txt="Together, we shall demonstrate to the world that the Popoy is not a fleeting phenomenon but a permanent fixture, solidified through our collective efforts and unwavering commitment."
      />
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        gap="20px"
        w="100%"
        justifyContent="center"
        alignItems="center"
        display={{ base: "flex", lg: "grid" }}
        flexDirection={{ base: "column", lg: "unset" }}
      >
        {ROADMAP.map((item) => (
          <Box key={item.title} p="16px" borderRadius="29px" maxW="370px">
            <TemplateText
              m="16px 0 8px 0"
              txt={item.title}
              fontSize="28px"
              fontWeight={700}
              textAlign="center"
              fontFamily="Bangers"
              letterSpacing="3px"
              data-aos="zoom-out"
              data-aos-duration="2000"
            />
            <Image
              data-aos="zoom-out"
              data-aos-duration="2000"
              src={item.image}
              w="100%"
              alt={item.title}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
