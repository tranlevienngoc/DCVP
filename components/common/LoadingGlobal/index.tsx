import { Flex, Image } from "@chakra-ui/react";
import React from "react";

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
    >
      <Image
        src="https://popoy-video.s3.ap-southeast-1.amazonaws.com/image/loading-2.webp"
        h="200px"
        w="200px"
        alt="image-loading"
      />
    </Flex>
  );
}
