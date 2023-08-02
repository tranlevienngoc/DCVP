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
      p={{ base: "0 16px", "2xl": "0 0 80px 0" }}
    >
      <TemplateText
        txt="ROADMAP"
        fontFamily="Bangers"
        letterSpacing="3px"
        fontSize="35px"
        fontWeight={700}
      />
      <TemplateText
        m="16px 0"
        pb="24px"
        textAlign="center"
        fontSize="24px"
        txt="We're laying the foundation and empowering our community every step of the way. Together, we'll show the world that Popoy Meme is here to stay."
      />
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap="20px" mt="30px">
        {ROADMAP.map((item) => (
          <Box
            key={item.title}
            border="3px solid #000000"
            boxShadow="5px 6px #00000040"
            borderRadius="29px"
            p="16px"
          >
            <TemplateText
              m="16px 0 8px 0"
              txt={item.title}
              fontSize="28px"
              fontWeight={700}
              fontFamily="Bangers"
              letterSpacing="3px"
            />
            <TemplateText
              mb="16px"
              txt={item.lable}
              fontSize="17px"
              fontWeight={600}
            />
            <TemplateText txt={item.content} fontSize="16px" />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
