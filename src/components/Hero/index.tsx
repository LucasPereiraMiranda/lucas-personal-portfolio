import { Flex, Image, Stack, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { SocialButton } from "../SocialButton";

const MotionStack = motion(Stack);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export function Hero() {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "flex-start" }}
      flexDirection="column"
      style={{ height: "100vh" }}
      position="relative"
    >
      <MotionStack
        direction="column"
        textAlign="center"
        marginTop={{ base: "5rem", md: "1rem" }}
        gap={{ base: "5rem", md: "6rem" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MotionFlex
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <MotionBox
            position="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              position="absolute"
              top="-4px"
              left="-4px"
              right="-4px"
              bottom="-4px"
              borderRadius="full"
              bgGradient="linear(to-r, purple.500, cyan.500, purple.500)"
              backgroundSize="200% 200%"
              animation="gradientShift 3s ease infinite"
              filter="blur(8px)"
              opacity={0.7}
              sx={{
                "@keyframes gradientShift": {
                  "0%": { backgroundPosition: "0% 50%" },
                  "50%": { backgroundPosition: "100% 50%" },
                  "100%": { backgroundPosition: "0% 50%" },
                },
              }}
            />
            <MotionImage
              src="https://github.com/LucasPereiraMiranda.png"
              alt="Lucas' profile picture"
              boxSize="16rem"
              borderRadius="full"
              position="relative"
              zIndex={1}
              border="4px solid"
              borderColor="whiteAlpha.300"
              boxShadow="0 0 30px rgba(128, 90, 213, 0.4), 0 0 60px rgba(0, 217, 255, 0.2)"
            />
          </MotionBox>
        </MotionFlex>
        <MotionFlex
          direction="column"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb="2">
            Hi there!{" "}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -20, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              style={{ display: "inline-block" }}
            >
              👋
            </motion.span>
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="2">
            I&apos;m{" "}
            <Text
              as="span"
              textStyle="bordedGradientText"
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              Lucas
            </Text>
          </Text>
          <Box
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="medium"
            mb="4"
            minHeight={{ base: "60px", md: "40px" }}
          >
            <TypeAnimation
              sequence={[
                "Crafting Digital Experiences",
                2000,
                "Transforming Ideas into Reality",
                2000,
                "Building Scalable Solutions",
                2000,
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{
                display: "inline-block",
                background: "linear-gradient(to right, #805AD5, #00D9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
          </Box>

          <MotionFlex
            justifyContent="center"
            alignItems="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
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
