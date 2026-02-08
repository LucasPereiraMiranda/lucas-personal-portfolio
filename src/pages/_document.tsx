import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "@/styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Previne o Auto Dark Mode do Android/Chrome de modificar as cores */}
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
        <meta name="theme-color" content="#1A202C" />
        {/* Bloqueia DarkReader e extensões similares */}
        <meta name="darkreader-lock" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root, html, body, * {
                color-scheme: dark !important;
                -webkit-color-scheme: dark !important;
                forced-color-adjust: none !important;
                -ms-high-contrast-adjust: none !important;
              }
              @media (prefers-color-scheme: dark) {
                :root, html, body {
                  color-scheme: dark !important;
                  background-color: #1A202C !important;
                  color: #FFFFFF !important;
                }
                img, video, canvas, svg {
                  filter: none !important;
                }
              }
              @media (forced-colors: active) {
                :root, html, body, * {
                  forced-color-adjust: none !important;
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
