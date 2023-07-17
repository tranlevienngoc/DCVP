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
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface props {
  navItem: NavItem;
}

const Menu = ({ navItem }: props) => {
  const menu = useDisclosure();
  const [ishover, setIsHover] = useState<boolean>();

  return (
    <Flex
      onClick={() => {
        menu.onOpen();
      }}
      alignItems="center"
    >
      <Box p="0px 10px" w="100%" cursor="pointer">
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
