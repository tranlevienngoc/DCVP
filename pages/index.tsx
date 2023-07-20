import { Box } from "@chakra-ui/react";
import Seo from "components/Seo";

import HomePage from "components/pages/home";

export default function Home() {
  return (
    <Box>
      <Seo templateTitle="home" />
      <HomePage />
    </Box>
  );
}
