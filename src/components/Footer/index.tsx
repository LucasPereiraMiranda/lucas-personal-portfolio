import { Flex, Text, chakra } from '@chakra-ui/react';
import { Link as ScrollLink } from "react-scroll";

export function Footer() {
  return (
    <Flex
      as="footer"
      width="100%"
      py="4"
      bg="gray.800"
      color="white"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      bottom="0"
      left="0"
    >
      <Text fontSize="sm">
        Made with ☕️ and ❤️ by
        <chakra.a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          color="blue.300"
          mx="1"

          as={ScrollLink}
          to="home"
          spy
          smooth
          duration={700}
          offset={-70}
        >
          Lucas
        </chakra.a>
      </Text>
    </Flex>
  );
}