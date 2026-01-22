import { SimpleGrid, Box, Flex, Text, VStack, Icon } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Project } from "../../types/project";
import { ProjectCard } from "../ProjectCard";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface ProjectGridProps {
  projects: Project[];
  featuredProjects: Project[];
}

export function ProjectGrid({ projects, featuredProjects }: ProjectGridProps) {
  const hasFeatured = featuredProjects.length > 0;
  const regularProjects = projects.filter((p) => !p.featured);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (projects.length === 0) {
    return (
      <MotionFlex
        minH="400px"
        align="center"
        justify="center"
        flexDirection="column"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <VStack spacing="4">
          <Icon as={FaSearch} boxSize="12" opacity={0.3} />
          <Text fontSize="2xl" fontWeight="bold" opacity={0.8}>
            No projects found
          </Text>
          <Text fontSize="md" opacity={0.6} textAlign="center" maxW="md">
            Try adjusting your filters to find what you&apos;re looking for
          </Text>
        </VStack>
      </MotionFlex>
    );
  }

  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      width="100%"
    >
      {/* Featured Projects Section */}
      <AnimatePresence mode="wait">
        {hasFeatured && (
          <Box mb="16">
            <MotionFlex
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              mb="8"
              align="center"
              gap="3"
            >
              <Box
                h="4px"
                w="40px"
                bgGradient="linear(to-r, teal.400, cyan.400)"
                borderRadius="full"
              />
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                bgGradient="linear(to-r, teal.400, cyan.400)"
                bgClip="text"
              >
                Featured Projects
              </Text>
            </MotionFlex>

            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 6, md: 8 }}
            >
              {featuredProjects.map((project, index) => (
                <MotionBox key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} featured index={index} />
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </AnimatePresence>

      {/* Regular Projects Grid */}
      <AnimatePresence mode="wait">
        {regularProjects.length > 0 && (
          <Box>
            {hasFeatured && (
              <MotionFlex
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                mb="8"
                align="center"
                gap="3"
              >
                <Box
                  h="4px"
                  w="40px"
                  bgGradient="linear(to-r, cyan.400, teal.400)"
                  borderRadius="full"
                />
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  opacity={0.9}
                >
                  More Projects
                </Text>
              </MotionFlex>
            )}

            <SimpleGrid
              columns={{ base: 1, sm: 2, xl: 3 }}
              spacing={{ base: 6, md: 8 }}
            >
              {regularProjects.map((project, index) => (
                <MotionBox key={project.id} variants={itemVariants} layout>
                  <ProjectCard
                    project={project}
                    index={
                      hasFeatured ? index + featuredProjects.length : index
                    }
                  />
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </AnimatePresence>
    </MotionBox>
  );
}
