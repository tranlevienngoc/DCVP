import { Box } from "@chakra-ui/react";
import Aos from "aos";
import React, { useEffect } from "react";

import Banner from "./banner";
import Business from "./business";

import HowToBuy from "./howtobuy";
import Information from "./information";
import Roadmap from "./roadmap";
import Tokenomics from "./tokenomics";

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
    <Box pb="50px">
      <Banner />
      <Box
        p={{
          base: "10px 0 80px 0",
          lg: "50px 0 50px 0",
          "2xl": "50px 0 50px 0",
        }}
        id="#about"
        className="scrollPadding"
      >
        <Business />
      </Box>
      <Information />
      <Box id="#howtobuy" p="100px 16px 00px 16px">
        <HowToBuy />
      </Box>

      <Box p={{ base: "50px 0 ", md: "100px 0 0 0" }} id="#tokenomics">
        <Tokenomics />
      </Box>
      <Box
        pt={{ base: "40px", md: "70px" }}
        id="#roadmap"
        className="scrollPadding"
        scrollMarginY={{base:"30px", lg:'unset'}}
      >
        <Roadmap />
      </Box>
    </Box>
  );
}
