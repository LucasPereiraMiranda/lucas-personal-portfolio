import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useLocale } from "@/contexts/LocaleContext";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  technologies?: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "ClubPetro",
    role: "Fullstack Software Engineer",
    period: "Nov 2025 - Present",
    location: "Itabira, MG",
    type: "Full Time · Remote",
    technologies: [
      "TypeScript",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Redis",
      "React",
      "Google Cloud Platform",
    ],
    current: true,
  },
  {
    id: "2",
    company: "Tegra",
    role: "Fullstack Software Engineer",
    period: "Apr 2025 - Nov 2025",
    location: "Sorocaba, SP",
    type: "Full Time · Remote",
    technologies: ["Angular", "Node.js", "TypeScript", "Azure"],
  },
  {
    id: "3",
    company: "ClubPetro",
    role: "Backend Software Developer",
    period: "Jan 2022 - Apr 2025",
    location: "Itabira, MG",
    type: "Full Time",
    technologies: [
      "TypeScript",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Google Cloud Platform",
    ],
  },
  {
    id: "4",
    company: "ClubPetro",
    role: "Intern Backend Developer",
    period: "Feb 2021 - Jan 2022",
    location: "Itabira, MG",
    type: "Intern",
    technologies: ["TypeScript", "Node.js", "Docker", "PostgreSQL", "Redis"],
  },
  {
    id: "5",
    company: "UFOP",
    role: "Computer Engineering Student",
    period: "Sep 2017 - Mar 2022",
    location: "Ouro Preto, MG",
    type: "Full Time",
    technologies: [
      "Algorithms",
      "Data Structures",
      "Software Engineering",
      "Data Science",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function ExperienceCard({
  experience,
  currentLabel,
}: {
  experience: Experience;
  currentLabel: string;
}) {
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(26, 32, 44, 0.6)"
  );
  const cardBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <MotionBox
      variants={itemVariants}
      bg={cardBg}
      backdropFilter="blur(10px)"
      borderRadius="xl"
      p={6}
      border="1px solid"
      borderColor={cardBorder}
      position="relative"
      overflow="hidden"
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(167, 139, 250, 0.5)",
      }}
      transition={{ duration: 0.2 }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        bgGradient: experience.current
          ? "linear(to-r, teal.400, cyan.400)"
          : "linear(to-r, teal.200, cyan.200)",
      }}
    >
      <VStack align="stretch" spacing={3}>
        <HStack justify="space-between" align="flex-start">
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, teal.400, cyan.400)"
            bgClip="text"
          >
            {experience.role}
          </Text>
          {experience.current && (
            <Badge
              bgGradient="linear(to-r, teal.400, cyan.400)"
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
            >
              {currentLabel}
            </Badge>
          )}
        </HStack>

        <Text fontSize="md" fontWeight="semibold" opacity={0.9}>
          {experience.company}
        </Text>

        <HStack spacing={2} fontSize="sm" opacity={0.7} flexWrap="wrap" gap={2}>
          <Text>{experience.period}</Text>
          <Text>•</Text>
          <Text>{experience.type}</Text>
          <Text>•</Text>
          <Text>{experience.location}</Text>
        </HStack>

        {experience.technologies && experience.technologies.length > 0 && (
          <HStack spacing={2} flexWrap="wrap" pt={2}>
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                bg="rgba(167, 139, 250, 0.15)"
                color="teal.300"
                px={3}
                py={1}
                borderRadius="md"
                fontSize="xs"
                border="1px solid"
                borderColor="rgba(167, 139, 250, 0.3)"
              >
                {tech}
              </Badge>
            ))}
          </HStack>
        )}
      </VStack>
    </MotionBox>
  );
}

function TimelineDot({ isCurrent }: { isCurrent?: boolean }) {
  return (
    <Box
      position="relative"
      width="16px"
      height="16px"
      borderRadius="full"
      bg={isCurrent ? "teal.400" : "cyan.400"}
      border="3px solid"
      borderColor={isCurrent ? "teal.200" : "cyan.200"}
      boxShadow={
        isCurrent
          ? "0 0 20px rgba(167, 139, 250, 0.6)"
          : "0 0 10px rgba(34, 211, 238, 0.4)"
      }
      zIndex={2}
      sx={
        isCurrent
          ? {
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": {
                  boxShadow: "0 0 20px rgba(167, 139, 250, 0.6)",
                },
                "50%": {
                  boxShadow: "0 0 30px rgba(167, 139, 250, 0.9)",
                },
              },
            }
          : {}
      }
    />
  );
}

export function ExperienceSection() {
  const timelineColor = useColorModeValue("gray.300", "gray.600");
  const { t } = useLocale();

  return (
    <Element name="about">
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py={{ base: "4rem", md: "6rem" }}
        px={{ base: "1rem", md: "2rem" }}
      >
        <MotionFlex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb={{ base: "2rem", md: "4rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="center"
            bgGradient="linear(to-r, teal.400, cyan.400)"
            bgClip="text"
            mb={2}
          >
            {t.experience.title}
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="medium"
            textAlign="center"
            opacity={0.8}
            maxW="600px"
          >
            {t.experience.subtitle}
          </Text>
        </MotionFlex>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          position="relative"
          maxW="800px"
          w="100%"
        >
          {/* Timeline Line */}
          <Box
            position="absolute"
            left={{ base: "7px", md: "50%" }}
            top="0"
            bottom="0"
            width="2px"
            bgGradient="linear(to-b, teal.400, cyan.400)"
            opacity={0.5}
            transform={{ md: "translateX(-50%)" }}
            zIndex={0}
          />

          <VStack spacing={8} align="stretch">
            {experiences.map((exp, index) => (
              <Flex
                key={exp.id}
                position="relative"
                flexDirection={{ base: "row", md: "row" }}
                align="flex-start"
              >
                {/* Timeline Dot - Mobile & Desktop Left */}
                <Box
                  display={{
                    base: "flex",
                    md: index % 2 === 0 ? "none" : "flex",
                  }}
                  position={{ base: "relative", md: "absolute" }}
                  left={{ md: "50%" }}
                  transform={{ md: "translateX(-50%)" }}
                  alignItems="flex-start"
                  pt={2}
                  mr={{ base: 4, md: 0 }}
                  zIndex={2}
                >
                  <TimelineDot isCurrent={exp.current} />
                </Box>

                {/* Left Side Card (Desktop only - even indexes) */}
                <Box
                  display={{
                    base: "none",
                    md: index % 2 === 0 ? "block" : "none",
                  }}
                  flex={1}
                  pr={8}
                >
                  <ExperienceCard
                    experience={exp}
                    currentLabel={t.experience.current}
                  />
                </Box>

                {/* Center Dot for Desktop */}
                <Box
                  display={{
                    base: "none",
                    md: index % 2 === 0 ? "flex" : "none",
                  }}
                  alignItems="flex-start"
                  pt={2}
                  zIndex={2}
                >
                  <TimelineDot isCurrent={exp.current} />
                </Box>

                {/* Right Side Card (Desktop odd indexes) / All cards on Mobile */}
                <Box
                  display={{
                    base: "block",
                    md: index % 2 === 0 ? "none" : "block",
                  }}
                  flex={1}
                  pl={{ base: 0, md: 8 }}
                >
                  <ExperienceCard
                    experience={exp}
                    currentLabel={t.experience.current}
                  />
                </Box>

                {/* Spacer for right side (Desktop even indexes) */}
                <Box
                  display={{
                    base: "none",
                    md: index % 2 === 0 ? "block" : "none",
                  }}
                  flex={1}
                />
              </Flex>
            ))}
          </VStack>
        </MotionBox>
      </Flex>
    </Element>
  );
}

export default ExperienceSection;
