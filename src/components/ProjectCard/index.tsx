import {
  Box,
  Flex,
  Text,
  Image,
  Tag,
  HStack,
  VStack,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBook, FaNpm } from "react-icons/fa";
import { useState } from "react";
import { Project } from "../../types/project";
import { SocialButton } from "../SocialButton";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export function ProjectCard({
  project,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Color mode values
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(26, 32, 44, 0.6)"
  );
  const cardBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );
  const glowColor = useColorModeValue(
    "rgba(128, 90, 213, 0.3)",
    "rgba(0, 217, 255, 0.2)"
  );
  const tagBg = useColorModeValue(
    "rgba(128, 90, 213, 0.15)",
    "rgba(0, 217, 255, 0.15)"
  );
  const tagColor = useColorModeValue("purple.600", "cyan.300");

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const getIconForLinkType = (type: string) => {
    switch (type) {
      case "github":
        return FaGithub;
      case "demo":
      case "website":
        return FaExternalLinkAlt;
      case "docs":
        return FaBook;
      case "npm":
        return FaNpm;
      default:
        return FaExternalLinkAlt;
    }
  };

  const getHoverColorForLinkType = (type: string) => {
    switch (type) {
      case "github":
        return "#718096";
      case "npm":
        return "#CB3837";
      default:
        return "purple.400";
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "active":
        return "green";
      case "in-progress":
        return "blue";
      case "archived":
        return "gray";
      default:
        return "gray";
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      web: "Web App",
      cli: "CLI Tool",
      mobile: "Mobile",
      library: "Library",
      api: "API",
      devops: "DevOps",
    };
    return labels[type] || type;
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      height="100%"
    >
      <MotionFlex
        flexDirection="column"
        bg={cardBg}
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor={cardBorder}
        borderRadius="24px"
        overflow="hidden"
        height="100%"
        position="relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          boxShadow: `0 20px 60px 0 ${glowColor}, 0 0 40px rgba(128, 90, 213, 0.2)`,
        }}
        transition={{ duration: 0.3 }}
        cursor="pointer"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
      >
        {/* Featured Badge */}
        {featured && (
          <Badge
            position="absolute"
            top="4"
            right="4"
            zIndex="2"
            bgGradient="linear(to-r, purple.500, cyan.500)"
            color="white"
            px="3"
            py="1"
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            boxShadow="0 4px 12px rgba(128, 90, 213, 0.4)"
          >
            Featured
          </Badge>
        )}

        {/* Status Badge */}
        {project.status && (
          <Badge
            position="absolute"
            top="4"
            left="4"
            zIndex="2"
            colorScheme={getStatusColor(project.status)}
            px="2"
            py="1"
            borderRadius="full"
            fontSize="xs"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {project.status}
          </Badge>
        )}

        {/* Image Container */}
        <Box
          position="relative"
          width="100%"
          height={featured ? "280px" : "200px"}
          overflow="hidden"
        >
          <MotionBox
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            height="100%"
          >
            <Image
              src={project.image}
              alt={project.name}
              width="100%"
              height="100%"
              objectFit="cover"
              loading="lazy"
            />
          </MotionBox>

          {/* Gradient Overlay */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="60%"
            bgGradient="linear(to-t, rgba(0,0,0,0.9), transparent)"
            pointerEvents="none"
          />

          {/* Type Badge on Image */}
          <Badge
            position="absolute"
            bottom="4"
            left="4"
            colorScheme="purple"
            variant="solid"
            px="3"
            py="1"
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {getTypeLabel(project.type)}
          </Badge>
        </Box>

        {/* Content */}
        <VStack align="stretch" p="6" spacing="4" flex="1">
          {/* Title */}
          <Text
            fontSize={featured ? "2xl" : "xl"}
            fontWeight="bold"
            bgGradient="linear(to-r, purple.400, cyan.400)"
            bgClip="text"
            lineHeight="1.2"
          >
            {project.name}
          </Text>

          {/* Description */}
          <Text
            fontSize="md"
            opacity={0.9}
            flex="1"
            noOfLines={featured ? 4 : 3}
            lineHeight="1.6"
          >
            {project.description}
          </Text>

          {/* Technologies */}
          <HStack spacing="2" flexWrap="wrap" gap="2">
            {project.technologies
              .slice(0, featured ? 5 : 3)
              .map((tech) => (
                <Tag
                  key={tech}
                  size="sm"
                  bg={tagBg}
                  color={tagColor}
                  borderRadius="full"
                  fontWeight="medium"
                  fontSize="xs"
                  px="3"
                  py="1"
                >
                  {tech}
                </Tag>
              ))}
            {project.technologies.length > (featured ? 5 : 3) && (
              <Tag
                size="sm"
                bg={tagBg}
                color={tagColor}
                borderRadius="full"
                fontWeight="medium"
                fontSize="xs"
                px="3"
                py="1"
              >
                +{project.technologies.length - (featured ? 5 : 3)}
              </Tag>
            )}
          </HStack>

          {/* Footer: Links and Year */}
          <HStack justify="space-between" align="center" pt="2">
            <HStack spacing="3">
              {project.links.map((link, idx) => (
                <SocialButton
                  key={idx}
                  link={link.url}
                  arialLabel={link.label || link.type}
                  Icon={getIconForLinkType(link.type)}
                  hoverColor={getHoverColorForLinkType(link.type)}
                />
              ))}
            </HStack>

            {project.year && (
              <Text fontSize="sm" opacity={0.6} fontWeight="medium">
                {project.year}
              </Text>
            )}
          </HStack>
        </VStack>
      </MotionFlex>
    </MotionBox>
  );
}
