import { Box } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React from "react";

interface props {
  value: number;
  type: string;
  isDanger: boolean;
}

export default function DateTimeDisplay({ value, type, isDanger }: props) {
  return (
    <Box bg="#fff" borderRadius="10px" p="10px 30px" w="100%">
      <TemplateText fontWeight={700} fontSize="18px" txt={`${value} ${type}`} />
    </Box>
  );
}
