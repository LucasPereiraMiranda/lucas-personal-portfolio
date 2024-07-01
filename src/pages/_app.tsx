import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { theme } from "@/styles/theme";
import "swiper/css"; // Importe o CSS global do Swiper

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
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
