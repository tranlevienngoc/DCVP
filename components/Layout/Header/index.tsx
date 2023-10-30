import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Stack, useDisclosure } from "@chakra-ui/react";
import ButtonBase from "components/common/Buttons/ButtonBase";
import DrawerItem from "components/common/DrawerItem";
import NAV_ITEMS from "config/header";
import { LIST_SOCIAL_NETWORK } from "data/banner";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

interface props {
  onCloseMenu: () => void;
}

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

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
        <Stack p="4px 24px 0 24px" display={{ xl: "none" }} bg="bg.100">
          {NAV_ITEMS.map((navItem, k) => (
            <MobileMenu onCloseMenu={onCloseMenu} key={k} navItem={navItem} />
          ))}
        </Stack>

        <Link
          href="https://app.uniswap.org/#/swap"
          target="_blank"
          _hover={{
            textDecoration: "none",
          }}
        >
          <ButtonBase
            fsText="14px"
            fwText={700}
            content="BUY $POPOY"
            m="14px 0 0 24px"
            colorText="text.500"
            mtText="3px"
            _hover={{
              background: "#64a151",
            }}
            bg="text.100"
            borderRadius="50px"
          />
        </Link>

        <Flex alignItems="center" gap="10px" p="14px 0 10px 24px">
          {LIST_SOCIAL_NETWORK.map((item) => (
            <Link key={item.name} href={item.href} target="_blank">
              <Image src={item.icon} w="30px" h="30px" alt="social" />
            </Link>
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
        p={{ base: "10px", xl: "15px 25px" }}
      >
        <Link href="/">
          <Image
            src="/Logo.svg"
            w={{ base: "100px", md: "120px" }}
            alt="logo"
            h="100%"
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
          <Link
            href="https://app.uniswap.org/#/swap"
            target="_blank"
            _hover={{
              textDecoration: "none",
            }}
          >
            <ButtonBase
              colorText="text.500"
              fsText="14px"
              fwText={700}
              content="BUY $POPOY"
              _hover={{
                background: "#64a151",
              }}
              display={{ base: "none", xl: "block" }}
              bg="text.100"
              borderRadius="50px"
              mtText="3px"
            />
          </Link>
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
        logo="/Logo.svg"
      >
        <Box mt="10px">
          <MobileNav onCloseMenu={onClose} />
        </Box>
      </DrawerItem>
    </Box>
  );
};

export default Header;
