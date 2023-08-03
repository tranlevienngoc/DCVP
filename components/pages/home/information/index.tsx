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
        />
        <Box
          border="1px solid #000"
          boxShadow="4px 4px 0 #262626"
          p="16px"
          borderRadius="29px"
        >
          <TemplateText
            mb="32px"
            textAlign={{ base: "center", lg: "start" }}
            fontSize="16px"
            txt="The little guy challenged Wall Street in the infamous GameStop fiasco of 2021, and the legacy of those brave Wall Street Bets heroes endures until today."
          />
          <TemplateText
            textAlign={{ base: "center", lg: "start" }}
            mb="16px"
            fontSize="16px"
            txt="Born out of that movement is Popoy Meme - the ultimate expression of the internet’s triumph over rampant capitalism. “Greed is good,” said Gordon Gekko in the ‘80s as he got rich off useless stocks. Around 30 years later, hundreds of arguably even more useless meme coins allow ordinary people to do the same."
          />
          <TemplateText
            textAlign={{ base: "center", lg: "start" }}
            mb="16px"
            fontSize="16px"
            txt="Popoy Meme is tokenising the movement. Join the $POPOY army today and prove that greed is, indeed, very good."
          />
        </Box>
      </Flex>
      <Flex
        w={{ base: "100%", lg: "50%" }}
        justifyContent={{ base: "center", lg: "end" }}
      >
        <Image src="/images/bg/information.png" />
      </Flex>
    </Flex>
  );
}
