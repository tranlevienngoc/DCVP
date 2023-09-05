import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
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
        txt="Here is a rough sketch of $POPOY path ahead. We'll prove to the world that the Popoy Meme Token is here to stay by working together."
      />
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap="20px" mt="30px">
        {ROADMAP.map((item) => (
          <Box
            key={item.title}
            border="1px solid #000"
            boxShadow="4px 4px 0 #262626"
            p="16px"
            borderRadius="29px"
          >
            <TemplateText
              m="16px 0 8px 0"
              txt={item.title}
              fontSize="28px"
              fontWeight={700}
              fontFamily="Bangers"
              letterSpacing="3px"
              data-aos="zoom-out"
              data-aos-duration="2000"
            />
            <TemplateText
              mb="16px"
              txt={item.lable}
              fontSize="17px"
              fontWeight={600}
              data-aos="zoom-out"
              data-aos-duration="2000"
            />
            <TemplateText
              txt={item.content}
              data-aos="zoom-out"
              fontSize="16px"
              data-aos-duration="2000"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
