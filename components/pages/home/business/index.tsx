import { Box, Flex, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { BUSINESS_INFOR } from "data/business";
import React from "react";

export default function Business() {
  return (
    <Box mt="250px" className="maxW">
      <Flex
        alignItems="center"
        justifyContent={{ base: "center", lg: "space-between" }}
      >
        <Image
          src="/svg/meme/business-meme.svg"
          w="190px"
          display={{ base: "none", lg: "block" }}
        />
        <Box
          w={{ base: "100%", lg: "50%" }}
          p={{ base: "0 16px", lg: "unset" }}
        >
          <TemplateText
            fontSize="35px"
            textAlign="center"
            fontWeight={700}
            txt="WE MEME BUSINESS!"
          />
          <Flex mt="48px" alignItems="center" justifyContent="space-between">
            {BUSINESS_INFOR.map((item) => (
              <Box key={item.name}>
                <TemplateText
                  txt={item.value}
                  fontSize="25px"
                  fontWeight={700}
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
          display={{ base: "none", lg: "block" }}
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
          fontSize="35px"
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
