import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Box bg="bg.100">
        <Box>
          <Box
            position="fixed"
            top="0px"
            left="0px"
            right="0px"
            bg="rgba(255,255,255,.85)"
          >
            <Header />
          </Box>
          <> {children}</>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
