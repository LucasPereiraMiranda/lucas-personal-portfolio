import { Flex, Text, Box, VStack } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const MotionText = motion(Text);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      width="100%"
      py={{ base: 12, md: 16 }}
      bg="gray.900"
      color="white"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Gradient line at top */}
      <Box
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        width={{ base: "80%", md: "400px" }}
        height="2px"
        bgGradient="linear(to-r, transparent, teal.400, cyan.400, transparent)"
      />

      <VStack spacing={4}>
        <MotionText
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="medium"
          textAlign="center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Made with ☕️ and ❤️ by{" "}
          <Text
            as={ScrollLink}
            to="home"
            spy
            smooth
            duration={700}
            offset={-70}
            bgGradient="linear(to-r, teal.400, cyan.400)"
            bgClip="text"
            fontWeight="bold"
            cursor="pointer"
            _hover={{
              bgGradient: "linear(to-r, teal.300, cyan.300)",
            }}
            transition="all 0.3s"
          >
            Lucas
          </Text>
        </MotionText>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          © {currentYear} · All rights reserved
        </Text>
      </VStack>
    </Flex>
  );
}
