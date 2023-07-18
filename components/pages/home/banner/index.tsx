import { Box, Flex, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React, { useCallback, useState } from "react";
import Countdown from "./coundown";
import Progress from "./progress";
import { LIST_OPTION_COIN } from "data/banner";
import { CoinPayType } from "constants/types";
import InputIcon from "components/common/input/InputIcon";
import ButtonBase from "components/common/Buttons/ButtonBase";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ReactPlayer from "react-player";

export default function Banner() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [seclected, setSelected] = useState<CoinPayType>(LIST_OPTION_COIN[0]);

  const [valueCoin, setValueCoin] = useState("");

  const handleChangeInput = useCallback(
    (value: string) => {
      setValueCoin(value);
    },
    [setValueCoin]
  );

  return (
    <Box
      backgroundImage={{
        base: "/svg/bg/bannermb.svg",
        xl: "/svg/bg/banner.svg",
      }}
      backgroundSize="cover"
      h="1120px"
      w="100%"
      pt="70px"
      pb="70px"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        position="relative"
      >
        <Flex
          direction="column"
          alignItems="center"
          p={{ base: "0 16px", md: "unset" }}
        >
          <Image src="/images/logo.png" w="200px" />

          <Box
            mt="30px"
            w={{ base: "100%", md: "500px" }}
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
              <TemplateText
                m="15px 0"
                color="text.600"
                fontSize="16px"
                fontWeight={600}
                txt="Your Purchased PPM = 0"
              />
            </Box>

            <Box textAlign="center" p="16px" w="100%">
              <Flex alignItems="center" justifyContent="space-between">
                <Box bg="text.100" h="1px" w="100px" />
                <TemplateText txt="1 PPM = $0.0316" />
                <Box bg="text.100" h="1px" w="100px" />
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
                borderBottom="1px solid #1E1E1E"
                justifyContent="center"
                mt="20px"
                pb="10px"
              >
                {seclected.name !== "CARD" && (
                  <TemplateText txt={`${seclected.name} Balance: 0`} />
                )}
              </Flex>

              <Flex alignItems="center" gap="10px">
                <Box>
                  <Flex
                    mb="10px"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <TemplateText
                      w="max-content"
                      txt={`Amount in <b>${seclected.name}</b> you pay`}
                    />
                    <TemplateText
                      cursor="pointer"
                      txt="Max"
                      fontSize="16px"
                      fontWeight={700}
                    />
                  </Flex>
                  <InputIcon
                    type="number"
                    icon={seclected.icon}
                    h="40px"
                    paddingRight="90px"
                    placeholder="0"
                    border="none"
                    value={valueCoin}
                    isVisible
                    isFocus={true}
                    w="100%"
                    backgroundColor="#F1F4f6"
                    onChange={handleChangeInput}
                  />
                </Box>
                <Box>
                  <TemplateText
                    mb="10px"
                    w="max-content"
                    txt="Amount in <b>PPM</b> you receive"
                  />
                  <InputIcon
                    type="number"
                    h="40px"
                    paddingRight="90px"
                    placeholder="0"
                    border="none"
                    value={valueCoin}
                    icon="/images/apple-touch-icon.png"
                    isVisible
                    isFocus={true}
                    w="100%"
                    onChange={handleChangeInput}
                  />
                </Box>
              </Flex>

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
                        w="100%"
                        mt="10px"
                        fwText={700}
                        content="Buy now"
                        bg="text.100"
                        borderRadius="50px"
                      />
                    </>
                  );
                }}
              </ConnectButton.Custom>
              <ButtonBase
                colorText="text.100"
                fsText="14px"
                w="100%"
                mt="10px"
                fwText={700}
                content="Buy with BNB"
                bg="#fff"
                _hover={{
                  background: "text.600",
                }}
                border="2px solid #1E1E1E"
                borderRadius="50px"
              />
              <ButtonBase
                colorText="text.100"
                fsText="14px"
                w="100%"
                mt="10px"
                fwText={700}
                content="how to buy"
                _hover={{
                  background: "text.300",
                }}
                bg="#F1F4f6"
                borderRadius="50px"
              />
            </Box>
          </Box>
        </Flex>
        <Box
          className="video"
          position="absolute"
          bottom={{ base: "-50%", md: "-60%", lg: "-85%", xl: "-75%" }}
          left={{ base: "unset", lg: "50%" }}
          transform={{
            base: "unset",
            lg: "translate(-34%,-50%)",
            xl: "translate(-25%,-50%)",
            "2xl": "translate(-21%,-50%)",
          }}
        >
          <ReactPlayer url="https://www.youtube.com/watch?v=k85mRPqvMbE&ab_channel=CrazyFrog" />
        </Box>
      </Flex>
    </Box>
  );
}
