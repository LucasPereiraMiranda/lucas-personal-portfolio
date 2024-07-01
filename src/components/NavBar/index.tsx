import { Flex, Link, useColorModeValue, chakra } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
interface NavbarProps {
  isSidebar?: boolean;
}

export function Navbar({ isSidebar }: NavbarProps) {
  const defaultColor = useColorModeValue("gray.900", "gray.100");
  const hoverColor = useColorModeValue("cyan.800", "cyan.300");
  return (
    <Flex
      padding={4}
      alignItems="center"
      flexDirection={isSidebar ? "column" : "row"}
      gap={isSidebar ? 10 : 5}
      wrap={isSidebar ? "wrap" : "nowrap"}
    >
      <chakra.a
        as={ScrollLink}
        to="home"
        spy
        smooth
        duration={700}
        offset={-70}
        color={defaultColor}
        _hover={{
          color: hoverColor,
          cursor: "pointer",
        }}
      >
        Home
      </chakra.a>

      <chakra.a
        as={ScrollLink}
        to="tech-stack"
        spy
        smooth
        duration={700}
        offset={-70}
        color={defaultColor}
        _hover={{
          color: hoverColor,
          cursor: "pointer",
          transition: "color 0.1s ease-in-out",
        }}
      >
        Tech Stack
      </chakra.a>

      <chakra.a
        as={ScrollLink}
        to="about"
        spy
        smooth
        duration={700}
        offset={-70}
        color={defaultColor}
        _hover={{
          color: hoverColor,
          cursor: "pointer",
          transition: "color 0.1s ease-in-out",
        }}
      >
        About
      </chakra.a>

      <chakra.a
        as={ScrollLink}
        to="projects"
        spy
        smooth
        duration={700}
        offset={-70}
        color={defaultColor}
        _hover={{
          color: hoverColor,
          cursor: "pointer",
          transition: "color 0.1s ease-in-out",
        }}
      >
        Projects
      </chakra.a>

      <Link href="/contact">Contact</Link>
      {/* <Link to="about" spy smooth duration={700} offset={-70}>
        About
      </Link>
      <Link>Projects</Link>
      <Link to="projects" spy smooth duration={700} offset={-70}>
        Contact
      </Link> */}
    </Flex>
  );
}
