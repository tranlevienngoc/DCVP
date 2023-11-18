import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { HOWTOBUY } from "data/howtobuy";
import React from "react";

export default function HowToBuy() {
  return (
    <Flex direction="column" alignItems="center" className="maxW">
      <TemplateText
        mt="10px"
        fontSize={{ base: "24px", md: "35px" }}
        textAlign="center"
        fontWeight={700}
        txt="Đồ Cũ Vũ Phan có những gì ?"
        fontFamily="Bangers"
        letterSpacing="3px"
        data-aos="fade-up"
        mb="30px"
      />
      {/* <TemplateText
        mt="10px"
        mb="48px"
        textAlign="center"
        fontSize="18px"
        txt="Những thành tựu và tiêu chí của đồ cũ Vũ Phan"
        data-aos="zoom-in"
      /> */}
      <SimpleGrid gap="50px" columns={{ base: 1, lg: 3 }}>
        {HOWTOBUY.map((item, index) => (
          <Box position="relative" key={item.content}>
            <blockquote className="block-quote" data-aos="fade-up">
              <TemplateText
                as="span"
                position="absolute"
                top="5%"
                left="40%"
                zIndex={999}
                fontSize="25px"
                fontWeight={700}
                txt={`${index + 1}`}
              />
              <p>{item.content}</p>
            </blockquote>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
