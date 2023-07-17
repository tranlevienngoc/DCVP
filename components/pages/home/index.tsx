import { Box } from "@chakra-ui/react";
import React from "react";
import Banner from "./banner";
import TemplateText from "components/common/Text/TemplateText";

export default function HomePage() {
  return (
    <Box>
      <Banner />

      <Box h="1000px"></Box>
    </Box>
  );
}
