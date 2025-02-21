import { Flex, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { ProjectSlider } from "../ProjectSlider";

export function Projects() {
  return (
    <Element name="projects">
      <Flex
        minHeight={"100vh"}
        alignItems="center"
        justifyContent="flex-start"
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
            Projects
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="medium"
            mb="4"
            textAlign="center"
            paddingBottom={{ base: 1, md: 10 }}
          >
            Some projects and studies
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width="80%"
          >
            <ProjectSlider />
          </Flex>
        </Flex>
      </Flex>
    </Element>
  );
}
