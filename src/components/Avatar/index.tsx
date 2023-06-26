import { Box, Image, useStyleConfig } from "@chakra-ui/react";

export function Avatar() {
  const avatarStyles = useStyleConfig("Avatar");

  return (
    <Box
      display="inline-block"
      overflow="hidden"
      boxShadow="md"
      borderWidth="2px"
      sx={{
        ...avatarStyles,
        backgroundImage: "linear-gradient(to right, #13B1F5, #E70FAA);",
      }}
    >
      <Image
        src="https://github.com/LucasPereiraMiranda.png"
        alt="Portfolio Hero"
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
}
