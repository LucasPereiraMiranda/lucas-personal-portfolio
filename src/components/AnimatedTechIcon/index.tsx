import { Box, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const MotionBox = motion(Box);

interface AnimatedTechIconProps {
  href: string;
  icon: IconType;
  color?: string;
  delay?: number;
  useBaseColor?: boolean;
}

export function AnimatedTechIcon({
  href,
  icon,
  color,
  delay = 0,
  useBaseColor = false,
}: AnimatedTechIconProps) {
  const baseIconColor = useColorModeValue("gray.900", "gray.100");
  const iconColor = useBaseColor ? baseIconColor : color;
  const glowColor = color || "#805AD5";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      _hover={{ textDecoration: "none" }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.2,
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        position="relative"
        p={3}
        borderRadius="xl"
        bg="whiteAlpha.50"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor="whiteAlpha.100"
        cursor="pointer"
        _hover={{
          bg: "whiteAlpha.100",
          borderColor: "whiteAlpha.200",
          boxShadow: `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}20`,
        }}
        sx={{
          transition: "all 0.3s ease",
        }}
      >
        <Icon as={icon} boxSize={{ base: 8, md: 12 }} color={iconColor} />
      </MotionBox>
    </Link>
  );
}
