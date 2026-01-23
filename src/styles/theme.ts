import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode("gray.100", "gray.800")(props),
    },
  }),
};

const fonts = {
  body: "var(--font-nunito), sans-serif",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  colorizedGradient: "linear(to-r, teal.700, cyan.700)",
};

const textStyles = {
  bordedGradientText: {
    bgGradient: colors.colorizedGradient,
    bgClip: "text",
    transition: "box-shadow 0.3s ease-in-out",
    _hover: {
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    },
  },
};

export const theme = extendTheme({
  config,
  styles,
  textStyles,
  fonts,
  colors,
});
