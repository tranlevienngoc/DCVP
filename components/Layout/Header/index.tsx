import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Stack, useDisclosure } from "@chakra-ui/react";

import ButtonBase from "components/common/Buttons/ButtonBase";
import DrawerItem from "components/common/DrawerItem";
import TemplateText from "components/common/Text/TemplateText";

import NAV_ITEMS from "config/header";
import useVisible from "hooks/useVisible";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { useCallback } from "react";
import truncateEthAddress from "utils/truncateEthAddress";
import { LIST_SOCIAL_NETWORK } from "data/banner";

interface props {
  onCloseMenu: () => void;
}

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const { openAccountModal } = useAccountModal();
  const { openConnectModal } = useConnectModal();

  const handleClickScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const timer = setTimeout(() => openConnectModal?.(), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const { isConnected, address } = useAccount();

  const DesktopNav = () => {
    return (
      <Stack direction="row" spacing={4} className="stack-header">
        {NAV_ITEMS.map((navItem, k) => {
          return (
            <Box key={Number(k)}>
              <Menu navItem={navItem} />
            </Box>
          );
        })}
      </Stack>
    );
  };
  const MobileNav = ({ onCloseMenu }: props) => {
    return (
      <Box>
        <Stack p="16px 24px 0 24px" display={{ xl: "none" }} bg="bg.100">
          {NAV_ITEMS.map((navItem, k) => (
            <MobileMenu onCloseMenu={onCloseMenu} key={k} navItem={navItem} />
          ))}
        </Stack>
        {isConnected ? (
          <ButtonBase
            onClick={openAccountModal}
            colorText="text.100"
            fsText="16px"
            h="49px"
            pl="24px"
            fwText={700}
            content={truncateEthAddress(`${address}`)}
            alignItems="center"
            bg="none"
            borderRadius="10px"
          />
        ) : (
          <Link
            href="https://dev.coins.plus/"
            target="_blank"
            _hover={{
              textDecoration: "none",
            }}
          >
            <ButtonBase
              // onClick={openConnectModal}
              fsText="16px"
              fwText={700}
              content="BUY $POPOY"
              m="10px 0 0 24px"
              colorText="text.500"
              mtText="3px"
              bg="text.100"
              borderRadius="50px"
            />
          </Link>
        )}
        <Flex
          alignItems="center"
          gap="10px"
          p={isConnected ? "0 0 0 24px" : "10px 0 10px 24px"}
        >
          {LIST_SOCIAL_NETWORK.map((item) => (
            <Image key={item.name} src={item.icon} w="35px" h="35px" />
          ))}
        </Flex>
      </Box>
    );
  };

  return (
    <Box className="maxW">
      <Flex
        borderStyle="solid"
        justifyContent="space-between"
        alignItems="center"
        p={{ base: "15px 16px 20px 16px", xl: "15px 25px" }}
      >
        <Link href="/">
          <Image
            mt="-10px"
            src="/Logo.png"
            w={{ base: "120px", md: "140px" }}
          />
        </Link>
        <Flex display={{ base: "none", xl: "flex" }} alignItems="center">
          <DesktopNav />
        </Flex>

        <Flex
          gap="20px"
          mr={{ base: "10px", xl: "unset" }}
          alignItems="center"
          justifyContent="end"
        >
          {isConnected ? (
            <ButtonBase
              onClick={openAccountModal}
              display={{ base: "none", xl: "block" }}
              colorText="text.500"
              fsText="14px"
              fwText={700}
              content={truncateEthAddress(`${address}`)}
              bg="text.100"
              borderRadius="50px"
            />
          ) : (
            <Link
              href="https://dev.coins.plus/"
              target="_blank"
              _hover={{
                textDecoration: "none",
              }}
            >
              <ButtonBase
                // onClick={openConnectModal}
                colorText="text.500"
                fsText="14px"
                fwText={700}
                content="BUY $POPOY"
                display={{ base: "none", xl: "block" }}
                bg="text.100"
                borderRadius="50px"
                mtText="3px"
              />
            </Link>
          )}
        </Flex>

        <Box
          w="40px"
          h="46px"
          bg="bg.100"
          cursor="pointer"
          borderRadius="4px"
          alignItems="center"
          justifyContent="center"
          display={{ base: "flex", xl: "none" }}
          onClick={() => {
            onToggle();
          }}
        >
          {isOpen ? (
            <CloseIcon color="text.100" w={3} h={3} />
          ) : (
            <HamburgerIcon w={6} h={6} color="text.100" />
          )}
        </Box>
      </Flex>

      <DrawerItem
        pbody="0px"
        onClose={onClose}
        isOpen={isOpen}
        logo="/Logo.png"
      >
        <MobileNav onCloseMenu={onClose} />
      </DrawerItem>
    </Box>
  );
};

export default Header;
