import { useState, useMemo } from "react";
import { Flex, Text, Container, Box } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {
  projects,
  getAllTechnologies,
  getProjectTypes,
  filterProjects,
} from "../../data/projects";
import { ProjectGrid } from "../ProjectGrid";
import { ProjectFilters } from "../ProjectFilters";
import { useLocale } from "@/contexts/LocaleContext";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export function Projects() {
  const { t } = useLocale();
  const [selectedTechnology, setSelectedTechnology] = useState<
    string | undefined
  >();
  const [selectedType, setSelectedType] = useState<string | undefined>();

  const technologies = useMemo(() => getAllTechnologies(), []);
  const types = useMemo(() => getProjectTypes(), []);

  const filteredProjects = useMemo(() => {
    return filterProjects(projects, selectedTechnology, selectedType);
  }, [selectedTechnology, selectedType]);

  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((project) => project.featured);
  }, [filteredProjects]);

  return (
    <Element name="projects">
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
          top="5%"
          left="-15%"
          width={{ base: "300px", md: "600px" }}
          height={{ base: "300px", md: "600px" }}
          borderRadius="full"
          bg="teal.500"
          filter="blur(150px)"
          opacity="0.08"
          pointerEvents="none"
          zIndex="-1"
        />
        <Box
          position="absolute"
          bottom="10%"
          right="-10%"
          width={{ base: "250px", md: "500px" }}
          height={{ base: "250px", md: "500px" }}
          borderRadius="full"
          bg="cyan.500"
          filter="blur(150px)"
          opacity="0.08"
          pointerEvents="none"
          zIndex="-1"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={{ base: "200px", md: "400px" }}
          height={{ base: "200px", md: "400px" }}
          borderRadius="full"
          bg="pink.500"
          filter="blur(200px)"
          opacity="0.05"
          pointerEvents="none"
          zIndex="-1"
        />

        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          {/* Header Section */}
          <MotionFlex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            mb={{ base: "8", md: "12" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MotionText
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              textAlign="center"
              as="h2"
              bgGradient="linear(to-r, teal.400, cyan.400)"
              bgClip="text"
              mb="4"
              letterSpacing="-0.02em"
            >
              {t.projects.title}
            </MotionText>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="medium"
              textAlign="center"
              opacity={0.8}
              maxW="2xl"
              lineHeight="1.6"
            >
              {t.projects.subtitle}
            </Text>
          </MotionFlex>

          {/* Filters */}
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            justify="center"
            mb="12"
          >
            <ProjectFilters
              technologies={technologies}
              types={types}
              selectedTechnology={selectedTechnology}
              selectedType={selectedType}
              onTechnologyChange={setSelectedTechnology}
              onTypeChange={setSelectedType}
            />
          </MotionFlex>

          {/* Projects Grid */}
          <ProjectGrid
            projects={filteredProjects}
            featuredProjects={featuredProjects}
          />

          {/* Results Counter */}
          <MotionFlex
            justify="center"
            mt="16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Text
              fontSize="sm"
              opacity={0.5}
              fontWeight="medium"
              bgGradient="linear(to-r, teal.400, cyan.400)"
              bgClip="text"
            >
              {t.projects.showing} {filteredProjects.length} {t.projects.of}{" "}
              {projects.length} {t.projects.projectsLabel}
            </Text>
          </MotionFlex>
        </Container>
      </Flex>
    </Element>
  );
}
