import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ButtonBase from "components/common/Buttons/ButtonBase";
import TemplateText from "components/common/Text/TemplateText";

import MoonRiver from "components/svg/network/MoonRiver";
import useModeTheme from "hooks/colorDarkMode";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaMediumM, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  const { darkModeColors } = useModeTheme();
  return (
    <Box bg="text.100" p="30px 25px">
      <Box className="maxW">
        <TemplateText
          color="text.500"
          txt="Tower Financial Centre, 10th Floor, 50th Street & Corner of Elvira, Panama City, Panama"
        />
        <Flex mt="20px" alignItems="center" justifyContent="space-between">
          <TemplateText
            color="text.500"
            txt="Copyright © 2023 Popoy Memes. All Rights Reserved."
          />
          <TemplateText
            cursor="pointer"
            color="text.500"
            txt="Term and Conditions"
            _hover={{
              textDecoration: "underline",
            }}
          />
          <TemplateText
            cursor="pointer"
            _hover={{
              textDecoration: "underline",
            }}
            color="text.500"
            txt="Privacy"
          />
          <TemplateText
            _hover={{
              textDecoration: "underline",
            }}
            cursor="pointer"
            color="text.500"
            txt="Cookies"
          />
          <Image src="/svg/icons/audit.svg" w="120px" />
          <TemplateText color="text.500" txt="contact@wallstmemes.com" />
        </Flex>
        <TemplateText
          mt="20px"
          color="text.500"
          txt="Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction."
        />
      </Box>
    </Box>
  );
}
