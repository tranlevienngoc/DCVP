import { Box, Button, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import ButtonBase from "components/common/Buttons/ButtonBase";
import TemplateText from "components/common/Text/TemplateText";
import { HOWTOBUY } from "data/howtobuy";
import React from "react";

export default function HowToBuy() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      className="maxW"
      p="50px 16px 00px 16px"
    >
      <TemplateText
        mt="10px"
        fontSize="35px"
        textAlign="center"
        fontWeight={700}
        txt="HOW TO BUY POPOY MEME TOKEN"
        fontFamily="Bangers"
        letterSpacing="3px"
      />
      <TemplateText
        mt="10px"
        mb="48px"
        textAlign="center"
        fontSize="18px"
        txt="Take charge and buy $POPOY tokens in presale using ETH, BNB, USDT, or bank card before it lists on DEX."
      />
      <SimpleGrid gap="50px" columns={{ base: 1, lg: 3 }}>
        {HOWTOBUY.map((item, index) => (
          <Box position="relative" key={item.ava}>
            <blockquote className="block-quote">
              <TemplateText
                as="span"
                position="absolute"
                top="8%"
                left="40%"
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
            >
              <Image
                className="image"
                transform={{ base: item.transformmb, md: item.transform }}
                src={item.ava}
                w={item.width}
              />
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
