import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";

import { NavItem } from "constants/interface";

import React, { useCallback, useState } from "react";

interface props {
  navItem: NavItem;
}

const Menu = ({ navItem }: props) => {
  const menu = useDisclosure();

  const handleClickScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Flex
      onClick={() => {
        menu.onOpen();
      }}
      alignItems="center"
    >
      <Box
        onClick={() => handleClickScroll(navItem.href || "")}
        p="0px 10px"
        w="100%"
        cursor="pointer"
      >
        <TemplateText
          _hover={{ color: "#64a152" }}
          fontWeight={700}
          fontSize={16}
          txt={navItem.label}
        />
      </Box>
    </Flex>
  );
};

export default Menu;
