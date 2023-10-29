import { Box, Flex, Link, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { LIST_SOCIAL_NETWORK } from "data/banner";

import React from "react";

export default function Footer() {
  return (
    <Box bg="text.100" p="30px 25px">
      <Box className="maxW">
        <Flex
          direction="column"
          alignItems="center"
          gap="10px"
          display={{ base: "flex", xl: "none" }}
        >
          <Flex gap="10px" alignItems="center" justifyContent="center" mb="7px">
            {LIST_SOCIAL_NETWORK.map((item) => (
              <Link key={item.name} href={item.href} target="_blank">
                <Image
                  key={item.name}
                  src={item.icon}
                  width="25px"
                  border="1px solid #585858"
                  borderRadius="50px"
                  height="25px"
                  alt={item.icon}
                />
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex
          direction={{ base: "column", xl: "row" }}
          mt="20px"
          alignItems="center"
          justifyContent="space-between"
        >
          <TemplateText
            color="text.500"
            txt="Copyright © 2023 Popoy. All Rights Reserved."
            textAlign={{ base: "center", xl: "start" }}
          />
          <Box textAlign="center" display={{ base: "none", xl: "block" }}>
            <Flex gap="10px" alignItems="center" mb="7px">
              {LIST_SOCIAL_NETWORK.map((item) => (
                <Link href={item.href} key={item.name} target="_blank">
                  <Image
                    border="1px solid #585858"
                    borderRadius="50px"
                    src={item.icon}
                    width={25}
                    height={25}
                    alt={item.icon}
                  />
                </Link>
              ))}
            </Flex>
          </Box>
        </Flex>
        <TemplateText
          mt="20px"
          color="text.500"
          fontSize="12px"
          textAlign={{ base: "center", xl: "start" }}
          txt="Popoy meme token has no association with Ultra Records and Artnoux. This token is simply paying homage to a meme we all love and recognize. $POPOY is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap, the coin is completely useless and for entertainment purposes only."
        />
        <TemplateText
          mt="7px"
          color="text.500"
          fontSize="12px"
          textAlign={{ base: "center", xl: "start" }}
          txt="This website does not constitute an offer to purchase or solicitation to sell, nor is it a recommendation to buy or sell, any token or other product. Purchasing and selling tokens is inherently risky and holders must bear their risk of loss. Neither the authors of this website nor any participants in the Popoy project accept any liability for losses or taxes that holders, purchasers or sellers of Popoy may incur. The value of Popoy may decrease and may be highly volatile. This website is not directed towards any person located in a jurisdiction where purchasing, selling or holding Popoy is prohibited or regulated. Consult your local laws before transacting in any cryptocurrency."
        />
      </Box>
    </Box>
  );
}
