import { Box, Flex, Heading } from "@chakra-ui/react";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Box bg="gradient" w="200px" h="200px" padding={4}>
        <Heading size="xl">Hi There, I`m Lucas</Heading>
      </Box>
    </Flex>
  );
}
