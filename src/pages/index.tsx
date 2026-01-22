import { Flex, Box } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { TechStack } from "@/components/TechStack";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <Element name="home">
      <Box position="relative" minHeight="100vh">
        <ScrollProgress />
        <ParticleBackground />
        <Flex
          flexDirection="column"
          minHeight="100vh"
          position="relative"
          zIndex={1}
        >
          <Header />
          <Hero />
          <TechStack />
          <ExperienceSection />
          <Projects />
          <Contact />
          <Footer />
        </Flex>
      </Box>
    </Element>
  );
}
