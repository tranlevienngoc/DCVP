import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Header from "./Header";
import dynamic from "next/dynamic";
import Menu from "./Menu";
const Footer = dynamic(() => import("./Footer"));

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
            <Menu />
          </Box>

          <Box>{children}</Box>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Layout;
