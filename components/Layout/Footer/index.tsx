import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ButtonBase from "components/common/Buttons/ButtonBase";
import TemplateText from "components/common/Text/TemplateText";

import MoonRiver from "components/svg/network/MoonRiver";
import { LIST_SOCIAL_NETWORK } from "data/banner";
import { TEXT_FOOTER } from "data/footer";
import useModeTheme from "hooks/colorDarkMode";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaMediumM, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="text.100" p="30px 25px">
      <Box className="maxW">
        <Flex
          direction="column"
          alignItems="center"
          gap="10px"
          display={{ base: "flex", xl: "none" }}
        >
          <Image src="/images/apple-touch-icon.png" w="100px" />

          <Flex gap="10px" alignItems="center" justifyContent="center" mb="7px">
            {LIST_SOCIAL_NETWORK.map((item) => (
              <Image key={item.name} src={item.icon} w="25px" h="25px" />
            ))}
          </Flex>
        </Flex>
        <Flex
          direction={{ base: "column", xl: "row" }}
          mt="20px"
          alignItems="center"
          justifyContent="space-between"
        >
          <TemplateText
            color="text.500"
            txt="Copyright © 2023 Popoy Memes. All Rights Reserved."
            textAlign={{ base: "center", xl: "start" }}
          />
          <Flex
            gap="20px"
            alignItems="center"
            mt={{ base: "10px", xl: "unset" }}
          >
            {TEXT_FOOTER.map((item) => (
              <TemplateText
                cursor="pointer"
                color="text.500"
                txt={item.label}
                _hover={{
                  textDecoration: "underline",
                }}
              />
            ))}
          </Flex>

          <Image
            src="/svg/icons/audit.svg"
            w="120px"
            display={{ base: "none", xl: "block" }}
          />
          <Box textAlign="center" display={{ base: "none", xl: "block" }}>
            <Flex gap="10px" alignItems="center" mb="7px">
              {LIST_SOCIAL_NETWORK.map((item) => (
                <Image key={item.name} src={item.icon} w="25px" h="25px" />
              ))}
            </Flex>
          </Box>
        </Flex>
        <TemplateText
          mt="20px"
          color="text.500"
          textAlign={{ base: "center", xl: "start" }}
          txt="$POPOY coin has no association with Ultra Records. This token is simply paying homage to a meme we all love and recognize."
        />
        <TemplateText
          mt="7px"
          color="text.500"
          textAlign={{ base: "center", xl: "start" }}
          txt="$POPOY is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only."
        />
      </Box>
    </Box>
  );
}
