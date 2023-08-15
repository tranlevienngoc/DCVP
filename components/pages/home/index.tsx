import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Banner from "./banner";
import TemplateText from "components/common/Text/TemplateText";
import Business from "./business";
import Information from "./information";
import HowToBuy from "./howtobuy";
import Roadmap from "./roadmap";
import Tokenomics from "./tokenomics";
import FAQ from "./faq";
import Aos from "aos";

export default function HomePage() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      offset: 100,
      duration: 1000,
      delay: 50,
    });
  }, []);
  return (
    <Box pb="40px">
      <Banner />
      <Box
        p={{
          base: "20px 0 80px 0",
          lg: "100px 0 50px 0",
          "2xl": "25px 0 50px 0",
        }}
        id="#about"
      >
        <Business />
      </Box>
      <Information />
      <Box id="#howtobuy" mt="-20px">
        <HowToBuy />
      </Box>
      <Box pt={{ base: "110px", md: "120px" }} id="#roadmap">
        <Roadmap />
      </Box>
      <Box p={{ base: "50px 0 ", md: "100px 0" }} id="#tokenomics">
        <Tokenomics />
      </Box>

      <FAQ />
    </Box>
  );
}
