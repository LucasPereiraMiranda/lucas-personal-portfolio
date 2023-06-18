import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        aria-label="Toggle Theme"
        icon={
          colorMode === "light" ? <FaMoon size={20} /> : <FaSun size={20} />
        }
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}
