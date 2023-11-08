import { Box, Icon } from "@chakra-ui/react";
import ModalItem from "components/common/ModalItem";
import useVisible from "hooks/useVisible";
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import VideoModal from "./VideoModal";
import ButtonBase from "components/common/Buttons/ButtonBase";
import { SoundAudioContext } from "context/useSoundAudio";

export default function Banner() {
  const videoModal = useVisible();
  const { toggleMuteAudio, muteAudio } = useContext(SoundAudioContext);

  const onCloseModal = () => {
    videoModal.hide();
    toggleMuteAudio();
  };

  return (
    <Box
      className="background-banner"
      // mb={{ base: "10px", "2xl": "-25px" }}
      position="relative"
    >
      <Box
        className="circle"
        w={{ base: "50px", md: "100px" }}
        h={{ base: "50px", md: "100px" }}
        position="absolute"
        top={{ base: "35%", md: "32%", lg: "50%" }}
        left="50%"
        cursor="pointer"
        transform="translate(-50%,-50%)"
        onClick={() => {
          videoModal.show();
          muteAudio && toggleMuteAudio();
        }}
      >
        <Icon
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          as={AiFillPlayCircle}
          w={{ base: 10, md: 20 }}
          h={{ base: 10, md: 20 }}
          color="#64a152"
        />
      </Box>
      <ModalItem
        onClose={onCloseModal}
        isOpen={videoModal.visible}
        maxW={{ base: "287px", sm: "700px" }}
        top="5px"
        right="5px"
        pBody="0px"
        p="0px"
        closeBtnClass
      >
        <VideoModal />
      </ModalItem>
    </Box>
  );
}
