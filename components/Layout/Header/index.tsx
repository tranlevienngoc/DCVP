import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Stack, useDisclosure } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ButtonBase from "components/common/Buttons/ButtonBase";
import DrawerItem from "components/common/DrawerItem";
import TemplateText from "components/common/Text/TemplateText";

import NAV_ITEMS from "config/header";
import useVisible from "hooks/useVisible";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

interface props {
  onCloseMenu: () => void;
}

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const detailModal = useVisible();

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
      <Stack p="16px 24px 0 24px" display={{ xl: "none" }} bg="bg.100">
        {NAV_ITEMS.map((navItem, k) => (
          <MobileMenu onCloseMenu={onCloseMenu} key={k} navItem={navItem} />
        ))}
      </Stack>
    );
  };

  return (
    <Box className="maxW">
      <Flex
        borderStyle="solid"
        justifyContent="space-between"
        alignItems="center"
        p={{ base: "15px 0px 20px 0px", xl: "15px 25px" }}
      >
        <Link href="/">
          <Flex mt="-10px" alignItems="center" gap="10px">
            <Image src="/images/logo.png" w="140px" />
          </Flex>
        </Link>
        <Flex
          display={{ base: "none", xl: "flex" }}
          ml="30px"
          alignItems="center"
        >
          <DesktopNav />
        </Flex>

        <Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            gap="20px"
            mr={{ base: "10px", xl: "unset" }}
            alignItems="center"
          >
            <TemplateText txt="Merch" fontSize="18px" fontWeight={700} />

            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
              }) => {
                const connected = account && chain;
                return (
                  <>
                    <ButtonBase
                      onClick={openConnectModal}
                      colorText="text.500"
                      fsText="14px"
                      fwText={700}
                      content="Buy now"
                      bg="text.100"
                      borderRadius="50px"
                    />

                    {connected && (
                      <>
                        <ButtonBase
                          onClick={openAccountModal}
                          colorText="text.500"
                          fsText="14px"
                          fwText={700}
                          content={`${account.displayName} ${
                            account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""
                          }`}
                          bg="text.100"
                          borderRadius="10px"
                        />
                      </>
                    )}
                  </>
                );
              }}
            </ConnectButton.Custom>
          </Flex>

          <Flex>
            <Flex alignItems="center" justifyContent="center">
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
          </Flex>
        </Flex>
      </Flex>

      <DrawerItem
        pbody="0px"
        onClose={onClose}
        isOpen={isOpen}
        logo="/images/logo.png"
      >
        <MobileNav onCloseMenu={onClose} />
      </DrawerItem>
    </Box>
  );
};

export default Header;
