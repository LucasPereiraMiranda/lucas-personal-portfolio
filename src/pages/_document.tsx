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
        {/* Bloqueia DarkReader e extensões similares */}
        <meta name="darkreader-lock" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root, html, body {
                color-scheme: only light !important;
                -webkit-color-scheme: only light !important;
                forced-color-adjust: none !important;
                -ms-high-contrast-adjust: none !important;
              }
              @media (prefers-color-scheme: dark) {
                html, body {
                  forced-color-adjust: none !important;
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
