import { Box, Icon } from "@chakra-ui/react";
import React from "react";

import dynamic from "next/dynamic";
import TemplateText from "components/common/Text/TemplateText";
import { AiFillPlayCircle } from "react-icons/ai";
import useVisible from "hooks/useVisible";
import ModalItem from "components/common/ModalItem";

export default function Banner() {
  const videoModal = useVisible();
  return (
    <Box
      className="background-banner"
      mb={{ base: "-50px", "2xl": "-25px" }}
      position="relative"
    >
      <Box
        className="circle"
        w={{ base: "50px", md: "100px" }}
        h={{ base: "50px", md: "100px" }}
        position="absolute"
        top={{ base: "22%", lg: "50%" }}
        left="50%"
        cursor="pointer"
        transform="translate(-50%,-50%)"
        onClick={videoModal.show}
      >
        <Icon
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          as={AiFillPlayCircle}
          w={{ base: 10, md: 20 }}
          h={{ base: 10, md: 20 }}
          color="red"
        />
      </Box>
      <ModalItem
        onClose={videoModal.hide}
        isOpen={videoModal.visible}
        maxW={{ base: "287px", sm: "600px" }}
        top="-10px"
        right="-10px"
        pBody="0px"
        pHeader="0px"
      >
        <video
          className="video"
          src="https://adoptvietnam.vn/file/video.mp4"
          autoPlay
          controls
        />
      </ModalItem>
    </Box>
  );
}
