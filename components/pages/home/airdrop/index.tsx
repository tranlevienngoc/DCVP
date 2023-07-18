import { Box, Flex, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React from "react";

export default function Airdrop() {
  return (
    <Box className="maxW" p={{ base: "0 16px", lg: "unset" }}>
      <TemplateText
        txt="$50K $WSM AIRDROP"
        fontSize="35px"
        fontWeight={700}
        textAlign="center"
      />
      <TemplateText
        txt="We’re giving away $50,000 worth of $WSM tokens split between 5 lucky degens in a very generous Wall Street Memes airdrop. Enter below and make sure you’re in it to win it!"
        fontSize="25px"
        textAlign="center"
      />
      <Flex
        gap="30px"
        alignItems="center"
        direction={{ base: "column", lg: "unset" }}
        justifyContent="center"
      >
        <Box>
          <iframe
            height="400px"
            width="300px"
            src="https://gleam.io/IGOIX/popoy-meme"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>
        <Image src="/images/apple-touch-icon.png" w="200px" />
      </Flex>
    </Box>
  );
}
