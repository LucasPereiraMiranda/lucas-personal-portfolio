import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialButton } from "../SocialButton";

const MotionStack = motion(Stack);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);

export function Hero() {
  return (
    <Flex align="center" justify="center" flexDirection="column">
      <MotionStack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        spacing={{ base: 8, md: 16 }}
        marginTop={{ base: "0rem", md: "8rem" }}
        gap={{ base: "5rem", md: "10rem" }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MotionFlex
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <MotionImage
            src="https://github.com/LucasPereiraMiranda.png"
            alt="Lucas' profile picture"
            boxSize="250px"
            borderRadius="full"
            mr="4"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.5)"
          />
        </MotionFlex>
        <MotionFlex
          direction="column"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb="2">
            Hi there! 👋
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="2">
            I'm{" "}
            <Text as="span" textStyle={"bordedGradientText"}>
              Lucas
            </Text>
          </Text>
          <Text fontSize={{ base: "xl", md: "xl" }} fontWeight="medium" mb="4">
            Creating software experiences with passion
          </Text>

          <MotionFlex justifyContent="center" alignItems="center">
            <SocialButton
              link="https://github.com/LucasPereiraMiranda"
              arialLabel="Github"
              Icon={FaGithub}
              hoverColor="#718096"
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
          </MotionFlex>
        </MotionFlex>
      </MotionStack>
    </Flex>
  );
}
