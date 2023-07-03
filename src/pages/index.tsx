import { Box, Flex, Heading } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Hero />
    </Flex>
  );
}
