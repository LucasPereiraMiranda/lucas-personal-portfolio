// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MotionBox = motion(Box);

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const primaryColor = useColorModeValue(
    "rgba(128, 90, 213, 0.8)",
    "rgba(0, 217, 255, 0.8)"
  );
  const secondaryColor = useColorModeValue(
    "rgba(0, 217, 255, 0.4)",
    "rgba(128, 90, 213, 0.4)"
  );

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = Boolean(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.style.cursor === "pointer" ||
          window.getComputedStyle(target).cursor === "pointer"
      );
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handlePointerOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handlePointerOver);
      window.removeEventListener("resize", checkMobile);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <MotionBox
        position="fixed"
        top={0}
        left={0}
        width={isPointer ? "40px" : "12px"}
        height={isPointer ? "40px" : "12px"}
        borderRadius="full"
        bg={primaryColor}
        pointerEvents="none"
        zIndex={9999}
        opacity={isHidden ? 0 : 1}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
        boxShadow={`0 0 20px ${primaryColor}, 0 0 40px ${primaryColor}`}
        mixBlendMode="difference"
      />

      {/* Outer ring */}
      <MotionBox
        position="fixed"
        top={0}
        left={0}
        width={isPointer ? "60px" : "40px"}
        height={isPointer ? "60px" : "40px"}
        borderRadius="full"
        border="1px solid"
        borderColor={secondaryColor}
        pointerEvents="none"
        zIndex={9998}
        opacity={isHidden ? 0 : 0.5}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          width: { duration: 0.3 },
          height: { duration: 0.3 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Global style to hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
