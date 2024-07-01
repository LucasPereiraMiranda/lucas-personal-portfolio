import { Flex } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { TechStack } from "../components/TechStack";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <Element name="home">
      <Flex flexDirection="column" minHeight="100vh">
        <Header />
        <Hero />
        <TechStack />
        <ExperienceSection />
        <Projects />
      </Flex>
    </Element>
  );
}
