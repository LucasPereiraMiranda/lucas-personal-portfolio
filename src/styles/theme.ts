import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  components: {
    Button: {
      baseStyle: {
        cursor: "pointer",
      },
    },
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});
