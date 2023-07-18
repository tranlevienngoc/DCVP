import { ChevronDownIcon } from "@chakra-ui/icons";
import { Stack, Flex, Collapse, useDisclosure, Box } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React from "react";
interface props {
  item: {
    question: string;
    answer: string;
  };
  index?: number;
  length: number;
}

export default function Questions({ item, index, length }: props) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Stack
        key={item.question}
        className="content"
        mb={length - 1 == index ? "unset" : "20px"}
        onClick={onToggle}
        bg="rgba(255, 255, 255, 0.8)"
        border="3px solid #737373"
        borderRadius="12px"
      >
        <Flex
          py={4}
          px={5}
          justify={"space-between"}
          align={"center"}
          borderBottomWidth={1}
          borderStyle={"solid"}
          _hover={{
            textDecoration: "none",
          }}
          cursor="pointer"
        >
          <TemplateText
            txt={item.question}
            color={isOpen ? "text.100" : "text.600"}
            fontSize="26px"
            fontWeight={700}
          />

          <ChevronDownIcon
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <TemplateText p="24px" fontSize="18px" txt={item.answer} />
        </Collapse>
      </Stack>
    </Box>
  );
}
