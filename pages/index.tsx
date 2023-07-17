import { Box } from "@chakra-ui/react";
import Seo from "components/Seo";
import TemplateText from "components/common/Text/TemplateText";
import HomePage from "components/pages/home";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box>
      <Seo templateTitle="home" />
      <HomePage />
    </Box>
  );
};

export default Home;
