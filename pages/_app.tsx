import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import Seo from "components/Seo";
import { AppProps } from "next/app";

import "../styles/main.scss";

import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Seo templateTitle="Popoy - The most enthusiastic memecoin in the universe" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
// }

export default MyApp;
