import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "gray.800")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props) => ({
      color: mode("gray.800", "gray.100")(props),
      textDecoration: "none",

      transition: "color 0.1s ease-in-out",
      _hover: {
        color: mode("cyan.800", "cyan.300")(props),
        textDecoration: "none",
      },
    }),
  },
};

const fonts = {
  body: "var(--font-nunito), sans-serif",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  colorizedGradient: "linear(to-r, purple.700, cyan.700)",
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
  components,
  textStyles,
  fonts,
  colors,
});
