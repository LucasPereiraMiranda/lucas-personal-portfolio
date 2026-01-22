"use client";

import { useEffect, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion, useSpring, useScroll } from "framer-motion";

const MotionBox = motion(Box);

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const gradientStart = useColorModeValue("#805AD5", "#00D9FF");
  const gradientEnd = useColorModeValue("#00D9FF", "#805AD5");
  const glowColor = useColorModeValue(
    "rgba(128, 90, 213, 0.5)",
    "rgba(0, 217, 255, 0.5)"
  );

  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="4px"
      zIndex={1000}
      transformOrigin="0%"
      style={{ scaleX }}
      bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
      boxShadow={`0 0 10px ${glowColor}, 0 0 20px ${glowColor}`}
      borderRadius="0 2px 2px 0"
    />
  );
}
