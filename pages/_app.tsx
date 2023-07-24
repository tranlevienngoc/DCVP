import { ChakraProvider } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import theme from "../styles/theme";
import "../styles/main.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "components/Layout";
import { AppProps } from "next/app";
import { WalletProvider } from "components/RainbowWallet";

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
// }

export default MyApp;
