import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "@/styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Previne o Auto Dark Mode do Android/Chrome de modificar as cores */}
        <meta name="color-scheme" content="only light" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#1A202C" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root, html, body {
                color-scheme: light only !important;
                -webkit-color-scheme: light only !important;
              }
              @media (prefers-color-scheme: dark) {
                :root, html, body {
                  color-scheme: light only !important;
                }
              }
            `,
          }}
        />
      </Head>

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
