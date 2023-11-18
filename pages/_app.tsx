import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import Seo from "components/Seo";
import { AppProps } from "next/app";

import "../styles/main.scss";

import theme from "../styles/theme";
import Script from "next/script";
import { useEffect, useState } from "react";
// import LoadingGlobal from "components/common/LoadingGlobal";
import { SoundAudioProvider } from "context/useSoundAudio";
import StatusSound from "components/common/StatusAudio";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const element = document.getElementById("loading-global");
  //   element?.addEventListener("click", () => {
  //     setIsLoading(false);
  //   });
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <SoundAudioProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {!isLoading && <StatusSound />}
      </SoundAudioProvider>
    </ChakraProvider>
  );
}
// }

export default MyApp;
