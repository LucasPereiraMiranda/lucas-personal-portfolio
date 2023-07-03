import { Flex, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "../Avatar";

export function Hero() {
  return (
    <Flex
      py={20}
      px={10}
      textAlign="center"
      justifyContent="space-evenly"
      alignItems="space-around"
    >
      <Flex
        bg="gradient"
        w="200px"
        h="200px"
        padding={4}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size="xl">Hi There, I`m Lucas</Heading>
        <Text fontSize="xl">Showcase your skills and accomplishments here</Text>
      </Flex>

      <Flex>
        <Avatar />
      </Flex>
    </Flex>
  );
}
