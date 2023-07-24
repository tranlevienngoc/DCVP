import { Box } from "@chakra-ui/react";
import React from "react";
import Banner from "./banner";
import TemplateText from "components/common/Text/TemplateText";
import Business from "./business";
import Slide from "./slide";
import Information from "./information";
import HowToBuy from "./howtobuy";
import Roadmap from "./roadmap";
import Tokenomics from "./tokenomics";
import Ambassadors from "./ambassadors";
import Airdrop from "./airdrop";
import FAQ from "./faq";

export default function HomePage() {
  return (
    <Box pb="40px">
      <Banner />
      <Box pt="100px">
        <Business />
      </Box>
      <Slide />
      <Information />
      <HowToBuy />
      <Roadmap />
      <Box pt="100px" id="#tokenomics">
        <Tokenomics />
      </Box>
      <Box pt="100px" id="#ambassadors">
        <Ambassadors />
      </Box>
      <Box pt="100px" id="#airdrop">
        <Airdrop />
      </Box>
      <FAQ />
    </Box>
  );
}
