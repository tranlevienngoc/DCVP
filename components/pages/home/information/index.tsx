import { Box, Flex, Image } from "@chakra-ui/react";
import ButtonBase from "components/common/Buttons/ButtonBase";
import TemplateText from "components/common/Text/TemplateText";
import { SoundAudioContext } from "context/useSoundAudio";
import { INFORMATION_TEXT } from "data/information";
import React, { useContext } from "react";

export default function Information() {
  return (
    <Flex
      className="maxW"
      alignItems="center"
      justifyContent="center"
      direction={{ base: "column", lg: "row" }}
      p={{ base: "0 16px", "2xl": "unset" }}
      gap={{ base: "20px", lg: "100px" }}
      mb="-30px"
    >
      <Flex
        w={{ base: "100%", lg: "50%" }}
        direction="column"
        alignItems="center"
      >
        <TemplateText
          txt="$POPOY TOKEN"
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "24px", md: "35px" }}
          fontWeight={700}
          mb={{ base: "24px", md: "40px" }}
          fontFamily="Bangers"
          letterSpacing="3px"
          data-aos="fade-left"
        />
        <Box
          border="1px solid #000"
          boxShadow="4px 4px 0 #262626"
          p="16px"
          borderRadius="29px"
        >
          {INFORMATION_TEXT.map((item) => (
            <TemplateText
              mb="16px"
              textAlign={{ base: "center", lg: "start" }}
              fontSize="18px"
              key={item.paragraph}
              txt={item.paragraph}
              data-aos={item.animation}
              data-aos-duration={item.duration}
            />
          ))}
        </Box>
      </Flex>
      <Flex
        w={{ base: "100%", lg: "50%" }}
        justifyContent={{ base: "center", lg: "end" }}
        mt="10px"
      >
        <Image
          src="https://i0.wp.com/popoy-video.s3.ap-southeast-1.amazonaws.com/image/troll.webp"
          w="90%"
          h="100%"
          alt="finger.svg"
        />
      </Flex>
    </Flex>
  );
}
