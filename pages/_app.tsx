import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useEffect, useReducer } from "react";

import { WalletProvider } from "../components/RainbowWallet";

import theme from "../styles/theme";
import "../styles/main.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = dynamic(() => import("../components/Layout"), {
  suspense: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ChakraProvider theme={theme}>
        <ToastContainer autoClose={3000} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </WalletProvider>
  );
}

export default MyApp;
