import {
  Flex,
  Text,
  Container,
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  HStack,
  Link,
  Icon,
  useToast,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: false,
  });

  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(26, 32, 44, 0.6)"
  );
  const cardBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation error",
        description: "Please fill in all fields correctly.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio] ${formData.subject}`,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: "", email: "", subject: "", message: "" });

        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });

        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setStatus({ loading: false, success: false, error: true });

      toast({
        title: "Error sending message",
        description:
          "An error occurred. Please try again or contact me directly via email.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: false }));
      }, 3000);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/LucasPereiraMiranda",
      icon: FaGithub,
      color: "gray.400",
      hoverColor: "white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/lucas-pereira-miranda",
      icon: FaLinkedin,
      color: "blue.400",
      hoverColor: "blue.300",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_lucaspmiranda_/",
      icon: FaInstagram,
      color: "pink.400",
      hoverColor: "pink.300",
    },
    {
      name: "Email",
      url: "mailto:lucas.pereira.miranda01@gmail.com",
      icon: FaEnvelope,
      color: "purple.400",
      hoverColor: "purple.300",
    },
  ];

  return (
    <Element name="contact">
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py={{ base: "4rem", md: "8rem" }}
        position="relative"
        overflow="hidden"
      >
        {/* Background decorations */}
        <Box
          position="absolute"
          top="10%"
          right="-15%"
          width={{ base: "300px", md: "500px" }}
          height={{ base: "300px", md: "500px" }}
          borderRadius="full"
          bg="purple.500"
          filter="blur(150px)"
          opacity="0.08"
          pointerEvents="none"
          zIndex="-1"
        />
        <Box
          position="absolute"
          bottom="10%"
          left="-10%"
          width={{ base: "250px", md: "450px" }}
          height={{ base: "250px", md: "450px" }}
          borderRadius="full"
          bg="cyan.500"
          filter="blur(150px)"
          opacity="0.08"
          pointerEvents="none"
          zIndex="-1"
        />

        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          {/* Header */}
          <MotionFlex
            flexDirection="column"
            alignItems="center"
            mb={{ base: "3rem", md: "4rem" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              as="h2"
              bgGradient="linear(to-r, purple.400, cyan.400)"
              bgClip="text"
              mb="4"
              textAlign="center"
            >
              Get In Touch
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.400"
              maxW="600px"
              textAlign="center"
            >
              Feel free to reach out for tech discussions, collaborations, or
              just to connect.
            </Text>
          </MotionFlex>

          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 6, md: 8 }}
            maxW="1100px"
            mx="auto"
          >
            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              bg={cardBg}
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor={cardBorder}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                bgGradient: "linear(to-r, purple.400, cyan.400)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <VStack spacing={5}>
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel color="gray.300" fontSize="sm">
                      Name
                    </FormLabel>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Your name"
                      bg="rgba(0, 0, 0, 0.2)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{ borderColor: "whiteAlpha.300" }}
                      _focus={{
                        borderColor: "cyan.400",
                        boxShadow: "0 0 0 1px var(--chakra-colors-cyan-400)",
                      }}
                      _placeholder={{ color: "gray.500" }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel color="gray.300" fontSize="sm">
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your.email@example.com"
                      bg="rgba(0, 0, 0, 0.2)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{ borderColor: "whiteAlpha.300" }}
                      _focus={{
                        borderColor: "cyan.400",
                        boxShadow: "0 0 0 1px var(--chakra-colors-cyan-400)",
                      }}
                      _placeholder={{ color: "gray.500" }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.subject}>
                    <FormLabel color="gray.300" fontSize="sm">
                      Subject
                    </FormLabel>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder="What would you like to talk about?"
                      bg="rgba(0, 0, 0, 0.2)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{ borderColor: "whiteAlpha.300" }}
                      _focus={{
                        borderColor: "cyan.400",
                        boxShadow: "0 0 0 1px var(--chakra-colors-cyan-400)",
                      }}
                      _placeholder={{ color: "gray.500" }}
                    />
                    <FormErrorMessage>{errors.subject}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.message}>
                    <FormLabel color="gray.300" fontSize="sm">
                      Message
                    </FormLabel>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Your message..."
                      rows={5}
                      bg="rgba(0, 0, 0, 0.2)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{ borderColor: "whiteAlpha.300" }}
                      _focus={{
                        borderColor: "cyan.400",
                        boxShadow: "0 0 0 1px var(--chakra-colors-cyan-400)",
                      }}
                      _placeholder={{ color: "gray.500" }}
                      resize="vertical"
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <MotionButton
                    type="submit"
                    size="lg"
                    w="100%"
                    bgGradient="linear(to-r, purple.500, cyan.500)"
                    color="white"
                    _hover={{
                      bgGradient: "linear(to-r, purple.600, cyan.600)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(0, 217, 255, 0.3)",
                    }}
                    _active={{ transform: "translateY(0)" }}
                    isLoading={status.loading}
                    loadingText="Sending..."
                    rightIcon={<Icon as={FaPaperPlane} />}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status.success ? "Sent!" : "Send Message"}
                  </MotionButton>

                  <AnimatePresence>
                    {status.success && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{ width: "100%" }}
                      >
                        <Box
                          bg="green.500"
                          color="white"
                          p={3}
                          borderRadius="md"
                          textAlign="center"
                          fontSize="sm"
                        >
                          Message sent successfully!
                        </Box>
                      </motion.div>
                    )}

                    {status.error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{ width: "100%" }}
                      >
                        <Box
                          bg="red.500"
                          color="white"
                          p={3}
                          borderRadius="md"
                          textAlign="center"
                          fontSize="sm"
                        >
                          Error sending. Please try again.
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </VStack>
              </form>
            </MotionBox>

            {/* Contact Info */}
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <VStack spacing={6} h="100%">
                {/* Info Card */}
                <Box
                  bg={cardBg}
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  p={{ base: 6, md: 8 }}
                  w="100%"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    mb={6}
                    bgGradient="linear(to-r, purple.400, cyan.400)"
                    bgClip="text"
                  >
                    Information
                  </Text>

                  <VStack align="start" spacing={5}>
                    <Box>
                      <Text color="gray.400" fontSize="sm" mb={1}>
                        Email
                      </Text>
                      <Link
                        href="mailto:lucas.pereira.miranda01@gmail.com"
                        color="cyan.400"
                        fontSize="md"
                        _hover={{ color: "cyan.300" }}
                      >
                        lucas.pereira.miranda01@gmail.com
                      </Link>
                    </Box>

                    <Box>
                      <Text color="gray.400" fontSize="sm" mb={1}>
                        Location
                      </Text>
                      <Text color="cyan.400" fontSize="md">
                        Brazil
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                {/* Social Links */}
                <Box
                  bg={cardBg}
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  p={{ base: 6, md: 8 }}
                  w="100%"
                  flex={1}
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    mb={6}
                    bgGradient="linear(to-r, purple.400, cyan.400)"
                    bgClip="text"
                  >
                    Social Media
                  </Text>

                  <VStack spacing={4}>
                    {socialLinks.map((social, index) => (
                      <MotionBox
                        key={social.name}
                        w="100%"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      >
                        <Link
                          href={social.url}
                          isExternal
                          _hover={{ textDecoration: "none" }}
                        >
                          <HStack
                            p={4}
                            borderRadius="xl"
                            bg="rgba(0, 0, 0, 0.2)"
                            border="1px solid"
                            borderColor="whiteAlpha.100"
                            transition="all 0.3s"
                            _hover={{
                              borderColor: social.color,
                              transform: "translateX(8px)",
                              bg: "rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <Icon
                              as={social.icon}
                              boxSize={6}
                              color={social.color}
                            />
                            <Text color="white" fontWeight="medium">
                              {social.name}
                            </Text>
                          </HStack>
                        </Link>
                      </MotionBox>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>
          </Grid>
        </Container>
      </Flex>
    </Element>
  );
}
