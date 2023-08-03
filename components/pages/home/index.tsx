import { Box } from "@chakra-ui/react";
import React from "react";
import Banner from "./banner";
import TemplateText from "components/common/Text/TemplateText";
import Business from "./business";
import Information from "./information";
import HowToBuy from "./howtobuy";
import Roadmap from "./roadmap";
import Tokenomics from "./tokenomics";
import FAQ from "./faq";

export default function HomePage() {
  return (
    <Box pb="40px">
      <Banner />
      <Box p="50px 0" id="#about">
        <Business />
      </Box>
      <Information />
      <Box id="#howtobuy" pt="50px">
        <HowToBuy />
      </Box>
      <Box pt="120px" id="#roadmap">
        <Roadmap />
      </Box>
      <Box p="100px 0" id="#tokenomics">
        <Tokenomics />
      </Box>
      <FAQ />
    </Box>
  );
}
