import { Flex, Text, HStack, Box, useColorModeValue } from "@chakra-ui/react";
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
  SiKubernetes,
  SiAngular,
  SiMicrosoftazure,
} from "react-icons/si";

import { Element } from "react-scroll";
import { AnimatedTechIcon } from "../AnimatedTechIcon";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <MotionText
    display="flex"
    alignItems="center"
    justifyContent="center"
    fontSize={{ base: "md", md: "xl" }}
    fontWeight="medium"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    position="relative"
    _after={{
      content: '""',
      position: "absolute",
      bottom: "-4px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "40px",
      height: "2px",
      bgGradient: "linear(to-r, purple.400, cyan.400)",
      borderRadius: "full",
    }}
    pb={2}
  >
    {children}
  </MotionText>
);

export function TechStack() {
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
          <MotionFlex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MotionText
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign="center"
              as="h2"
              bgGradient="linear(to-r, purple.400, cyan.400)"
              bgClip="text"
            >
              My tech stack
            </MotionText>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="medium"
              mb="4"
              textAlign="center"
              opacity={0.9}
            >
              Technologies I have been working on & studying recently
            </Text>
          </MotionFlex>

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            gap={{ base: "2rem", md: "15rem" }}
          >
            <Flex flexDirection="column" gap={{ base: "2rem", md: "3rem" }}>
              <SectionTitle>
                Main Programming Languages & Platforms
              </SectionTitle>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "1rem", md: "2rem" }}
                flexWrap="wrap"
              >
                <AnimatedTechIcon
                  href="https://golang.org/"
                  icon={SiGo}
                  color="#00ADD8"
                  delay={0}
                />
                <AnimatedTechIcon
                  href="https://www.python.org/"
                  icon={SiPython}
                  color="#3776AB"
                  delay={0.1}
                />
                <AnimatedTechIcon
                  href="https://nodejs.org/"
                  icon={SiNodedotjs}
                  color="#339933"
                  delay={0.2}
                />
                <AnimatedTechIcon
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  icon={SiJavascript}
                  color="#F7DF1E"
                  delay={0.3}
                />
                <AnimatedTechIcon
                  href="https://www.typescriptlang.org/"
                  icon={SiTypescript}
                  color="#007ACC"
                  delay={0.4}
                />
              </HStack>

              <SectionTitle>Main Frontend Technologies</SectionTitle>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "1rem", md: "2rem" }}
                flexWrap="wrap"
              >
                <AnimatedTechIcon
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  icon={SiHtml5}
                  color="#E34F26"
                  delay={0}
                />
                <AnimatedTechIcon
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  icon={SiCss3}
                  color="#1572B6"
                  delay={0.1}
                />
                <AnimatedTechIcon
                  href="https://reactjs.org/"
                  icon={SiReact}
                  color="#61DAFB"
                  delay={0.2}
                />
                <AnimatedTechIcon
                  href="https://chakra-ui.com/"
                  icon={SiChakraui}
                  color="#319795"
                  delay={0.3}
                />
                <AnimatedTechIcon
                  href="https://nextjs.org/"
                  icon={SiNextdotjs}
                  useBaseColor
                  delay={0.4}
                />
                <AnimatedTechIcon
                  href="https://angular.io/"
                  icon={SiAngular}
                  color="#DD0031"
                  delay={0.5}
                />
              </HStack>

              <SectionTitle>Main Infrastructure Technologies</SectionTitle>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "1rem", md: "2rem" }}
                flexWrap="wrap"
              >
                <AnimatedTechIcon
                  href="https://www.docker.com/"
                  icon={SiDocker}
                  color="#2496ED"
                  delay={0}
                />
                <AnimatedTechIcon
                  href="https://aws.amazon.com/"
                  icon={SiAmazonaws}
                  color="#FF9900"
                  delay={0.1}
                />
                <AnimatedTechIcon
                  href="https://cloud.google.com/"
                  icon={SiGooglecloud}
                  color="#4285F4"
                  delay={0.2}
                />
                <AnimatedTechIcon
                  href="https://www.debian.org/"
                  icon={SiDebian}
                  color="#A81D33"
                  delay={0.3}
                />
                <AnimatedTechIcon
                  href="https://www.linux.org/"
                  icon={SiLinux}
                  color="#FCC624"
                  delay={0.4}
                />
                <AnimatedTechIcon
                  href="https://kubernetes.io/"
                  icon={SiKubernetes}
                  color="#326CE5"
                  delay={0.5}
                />
                <AnimatedTechIcon
                  href="https://azure.microsoft.com/"
                  icon={SiMicrosoftazure}
                  color="#0078D4"
                  delay={0.6}
                />
              </HStack>

              <SectionTitle>
                Data Persistence Technologies and DBMS
              </SectionTitle>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "1rem", md: "2rem" }}
                flexWrap="wrap"
              >
                <AnimatedTechIcon
                  href="https://redis.io/"
                  icon={SiRedis}
                  color="#DC382D"
                  delay={0}
                />
                <AnimatedTechIcon
                  href="https://www.mysql.com/"
                  icon={SiMysql}
                  color="#4479A1"
                  delay={0.1}
                />
                <AnimatedTechIcon
                  href="https://www.postgresql.org/"
                  icon={SiPostgresql}
                  color="#336791"
                  delay={0.2}
                />
                <AnimatedTechIcon
                  href="https://www.mongodb.com/"
                  icon={SiMongodb}
                  color="#47A248"
                  delay={0.3}
                />
              </HStack>
            </Flex>

            <Flex flexDirection="column" gap={{ base: "2rem", md: "3rem" }}>
              <SectionTitle>Backend Frameworks</SectionTitle>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "1rem", md: "2rem" }}
                flexWrap="wrap"
              >
                <AnimatedTechIcon
                  href="https://nestjs.com/"
                  icon={SiNestjs}
                  color="#E0234E"
                  delay={0}
                />
                <AnimatedTechIcon
                  href="https://www.fastify.io/"
                  icon={SiFastify}
                  useBaseColor
                  delay={0.1}
                />
                <AnimatedTechIcon
                  href="https://expressjs.com/"
                  icon={SiExpress}
                  color="#007396"
                  delay={0.2}
                />
              </HStack>

              <SectionTitle>Remote Cloud Repository and Git Tools</SectionTitle>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "1rem", md: "2rem" }}
                flexWrap="wrap"
              >
                <AnimatedTechIcon
                  href="https://git-scm.com/"
                  icon={SiGit}
                  color="#F05032"
                  delay={0}
                />
                <AnimatedTechIcon
                  href="https://bitbucket.org/"
                  icon={SiBitbucket}
                  color="#0052CC"
                  delay={0.1}
                />
                <AnimatedTechIcon
                  href="https://about.gitlab.com/"
                  icon={SiGitlab}
                  color="#FC6D26"
                  delay={0.2}
                />
                <AnimatedTechIcon
                  href="https://github.com/"
                  icon={SiGithub}
                  useBaseColor
                  delay={0.3}
                />
              </HStack>

              <SectionTitle>Agility and Documentation</SectionTitle>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "1rem", md: "2rem" }}
                flexWrap="wrap"
              >
                <AnimatedTechIcon
                  href="https://www.notion.so/"
                  icon={SiNotion}
                  useBaseColor
                  delay={0}
                />
                <AnimatedTechIcon
                  href="https://www.atlassian.com/software/jira"
                  icon={SiJira}
                  color="#0052CC"
                  delay={0.1}
                />
                <AnimatedTechIcon
                  href="https://trello.com/"
                  icon={SiTrello}
                  color="#0079BF"
                  delay={0.2}
                />
                <AnimatedTechIcon
                  href="https://asana.com/"
                  icon={SiAsana}
                  color="#FF6364"
                  delay={0.3}
                />
              </HStack>

              <SectionTitle>Favorite Text Editors</SectionTitle>
              <HStack
                align="center"
                justifyContent="center"
                spacing={{ base: "1rem", md: "2rem" }}
                flexWrap="wrap"
              >
                <AnimatedTechIcon
                  href="https://code.visualstudio.com/"
                  icon={SiVisualstudiocode}
                  color="#007ACC"
                  delay={0}
                />
                <AnimatedTechIcon
                  href="https://www.sublimetext.com/"
                  icon={SiSublimetext}
                  color="#FF9800"
                  delay={0.1}
                />
                <AnimatedTechIcon
                  href="https://www.vim.org/"
                  icon={SiVim}
                  color="#019733"
                  delay={0.2}
                />
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Element>
  );
}
