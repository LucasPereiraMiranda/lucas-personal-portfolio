import { Flex, Link } from "@chakra-ui/react";

interface NavbarProps {
  isSidebar?: boolean;
}

export function Navbar({ isSidebar }: NavbarProps) {
  return (
    <Flex
      padding={4}
      alignItems="center"
      flexDirection={isSidebar ? "column" : "row"}
      gap={isSidebar ? 10 : 5}
      wrap={isSidebar ? "wrap" : "nowrap"}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/tech-stack">Tech Stack</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </Flex>
  );
}
