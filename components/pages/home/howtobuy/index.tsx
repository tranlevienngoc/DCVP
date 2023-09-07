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
        txt="HOW TO BUY THE MAGNIFICENT $POPOY MEME TOKEN"
        fontFamily="Bangers"
        letterSpacing="3px"
        data-aos="fade-up"
      />
      <TemplateText
        mt="10px"
        mb="48px"
        textAlign="center"
        fontSize="18px"
        txt="Take a decisive step forward and acquire $POPOY tokens using ETH on the renowned Uniswap Exchange."
        data-aos="zoom-in"
      />
      <SimpleGrid gap="50px" columns={{ base: 1, lg: 3 }}>
        {HOWTOBUY.map((item, index) => (
          <Box position="relative" key={item.ava}>
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
            <Box
              position="absolute"
              bottom={{ base: item.bottommb, md: item.bottom }}
              left={{ base: item.leftmb, md: item.left }}
              right={{ base: item.rightmb, md: item.right }}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                className="image"
                transform={{ base: item.transformmb, md: item.transform }}
                src={item.ava}
                w={item.width}
                h="100%"
                alt={item.ava}
              />
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
