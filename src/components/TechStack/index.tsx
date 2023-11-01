import {
  Flex,
  Text,
  HStack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
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
  SiGooglecloud,
  SiAmazonaws,
  SiRedis,
  SiMysql,
  SiJira,
  SiExpress,
  SiFastify,
  SiNotion,
  SiChakraui,
  SiLinux,
  SiDebian,
  SiBitbucket,
  SiGitlab,
  SiGo,
  SiSublimetext,
  SiVim,
  SiMongodb,
  SiTrello,
  SiAsana,
} from "react-icons/si";

import { Element } from "react-scroll";

export function TechStack() {
  const baseIconColor = useColorModeValue("gray.900", "gray.100");
  return (
    <Element name="tech-stack">
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
          gap={{ base: "1rem", md: "1rem", lg: "8rem" }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize={{ base: "xl", md: "4xl" }}
              fontWeight="bold"
              textAlign="center"
              as="h2"
            >
              My tech stack
            </Text>
            <Text
              fontSize={{ base: "md", md: "2xl" }}
              fontWeight="medium"
              mb="4"
              textAlign="center"
            >
              Technologies I have been working on & studying recently
            </Text>
          </Flex>

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            gap={{ base: "2rem", md: "15rem" }}
          >
            <Flex flexDirection="column" gap={{ base: "2rem", md: "3rem" }}>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
              >
                Main Programming Languages & Platforms
              </Text>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "2rem", md: "4rem" }}
              >
                <Link
                  href="https://golang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiGo}
                    boxSize={{ base: 8, md: 12 }}
                    color="#00ADD8"
                  />
                </Link>
                <Link
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiPython}
                    boxSize={{ base: 8, md: 12 }}
                    color="#3776AB"
                  />
                </Link>
                <Link
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiNodedotjs}
                    boxSize={{ base: 8, md: 12 }}
                    color="#339933"
                  />
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiJavascript}
                    boxSize={{ base: 8, md: 12 }}
                    color="#F7DF1E"
                  />
                </Link>
                <Link
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiTypescript}
                    boxSize={{ base: 8, md: 12 }}
                    color="#007ACC"
                  />
                </Link>
              </HStack>

              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
              >
                Main Frontend Technologies
              </Text>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "2rem", md: "4rem" }}
              >
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiHtml5}
                    boxSize={{ base: 8, md: 12 }}
                    color="#E34F26"
                  />
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiCss3}
                    boxSize={{ base: 8, md: 12 }}
                    color="#1572B6"
                  />
                </Link>
                <Link
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiReact}
                    boxSize={{ base: 8, md: 12 }}
                    color="#61DAFB"
                  />
                </Link>
                <Link
                  href="https://chakra-ui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiChakraui}
                    boxSize={{ base: 8, md: 12 }}
                    color="#319795"
                  />
                </Link>
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon as={SiNextdotjs} boxSize={{ base: 8, md: 12 }} />
                </Link>
              </HStack>

              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
              >
                Main Infrastructure Technologies
              </Text>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "2rem", md: "4rem" }}
              >
                <Link
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiDocker}
                    boxSize={{ base: 8, md: 12 }}
                    color="#2496ED"
                  />
                </Link>
                <Link
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiAmazonaws}
                    boxSize={{ base: 8, md: 12 }}
                    color="#FF9900"
                  />
                </Link>
                <Link
                  href="https://cloud.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiGooglecloud}
                    boxSize={{ base: 8, md: 12 }}
                    color="#4285F4"
                  />
                </Link>
                <Link
                  href="https://www.debian.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiDebian}
                    boxSize={{ base: 8, md: 12 }}
                    color="#A81D33"
                  />
                </Link>
                <Link
                  href="https://www.linux.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiLinux}
                    boxSize={{ base: 8, md: 12 }}
                    color="#FCC624"
                  />
                </Link>
              </HStack>

              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
              >
                Data Persistence Technologies and DBMS
              </Text>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "2rem", md: "4rem" }}
              >
                <Link
                  href="https://redis.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiRedis}
                    boxSize={{ base: 8, md: 12 }}
                    color="#DC382D"
                  />
                </Link>
                <Link
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiMysql}
                    boxSize={{ base: 8, md: 12 }}
                    color="#4479A1"
                  />
                </Link>
                <Link
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiPostgresql}
                    boxSize={{ base: 8, md: 12 }}
                    color="#336791"
                  />
                </Link>
                <Link
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiMongodb}
                    boxSize={{ base: 8, md: 12 }}
                    color="#47A248"
                  />
                </Link>
              </HStack>
            </Flex>

            <Flex flexDirection="column" gap={{ base: "2rem", md: "3rem" }}>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
              >
                Backend Frameworks
              </Text>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "2rem", md: "4rem" }}
              >
                <Link
                  href="https://nestjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiNestjs}
                    boxSize={{ base: 8, md: 12 }}
                    color="#E0234E"
                  />
                </Link>
                <Link
                  href="https://www.fastify.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiFastify}
                    boxSize={{ base: 8, md: 12 }}
                    color={baseIconColor}
                  />
                </Link>
                <Link
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiExpress}
                    boxSize={{ base: 8, md: 12 }}
                    color="#007396"
                  />
                </Link>
              </HStack>

              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
              >
                Remote Cloud Repository and Git Tools
              </Text>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "2rem", md: "4rem" }}
              >
                <Link
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiGit}
                    boxSize={{ base: 8, md: 12 }}
                    color="#F05032"
                  />
                </Link>
                <Link
                  href="https://bitbucket.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiBitbucket}
                    boxSize={{ base: 8, md: 12 }}
                    color="#0052CC"
                  />
                </Link>
                <Link
                  href="https://about.gitlab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiGitlab}
                    boxSize={{ base: 8, md: 12 }}
                    color="#FC6D26"
                  />
                </Link>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiGithub}
                    boxSize={{ base: 8, md: 12 }}
                    color={baseIconColor}
                  />
                </Link>
              </HStack>

              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
              >
                Agility and Documentation
              </Text>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "2rem", md: "4rem" }}
              >
                <Link
                  href="https://www.notion.so/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiNotion}
                    boxSize={{ base: 8, md: 12 }}
                    color={baseIconColor}
                  />
                </Link>
                <Link
                  href="https://www.atlassian.com/software/jira"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiJira}
                    boxSize={{ base: 8, md: 12 }}
                    color="#0052CC"
                  />
                </Link>

                <Link
                  href="https://trello.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiTrello}
                    boxSize={{ base: 8, md: 12 }}
                    color="#0079BF"
                  />
                </Link>

                <Link
                  href="https://asana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiAsana}
                    boxSize={{ base: 8, md: 12 }}
                    color="#FF6364"
                  />
                </Link>
              </HStack>

              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
              >
                Favorite Text Editors
              </Text>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "2rem", md: "4rem" }}
              >
                <Link
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiVisualstudiocode}
                    boxSize={{ base: 8, md: 12 }}
                    color="#007ACC"
                  />
                </Link>
                <Link
                  href="https://www.sublimetext.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiSublimetext}
                    boxSize={{ base: 8, md: 12 }}
                    color="#FF9800"
                  />
                </Link>
                <Link
                  href="https://www.vim.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 1.5s",
                  }}
                >
                  <Icon
                    as={SiVim}
                    boxSize={{ base: 8, md: 12 }}
                    color="#019733"
                  />
                </Link>
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Element>
  );
}
