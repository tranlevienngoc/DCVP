import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React, { useCallback, useState, useEffect, useMemo } from "react";
import Countdown from "./coundown";
import Progress from "./progress";
import { LIST_OPTION_COIN, LIST_SOCIAL_NETWORK } from "data/banner";
import { CoinPayType } from "constants/types";
import InputIcon from "components/common/input/InputIcon";
import ButtonBase from "components/common/Buttons/ButtonBase";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import copy from "copy-to-clipboard";

import dynamic from "next/dynamic";
import { useAccount, useBalance } from "wagmi";
import { FiCopy } from "react-icons/fi";
import { toastSuccess } from "utils/toast";
import { convertBigNumber } from "utils/number";
import { log } from "console";
import useVisible from "hooks/useVisible";
import ModalItem from "components/common/ModalItem";
import ModalRefferal from "./modalrefferal";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Banner() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [seclected, setSelected] = useState<CoinPayType>(LIST_OPTION_COIN[0]);

  const { isConnected, address } = useAccount();

  const { data } = useBalance({
    address: `0x${address?.replace("0x", "")}`,
  });

  const [valueCoin, setValueCoin] = useState<number>();

  const [valueMyCoin, setValueMyCoin] = useState<number>();

  const handleClickScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const { openConnectModal } = useConnectModal();

  const handleChangeCoin = useCallback((value: number) => {
    setValueCoin(value);
    setValueMyCoin(convertBigNumber(value * Number(seclected.value)));
  }, []);

  const handleChangeMyCoin = useCallback((value: number) => {
    setValueMyCoin(value);
    setValueCoin(convertBigNumber(value / Number(seclected.value)));
  }, []);

  const notEnough = useMemo(
    () => (valueCoin && Number(data?.formatted) < valueCoin ? true : false),
    [valueCoin]
  );

  const modalRefferal = useVisible();

  return (
    <Box
      backgroundImage={{ base: "/images/bg/bg2.png", xl: "/images/bg/bg2.png" }}
      backgroundSize={{
        base: "cover",
        lg: "contain",
      }}
      backgroundRepeat="no-repeat"
      height="100%"
      w="100%"
      pt="90px"
    >
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Flex
          direction="column"
          alignItems="center"
          id="#walletBox"
          p={{ base: "0 16px", md: "unset" }}
          data-aos="fade-in"
        >
          <Box
            data-aos="fade-up"
            mt="30px"
            w={{ base: "100%", md: "450px" }}
            bg="#fff"
            borderRadius="20px"
            border="5px solid #1E1E1E"
          >
            <Box
              textAlign="center"
              p="16px"
              bg="text.100"
              w="100%"
              borderRadius="12px 12px 0 0"
            >
              {/* <Countdown targetDate={dateTimeAfterThreeDays} /> */}
              <TemplateText
                mb="15px"
                color="text.500"
                fontSize="30px"
                fontWeight={700}
                txt="$POPOY PRE-SALE"
              />

              <Progress completed="70%" />

              <TemplateText
                m="15px 0"
                color="text.500"
                fontSize="16px"
                fontWeight={600}
                txt="USDT Raised: <span class='textColorOrange'>$15,173,561.68 / $15,441,744.63</span>"
              />
              <TemplateText
                color="text.200"
                fontSize="16px"
                fontWeight={600}
                txt="Listing price: $0.060"
              />

              <Flex mt="20px" gap="20px">
                <Box
                  p="2px"
                  flexGrow="1"
                  flexBasis="50%"
                  borderRadius="8px"
                  bg="white "
                >
                  <Flex
                    p="13px 0"
                    flexDirection="column"
                    justifyContent="center"
                    alignContent="center"
                    bg="rgb(218, 255, 251)"
                    borderRadius="8px"
                  >
                    <TemplateText
                      txt="Current Price"
                      color="rgb(255, 113, 33)"
                      fontWeight={700}
                    />
                    <TemplateText
                      txt="1 POPOY = $0.00000001"
                      fontWeight={700}
                      color="rgb(23, 17, 105)"
                    />
                  </Flex>
                </Box>
                <Box
                  p="2px"
                  flexGrow="1"
                  flexBasis="50%"
                  borderRadius="8px"
                  bg="white"
                >
                  <Flex
                    p="13px 0"
                    flexDirection="column"
                    justifyContent="center"
                    alignContent="center"
                    bg="rgb(218, 255, 251)"
                    borderRadius="8px"
                  >
                    <TemplateText
                      txt="Next Price"
                      color="rgb(255, 113, 33)"
                      fontWeight={700}
                    />
                    <TemplateText
                      txt="1 POPOY = $0.000000012"
                      fontWeight={700}
                      color="rgb(23, 17, 105)"
                    />
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box textAlign="center" p="16px" w="100%">
              <Flex alignItems="center" direction="column" gap="10px" mt="20px">
                <Box w="100%">
                  <Flex
                    mb="10px"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <TemplateText
                      w="max-content"
                      txt={`Amount in <span class="text-color">${seclected.name}</span> you pay`}
                    />
                    <TemplateText
                      cursor="pointer"
                      txt="Max"
                      fontSize="14px"
                      fontWeight={700}
                    />
                  </Flex>
                  <InputIcon
                    type="number"
                    icon={seclected.icon}
                    placeholder={
                      convertBigNumber(Number(data?.formatted))
                        ? `${convertBigNumber(Number(data?.formatted))}`
                        : "0"
                    }
                    h="50px"
                    defaultValue={valueCoin}
                    border="none"
                    onChange={handleChangeCoin}
                    w="100%"
                    backgroundColor="#F1F4f6"
                  />
                </Box>
                <Box w="100%">
                  <TemplateText
                    mb="10px"
                    w="max-content"
                    txt={`Amount in <span class="text-color">POPOY</span> you receive`}
                  />
                  <InputIcon
                    type="number"
                    icon="/images/apple-touch-icon.png"
                    placeholder="0"
                    border="none"
                    defaultValue={valueMyCoin}
                    h="50px"
                    onChange={handleChangeMyCoin}
                    w="100%"
                    backgroundColor="#F1F4f6"
                  />
                </Box>
              </Flex>

              {isConnected && notEnough && (
                <TemplateText
                  fontSize="13px"
                  fontWeight={400}
                  txt={`You do not have enough ${seclected.name} to pay for this transaction.`}
                />
              )}

              {isConnected ? (
                <>
                  <ButtonBase
                    colorText="text.500"
                    fsText="14px"
                    w="100%"
                    h="48px"
                    mt="10px"
                    fwText={700}
                    content="Buy now"
                    bg="text.100"
                    borderRadius="50px"
                  />
                  <Flex justifyContent="center" mt="20px" pb="10px">
                    <TemplateText txt={`You have 0 POPOY`} />
                  </Flex>
                </>
              ) : (
                <ButtonBase
                  onClick={openConnectModal}
                  colorText="text.500"
                  fsText="14px"
                  w="100%"
                  h="48px"
                  mt="10px"
                  fwText={700}
                  content="Connect Wallet"
                  bg="text.100"
                  borderRadius="50px"
                />
              )}

              <Flex gap="10px">
                <ButtonBase
                  colorText="text.100"
                  fsText="14px"
                  w="100%"
                  mt="10px"
                  h="48px"
                  fwText={700}
                  onClick={() => handleClickScroll("#howtobuy")}
                  content="How to buy"
                  _hover={{
                    background: "text.300",
                  }}
                  bg="#F1F4f6"
                  borderRadius="50px"
                />
                <ButtonBase
                  colorText="text.100"
                  fsText="14px"
                  w="100%"
                  mt="10px"
                  h="48px"
                  fwText={700}
                  onClick={modalRefferal.show}
                  content="5% Referral Link"
                  _hover={{
                    background: "text.300",
                  }}
                  bg="#F1F4f6"
                  borderRadius="50px"
                />
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <ModalItem
        onClose={modalRefferal.hide}
        isOpen={modalRefferal.visible}
        maxW={{ base: "100%", md: "400px" }}
        bg="#fff"
        pBody={{ base: "0px", md: "8px 24px" }}
      >
        <ModalRefferal />
      </ModalItem>
    </Box>
  );
}
