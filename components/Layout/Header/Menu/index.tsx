import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  SimpleGrid,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import ArrowBottom from "components/svg/ArrowBottom";
import ArrowRightButton from "components/svg/ArrowRightButton";
import { NavItem } from "constants/interface";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface props {
  navItem: NavItem;
}

const Menu = ({ navItem }: props) => {
  const menu = useDisclosure();
  const [ishover, setIsHover] = useState<boolean>();

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
          _hover={{ color: "#2669f5" }}
          fontWeight={700}
          color={ishover ? "#2669f5" : "text.100"}
          fontSize={16}
          txt={navItem.label}
        />
      </Box>
    </Flex>
  );
};

export default Menu;
