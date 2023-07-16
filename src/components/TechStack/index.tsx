import { Flex, Text, HStack, Icon, Link } from "@chakra-ui/react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
} from "react-icons/si";

export function TechStack() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={{ base: "4rem", md: "8rem" }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={{ base: "1rem", md: "1rem" }}
      >
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
        >
          My tech stack
        </Text>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          fontWeight="medium"
          mb="4"
          textAlign="center"
        >
          Technologies I have been working with recently
        </Text>
      </Flex>
      <Flex flexDirection="column" gap={{ base: "1.2rem", md: "1.8rem" }}>
        <HStack
          align="center"
          justifyContent="center"
          spacing={{ base: "2rem", md: "4rem" }}
        >
          <Link
            href="https://nestjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiNestjs} boxSize={{ base: 8, md: 12 }} color="#E0234E" />
          </Link>
          <Link
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={SiNodedotjs}
              boxSize={{ base: 8, md: 12 }}
              color="#339933"
            />
          </Link>
          <Link
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiPython} boxSize={{ base: 8, md: 12 }} color="#3776AB" />
          </Link>
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={SiTypescript}
              boxSize={{ base: 8, md: 12 }}
              color="#007ACC"
            />
          </Link>
          <Link
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={SiPostgresql}
              boxSize={{ base: 8, md: 12 }}
              color="#336791"
            />
          </Link>
          <Link
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiGit} boxSize={{ base: 8, md: 12 }} color="#F05032" />
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiGithub} boxSize={{ base: 8, md: 12 }} />
          </Link>
        </HStack>
        <HStack
          align="center"
          justifyContent="center"
          spacing={{ base: "2rem", md: "4rem" }}
        >
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiHtml5} boxSize={{ base: 8, md: 12 }} color="#E34F26" />
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={SiJavascript}
              boxSize={{ base: 8, md: 12 }}
              color="#F7DF1E"
            />
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiCss3} boxSize={{ base: 8, md: 12 }} color="#1572B6" />
          </Link>
          <Link
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiReact} boxSize={{ base: 8, md: 12 }} color="#61DAFB" />
          </Link>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiNextdotjs} boxSize={{ base: 8, md: 12 }} />
          </Link>
          <Link
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={SiVisualstudiocode}
              boxSize={{ base: 8, md: 12 }}
              color="#007ACC"
            />
          </Link>
          <Link
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={SiDocker} boxSize={{ base: 8, md: 12 }} color="#2496ED" />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
