import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React from "react";
import { FiCopy } from "react-icons/fi";
import { toastSuccess } from "utils/toast";
import copy from "copy-to-clipboard";
import ButtonBase from "components/common/Buttons/ButtonBase";
import { LIST_SOCIAL_NETWORK } from "data/banner";
export default function ModalRefferal() {
  const copyToClipboard = () => {
    copy("https://bs_066ea8e0.youpromote.care?aff=228261");
    toastSuccess("You have copied!");
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="15px"
    >
      <TemplateText
        fontSize="26px"
        textAlign="center"
        fontWeight={600}
        txt="Earn more $POPOY by referring your friends and community!"
      />
      <TemplateText
        fontSize="16px"
        textAlign="center"
        color="text.200"
        txt="Share your unique link below and receive"
      />
      <TemplateText
        fontSize="16px"
        textAlign="center"
        fontWeight={600}
        txt={`<span class='textColorOrange'>5%</span> of all transacrions realized with your link <span class='textColorOrange'>instanly</span>!`}
      />
      <Flex
        p="10px"
        border="1px solid #0DC5F5"
        borderRadius="20px"
        alignItems="center"
        gap="5px"
        w="100%"
      >
        <TemplateText
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          txt="https://bs_066ea8e0.youpromote.care?aff=228261"
        />
      </Flex>
      <ButtonBase
        content="Copy"
        colorText="text.500"
        fsText="14px"
        w="50%"
        h="48px"
        mt="10px"
        fwText={700}
        bg="text.100"
        borderRadius="50px"
        onClick={copyToClipboard}
      />
      <TemplateText
        fontSize="16px"
        textAlign="center"
        fontWeight={600}
        txt="Share it directly on your social media!"
      />
      <Flex gap="10px" alignItems="center" mt="20px" data-aos="fade-in">
        {LIST_SOCIAL_NETWORK.map((item) => (
          <Image key={item.name} w="42px" h="42px" src={item.icon} />
        ))}
      </Flex>
    </Flex>
  );
}
