import { Box, Button, Flex, Heading, useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex justifyContent="space-around" alignItems="center">
        <Box p={4}>
          <Heading size="xl">Lucas Pereira Miranda Portfolio</Heading>
        </Box>

        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark Theme" : "Light Theme"}
          </Button>
        </Box>
      </Flex>
    </>
  );
}
