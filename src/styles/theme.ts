import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    light: {
      primary: "#2C5282",
      secondary: "#718096",
    },
    dark: {
      primary: "#4C51BF",
      secondary: "#A0AEC0",
    },
  },
});

export default theme;
