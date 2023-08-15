import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import theme from "../styles/theme";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Bangers&family=Inter:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/favicon.ico"
          />
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default Document;
