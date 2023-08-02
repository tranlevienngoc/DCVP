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
        border={isOpen ? "3px solid #1e1e1e" : "3px solid #737373"}
        borderRadius="50px"
        p="0 16px"
      >
        <Flex
          p="16px 0"
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
          cursor="pointer"
          borderBottom={isOpen ? "1px solid #73737326" : "unset"}
        >
          <TemplateText
            txt={item.question}
            color={isOpen ? "text.100" : "text.600"}
            fontSize={{ base: "18px", md: "20px" }}
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
          <TemplateText
            p="16px 0"
            fontSize={{ base: "16px", md: "18px" }}
            txt={item.answer}
          />
        </Collapse>
      </Stack>
    </Box>
  );
}
