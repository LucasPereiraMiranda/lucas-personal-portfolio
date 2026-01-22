import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { theme } from "@/styles/theme";
import { LocaleProvider } from "@/contexts/LocaleContext";

const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-nunito: ${nunito.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <LocaleProvider>
          <Component {...pageProps} />
        </LocaleProvider>
      </ChakraProvider>
    </>
  );
}
