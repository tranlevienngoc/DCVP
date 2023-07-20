import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { BUSINESS_INFOR } from "data/business";
import React from "react";

export default function Business() {
  return (
    <Box
      mt={{ base: "350px", md: "250px" }}
      className="maxW"
      p={{ base: "0 16px", lg: "unset" }}
    >
      <Flex
        alignItems="center"
        justifyContent={{ base: "center", lg: "space-between" }}
        gap="10px"
      >
        <Image
          src="/svg/meme/business-meme.svg"
          w="190px"
          display={{ base: "none", md: "block" }}
        />
        <Box w={{ base: "100%", md: "50%" }}>
          <TemplateText
            fontSize={{ base: "48px", md: "35px" }}
            textAlign="center"
            fontWeight={700}
            txt="WE MEME BUSINESS!"
          />
          <Flex
            pt="48px"
            flexWrap="wrap"
            m="0 auto"
            justifyContent="space-around"
            maxW="100%"
            gap={{ base: "20px", md: "unset" }}
          >
            {BUSINESS_INFOR.map((item) => (
              <Box key={item.name}>
                <TemplateText
                  txt={item.value}
                  textAlign={{ base: "center", lg: "start" }}
                  fontWeight={700}
                  fontSize={{ base: "40px", md: "25px" }}
                />
                <TemplateText
                  txt={item.name}
                  color="text.600"
                  fontSize="13px"
                  fontWeight={700}
                  textAlign={{ base: "center", lg: "start" }}
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <Image
          src="/svg/meme/business-meme1.svg"
          w="190px"
          display={{ base: "none", md: "block" }}
        />
      </Flex>

      <Flex
        p={{ base: "0 16px", lg: "unset" }}
        mt="24px"
        direction="column"
        alignItems="center"
      >
        <Image src="/svg/meme/wow-meme.svg" w="200px" />
        <TemplateText
          fontSize={{ base: "48px", md: "35px" }}
          fontWeight={700}
          textAlign="center"
          mt="24px 0"
          p="16px 0"
          txt="EVEN ELON LOVES OUR MEMES!"
        />
        <TemplateText
          pb="24px"
          mt="16px"
          mb="48px"
          fontSize="18px"
          textAlign="center"
          txt="Wall Street Memes brings you the long-awaited token for a vibrant community followed and engaged with by even Elon Musk."
        />
      </Flex>
    </Box>
  );
}
