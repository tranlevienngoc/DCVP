import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: JSX.Element }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <Box bg="bg.100">
      {mounted && (
        <>
          <Box
            position="fixed"
            top="0px"
            left="0px"
            zIndex={999}
            right="0px"
            bg="rgba(255,255,255,.85)"
          >
            <Header />
          </Box>
          <Box>{children}</Box>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Layout;
