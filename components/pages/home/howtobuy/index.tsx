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
      p="80px 16px 80px 16px"
    >
      <Image src="/images/apple-touch-icon.png" w="80px" />
      <TemplateText
        mt="10px"
        fontSize="35px"
        textAlign="center"
        fontWeight={700}
        txt="HOW TO BUY POPOY MEMES TOKEN"
      />
      <TemplateText
        mt="10px"
        mb="48px"
        textAlign="center"
        fontSize="18px"
        txt="Take charge and buy $WSM tokens in presale using ETH, BNB, USDT, or bank card before it lists on DEX."
      />
      <SimpleGrid gap="50px" columns={{ base: 1, lg: 3 }}>
        {HOWTOBUY.map((item, index) => (
          <Box position="relative" key={item.ava}>
            <blockquote className={item.style}>
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
              bottom={item.bottom}
              left={item.left}
              right={item.right}
            >
              <Image src={item.ava} w="150px" />
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <ButtonBase
        mt="50px"
        bg="#1E1E1E"
        colorText="#fff"
        borderRadius="50px"
        border="3px solid #fff"
        w="150px"
        boxShadow="0 4px 4px #00000040"
        content="More Help"
      />
    </Flex>
  );
}
