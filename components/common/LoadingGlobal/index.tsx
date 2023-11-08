import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import TemplateText from "../Text/TemplateText";

export default function LoadingGlobal() {
  return (
    <Flex
      position="fixed"
      zIndex={9999}
      top="50%"
      left="50%"
      bg="#FFF"
      transform="translate(-50%, -50%)"
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      cursor="pointer"
      id="loading-global"
    >
      <Image
        src="https://popoy-video.s3.ap-southeast-1.amazonaws.com/image/loading-2.webp"
        h="200px"
        w="200px"
        alt="image-loading"
      />

      <TemplateText
        fontSize="30px"
        fontFamily="Bangers"
        fontWeight={700}
        letterSpacing={1.2}
        mt="20px"
        txt="[ Click Anywhere ]"
      />
    </Flex>
  );
}
