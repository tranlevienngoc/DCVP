import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, useDisclosure } from "@chakra-ui/react";
import FlexBox from "components/common/FlexBox";
import TemplateText from "components/common/Text/TemplateText";
import { NavItem } from "constants/interface";

import { useCallback } from "react";

interface props {
  navItem: NavItem;
  onCloseMenu: () => void;
}

const MobileMenu = ({ navItem, onCloseMenu }: props) => {
  const handleClickScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <Flex
      cursor="pointer"
      align="center"
      justify="space-between"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
      p="10px 0"
      borderBottom="1px solid #2c2b38"
      onClick={() => {
        onCloseMenu();
        handleClickScroll(navItem.href || "");
      }}
    >
      <TemplateText
        w="100%"
        fontWeight={700}
        fontSize={16}
        txt={navItem.label}
      />
    </Flex>
  );
};

export default MobileMenu;
