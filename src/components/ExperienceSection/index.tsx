import React from "react";
import { Flex, Text, Divider } from "@chakra-ui/react";
import { Element } from "react-scroll";

export function ExperienceSection() {
  return (
    <Element name="about">
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
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="center"
            as="h2"
          >
            About Me
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="medium"
            mb="4"
            textAlign="center"
          >
            A little more about my career
          </Text>
        </Flex>

        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex
            width={{ base: "100%", md: "50%" }}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            px={{ base: "4", md: "0" }}
          >
            <Text
              textAlign="center"
              fontSize={{ base: "unset", md: "2xl" }}
              lineHeight="taller"
              marginLeft={{ base: "0", md: "10rem" }}
              paddingRight={{ base: "0", md: "10rem" }}
            >
              I&apos;m a software developer with a specialization in building
              data analysis pipelines and web systems. I have expertise in
              programming languages, database modeling, and IT infrastructure. I
              thrive on tackling challenges and am dedicated to creating
              effective, scalable solutions.
            </Text>
          </Flex>

          <Flex
            width={{ base: "100%", md: "50%" }}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            px={{ base: "4", md: "0" }}
          >
            <Flex
              alignItems="center"
              flexDirection="column"
              justifyContent="space-between"
              mt={8}
              gap={4}
              width="100%"
            >
              <Flex alignItems="center" flexDirection="column">
                <Text fontSize="lg" fontWeight="bold">
                  Backend Software Developer
                </Text>
                <Text fontSize="lg">ClubPetro Tecnologia de Dados, Brazil</Text>
              </Flex>
              <Flex alignItems="center" flexDirection="column">
                <Text fontSize="lg">Full Time</Text>
                <Text fontSize="lg">Jan 2022 - Jan 2025</Text>
              </Flex>

              <Divider
                orientation="horizontal"
                borderColor="gray.500"
                my={4}
                w="100%"
              />

              <Flex alignItems="center" flexDirection="column">
                <Text fontSize="lg" fontWeight="bold">
                  Intern Backend Developer
                </Text>
                <Text fontSize="lg">ClubPetro Tecnologia de Dados, Brazil</Text>
              </Flex>
              <Flex alignItems="center" flexDirection="column">
                <Text fontSize="lg">Intern Time</Text>
                <Text fontSize="lg">Feb 2021 - Jan 2022</Text>
              </Flex>

              <Divider
                orientation="horizontal"
                borderColor="gray.500"
                my={4}
                w="100%"
              />

              <Flex alignItems="center" flexDirection="column">
                <Text fontSize="lg" fontWeight="bold">
                  University Student
                </Text>
                <Text fontSize="lg">
                  Federal University of Ouro Preto (UFOP), Brazil
                </Text>
              </Flex>
              <Flex alignItems="center" flexDirection="column">
                <Text fontSize="lg">Full Time</Text>
                <Text fontSize="lg">Sep 2017 - Mar 2022</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Element>
  );
}

export default ExperienceSection;
