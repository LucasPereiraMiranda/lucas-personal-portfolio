import { Flex, Image, Text, Stack } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialButton } from "../SocialButton";

export function Hero() {
  return (
    <Flex align="center" justify="center" flexDirection="column">
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        spacing={{ base: 8, md: 16 }}
        marginTop={{ base: "0rem", md: "8rem" }}
        gap={{ base: "5rem", md: "10rem" }}
      >
        <Flex alignItems="center" justifyContent="center">
          <Image
            src="https://github.com/LucasPereiraMiranda.png"
            alt="Lucas' profile picture"
            boxSize="250px"
            borderRadius="full"
            mr="4"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.5)"
          />
        </Flex>
        <Flex direction="column">
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb="2">
            Hi 👋,
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="2">
            My name is Lucas
          </Text>
          <Text fontSize={{ base: "xl", md: "xl" }} fontWeight="medium" mb="4">
            I build things for the web
          </Text>

          <Flex justifyContent="center" alignItems="center">
            <SocialButton
              link="https://github.com/LucasPereiraMiranda"
              arialLabel="Github"
              Icon={FaGithub}
              hoverColor="#AAAAAA"
            />
            <SocialButton
              link="https://www.instagram.com/_lucaspmiranda_/"
              arialLabel="Instagram"
              Icon={FaInstagram}
              hoverColor="#E4405F"
            />
            <SocialButton
              link="https://www.linkedin.com/in/lucas-pereira-miranda-91452415b/"
              arialLabel="LinkedIn"
              Icon={FaLinkedin}
              hoverColor="#0077B5"
            />
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}
