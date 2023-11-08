import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import Seo from "components/Seo";
import { AppProps } from "next/app";

import "../styles/main.scss";

import theme from "../styles/theme";
import Script from "next/script";
import { useEffect, useState } from "react";
import LoadingGlobal from "components/common/LoadingGlobal";
import { SoundAudioProvider } from "context/useSoundAudio";
import StatusSound from "components/common/StatusAudio";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const element = document.getElementById("loading-global");
    element?.addEventListener("click", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <SoundAudioProvider>
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

        {!isLoading && (
          <audio
            src="https://popoy-video.s3.ap-southeast-1.amazonaws.com/popoy-song.mp3"
            autoPlay
            loop
            id="audio"
          />
        )}

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
