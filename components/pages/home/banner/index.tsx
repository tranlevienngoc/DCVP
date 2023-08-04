import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React, { useCallback, useState } from "react";
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

  const [valueCoin, setValueCoin] = useState(0);
  const [valueMyCoin, setValueMyCoin] = useState(0);

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

  const copyToClipboard = () => {
    copy("https://bs_066ea8e0.youpromote.care?aff=228261");
    toastSuccess("You have copied!");
  };

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
          <Flex gap="10px" alignItems="center" mt="20px" data-aos="fade-in">
            {LIST_SOCIAL_NETWORK.map((item) => (
              <Image key={item.name} w="42px" h="42px" src={item.icon} />
            ))}
          </Flex>

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
              <Countdown targetDate={dateTimeAfterThreeDays} />
              <TemplateText
                m="15px 0"
                color="text.500"
                fontSize="18px"
                fontWeight={600}
                txt="BUY IN BEFORE PRICE INCREASES!"
              />

              <Progress content="Next Stage Price: $0.0319" completed="70%" />

              <TemplateText
                m="15px 0"
                color="text.500"
                fontSize="16px"
                fontWeight={600}
                txt="USDT Raised: $15,173,561.68 / $15,441,744.63"
              />

              {isConnected && (
                <Box w="100%">
                  <TemplateText
                    m="15px 0"
                    color="text.600"
                    fontSize="16px"
                    fontWeight={600}
                    txt="Your Purchased POPOY = 0"
                  />
                  <Flex
                    w="100%"
                    direction="column"
                    alignItems="center"
                    gap="20px"
                  >
                    <TemplateText
                      fontSize="16px"
                      color="text.500"
                      txt="Refer your friends to participate in the presale"
                    />
                    <Flex
                      p="10px"
                      border="1px solid #0DC5F5"
                      borderRadius="20px"
                      alignItems="center"
                      gap="5px"
                      w="40%"
                    >
                      <TemplateText
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        maxW="255px"
                        color="text.500"
                        txt="https://bs_066ea8e0.youpromote.care?aff=228261"
                      />

                      <Icon
                        onClick={copyToClipboard}
                        as={FiCopy}
                        color="text.500"
                        h={5}
                        w={5}
                      />
                    </Flex>
                  </Flex>
                </Box>
              )}
            </Box>

            <Box textAlign="center" p="16px" w="100%">
              <Flex alignItems="center" justifyContent="space-between">
                <Box
                  bg="#C7CED3"
                  h="1px"
                  w={{ base: "53px", sm: "80px", md: "100px" }}
                />
                <TemplateText txt="1 POPOY = $0.0316" display="inline-flex" />
                <Box
                  bg="#C7CED3"
                  h="1px"
                  w={{ base: "53px", sm: "80px", md: "100px" }}
                />
              </Flex>
              <Flex justifyContent="space-between" mt="20px" gap="20px">
                {LIST_OPTION_COIN.map((item) => (
                  <Flex
                    justifyContent="center"
                    cursor="pointer"
                    border={
                      seclected?.name === item.name
                        ? "1px solid #1E1E1E"
                        : "unset"
                    }
                    bg="#f1f4f6"
                    p="12px 16px"
                    key={item.name}
                    alignItems="center"
                    gap="10px"
                    w="100%"
                    borderRadius="10px"
                    onClick={() => setSelected(item)}
                  >
                    <Image src={item.image} w="25px" />
                    <TemplateText txt={item.name} />
                  </Flex>
                ))}
              </Flex>
              <Flex
                borderBottom="1px solid #C7CED3"
                justifyContent="center"
                mt="20px"
                pb="10px"
              >
                {isConnected && (
                  <TemplateText
                    txt={`${seclected.name} Balance: ${data?.formatted}`}
                  />
                )}
              </Flex>

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
                    h="40px"
                    placeholder="0"
                    border="none"
                    onChange={handleChangeCoin}
                    defaultValue={valueCoin}
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
                    h="40px"
                    placeholder="0"
                    border="none"
                    onChange={handleChangeMyCoin}
                    defaultValue={valueMyCoin}
                    w="100%"
                    backgroundColor="#F1F4f6"
                  />
                </Box>
              </Flex>

              {Number(data?.formatted) < valueCoin && isConnected && (
                <Box mt="10px">
                  <TemplateText
                    fontSize="13px"
                    fontWeight={400}
                    txt={`You do not have enough ${seclected.name} to pay for this transaction.`}
                  />
                </Box>
              )}

              {isConnected ? (
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
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
