import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import Seo from "components/Seo";
import { AppProps } from "next/app";

import "../styles/main.scss";

import theme from "../styles/theme";
import Script from "next/script";
import { useEffect, useState } from "react";
import LoadingGlobal from "components/common/LoadingGlobal";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Seo templateTitle="Popoy - The most enthusiastic memecoin in the universe" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z5YP5L71WM" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); 
          
          gtag('config', 'G-Z5YP5L71WM');
        `}
      </Script>
      {isLoading && <LoadingGlobal />}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
// }

export default MyApp;
