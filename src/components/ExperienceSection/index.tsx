import React from 'react';
import {  Box, Center, VStack, Text, Heading } from '@chakra-ui/react';


function ExperienceSection()  {
    return (
        <Center h="100vh">
          <Box p={4} textAlign="center">
            <Heading as="h1" fontSize="3xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg">
              The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels, and other components and export it as a set of static files: HTML/CSS/JS.
            </Text>
            <VStack align="start" spacing={8} mt={8}>
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  Backend Mid Software Developer
                </Text>
                <Text fontSize="lg">
                  Full Time
                </Text>
                <Text fontSize="lg">
                  ClubPetro Tecnologia de Dados, Brasil
                </Text>
                <Text fontSize="lg">
                  Jan 2022 - atual
                </Text>
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  Intern Backend Developer
                </Text>
                <Text fontSize="lg">
                  Intern Time
                </Text>
                <Text fontSize="lg">
                  ClubPetro Tecnologia de Dados, Brasil
                </Text>
                <Text fontSize="lg">
                  Mar 2021 - Jan 2022
                </Text>
              </Box>
            </VStack>
          </Box>
        </Center>
    );
  }
export default ExperienceSection;