import { Box, Flex, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React from "react";

export default function Information() {
  return (
    <Flex
      className="maxW"
      alignItems="center"
      justifyContent="center"
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "20px", lg: "100px" }}
    >
      <Box
        w={{ base: "100%", lg: "50%" }}
        textAlign="center"
        p={{ base: "0 16px", lg: "unset" }}
      >
        <TemplateText
          txt="$PPM TOKEN"
          fontSize="35px"
          fontWeight={700}
          mb="40px"
        />
        <TemplateText
          mb="32px"
          fontSize="16px"
          txt="The little guy challenged Wall Street in the infamous GameStop fiasco of 2021, and the legacy of those brave Wall Street Bets heroes endures until today."
        />
        <TemplateText
          mb="16px"
          fontSize="16px"
          txt="Born out of that movement is Wall Street Memes - the ultimate expression of the internet’s triumph over rampant capitalism. “Greed is good,” said Gordon Gekko in the ‘80s as he got rich off useless stocks. Around 30 years later, hundreds of arguably even more useless meme coins allow ordinary people to do the same."
        />
        <TemplateText
          mb="16px"
          fontSize="16px"
          txt="Wall Street Memes is tokenising the movement. Join the $WSM army today and prove that greed is, indeed, very good."
        />
      </Box>
      <Flex
        w={{ base: "100%", lg: "50%" }}
        justifyContent={{ base: "center", lg: "unset" }}
      >
        <Image src="/svg/bg/information.svg" />
      </Flex>
    </Flex>
  );
}
