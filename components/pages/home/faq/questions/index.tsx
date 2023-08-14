import { ChevronDownIcon } from "@chakra-ui/icons";
import { Stack, Flex, Collapse, useDisclosure, Box } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import AddIcon from "components/svg/AddIcon";
import MinusIcon from "components/svg/MinusIcon";
import React from "react";
interface props {
  item: {
    question: string;
    answer: string;
  };
  index: number;
  length: number;
  dataAos?: string;
}

export default function Questions({ item, index, length, dataAos }: props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Stack
        key={item.question}
        className="content"
        mb={length - 1 == index ? "unset" : "20px"}
        bg="rgba(255, 255, 255, 0.8)"
        borderBottom={
          length - 1 !== index
            ? isOpen
              ? "1px solid #1e1e1e"
              : "1px solid #737373"
            : "unset "
        }
      >
        <Flex
          onClick={onToggle}
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

          {isOpen ? <MinusIcon /> : <AddIcon />}
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
