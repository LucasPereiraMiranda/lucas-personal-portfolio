import { Flex, Text, Link, Icon, Tooltip } from "@chakra-ui/react";
import { Element } from "react-scroll";
import ContactForm from "../Form";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export function Contact() {
  return (
    <Element name="contact">
      <Flex
        minHeight={"100vh"}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={{ base: "4rem", md: "2.5rem" }}
        mb={{ base: "4rem", md: "8rem" }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          textAlign="center"
          mb="6"
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="center"
            as="h2"
          >
            Contact Me
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="medium"
            mt="2"
            textAlign="center"
          >
            Feel free to get in touch with me via the form below or through my social channels.
          </Text>
        </Flex>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-around"
          width="100%"
          maxWidth="800px"
          px={{ base: "2", md: "0" }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            maxW="400px"
            mb={{ base: "4", md: "0" }}
          >
            <ContactForm />
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            maxW="400px"
          >
            <Text fontSize="lg" mb="2" fontWeight="bold">
              Connect with Me:
            </Text>
            <Flex justifyContent="center">
              <Tooltip label="GitHub" aria-label="GitHub">
                <Link href="https://github.com/LucasPereiraMiranda" isExternal mx="2">
                  <Icon as={FaGithub} boxSize="36px" />
                </Link>
              </Tooltip>
              <Tooltip label="LinkedIn" aria-label="LinkedIn">
                <Link href="https://www.linkedin.com/in/lucaspereiramiranda/" isExternal mx="2">
                  <Icon as={FaLinkedin} boxSize="36px" />
                </Link>
              </Tooltip>
              <Tooltip label="Instagram" aria-label="Instagram">
                <Link href="https://www.instagram.com/_lucaspmiranda_/" isExternal mx="2">
                  <Icon as={FaInstagram} boxSize="36px" />
                </Link>
              </Tooltip>
              <Tooltip label="Email" aria-label="Email">
                <Link href="mailto:lucas.pereira.miranda01@gmail.com" isExternal mx="2">
                  <Icon as={FaEnvelope} boxSize="36px" />
                </Link>
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Element>
  );
}