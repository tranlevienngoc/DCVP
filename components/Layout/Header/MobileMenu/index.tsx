import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, useDisclosure } from "@chakra-ui/react";
import FlexBox from "components/common/FlexBox";
import TemplateText from "components/common/Text/TemplateText";
import { NavItem } from "constants/interface";
import useModeTheme from "hooks/colorDarkMode";

import Link from "next/link";

import { useCallback } from "react";

interface props {
  navItem: NavItem;
  onCloseMenu: () => void;
}

const MobileMenu = ({ navItem, onCloseMenu }: props) => {
  const { isOpen, onToggle } = useDisclosure();
  const { darkModeColors } = useModeTheme();
  const handleClickScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <Flex
      h="51px"
      cursor="pointer"
      mt="-8px"
      align="center"
      justify="space-between"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
      borderBottom={darkModeColors.border400}
      onClick={() => {
        onCloseMenu();
        handleClickScroll(navItem.href || "");
      }}
    >
      <TemplateText fontWeight={700} fontSize={16} txt={navItem.label} />
    </Flex>
  );
};

export default MobileMenu;
