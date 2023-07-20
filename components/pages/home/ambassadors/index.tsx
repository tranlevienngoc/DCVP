import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { AMBASSADORS } from "data/ambassadors";
import React from "react";

export default function Ambassadors() {
  return (
    <Flex direction="column" alignItems="center" className="maxW">
      <TemplateText txt="AMBASSADORS" fontSize="35px" fontWeight={700} />
      <Box border="3px dashed #1e1e1e" w="150px" />

      <SimpleGrid mt="30px" gap="80px" columns={{ base: 1, lg: 3 }}>
        {AMBASSADORS.map((item) => (
          <Flex
            direction="column"
            alignItems="center"
            gap="20px"
            key={item.name}
          >
            <Image src={item.image} w="300px" />
            <TemplateText
              textTransform="uppercase"
              txt={item.name}
              fontSize="17px"
              fontWeight={600}
            />
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
