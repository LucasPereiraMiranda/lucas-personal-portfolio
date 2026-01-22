import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Text, Image, Box, useColorModeValue } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaGithub } from "react-icons/fa";
import { SocialButton } from "../SocialButton";

const MotionFlex = motion(Flex);

export function ProjectSlider() {
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

  const projects = [
    {
      name: "Check-in card generator",
      image:
        "https://raw.githubusercontent.com/LucasPereiraMiranda/check-in-card-generator/master/.github/images/generated.png",
      description:
        "Exploring FaaS, AWS, Serverless, Lambda & DynamoDB to create course check-in cards",
      repositoryLink:
        "https://github.com/LucasPereiraMiranda/check-in-card-generator",
    },
    {
      name: "Web Calculator",
      image:
        "https://raw.githubusercontent.com/LucasPereiraMiranda/web-calculator/master/.github/web-calculator.png",
      description:
        "A project made with HTML, CSS, and pure JavaScript with the intention of practicing the basics of web development",
      repositoryLink: "https://github.com/LucasPereiraMiranda/web-calculator",
    },
    {
      name: "HTTP health monitor cli",
      image:
        "https://raw.githubusercontent.com/LucasPereiraMiranda/http-health-monitor-cli/main/.github/images/help.png",
      description:
        "The CLI written in GoLang to check the health of HTTP-based systems",
      repositoryLink:
        "https://github.com/LucasPereiraMiranda/http-health-monitor-cli",
    },
    {
      name: "Currency converter",
      image:
        "https://raw.githubusercontent.com/LucasPereiraMiranda/currency-converter/master/.github/init.png",
      description:
        "Development of a basic web-based currency converter system as a practical activity for Web I course at UFOP.",
      repositoryLink:
        "https://github.com/LucasPereiraMiranda/currency-converter",
    },
    {
      name: "Linux todolist manager",
      image:
        "https://raw.githubusercontent.com/LucasPereiraMiranda/todolist/master/.github/img/execution.png",
      description:
        "An academic program designed to create and manage task lists, specifically developed for Linux distributions. The interface is in PT-BR (Brazilian Portuguese)",
      repositoryLink: "https://github.com/LucasPereiraMiranda/todolist",
    },
    {
      name: "Pix control",
      image:
        "https://github.com/LucasPereiraMiranda/pix-control/blob/master/.github/welcome.png?raw=true",
      description:
        "Development of a basic web-based Pix payment control system as a practical activity for Web I course at UFOP.",
      repositoryLink: "https://github.com/LucasPereiraMiranda/pix-control",
    },
  ];

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      position="relative"
    >
      <Box overflow="hidden" width="100%" position="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={100}
          navigation={false}
          pagination={{ clickable: false }}
          loop={true}
          style={{ width: "100%", height: "750px" }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={400}
                gyroscope={true}
                style={{ height: "100%" }}
              >
                <MotionFlex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  padding="40px"
                  borderRadius="20px"
                  height="100%"
                  minW="320px"
                  maxW="500px"
                  m="auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  bg={cardBg}
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor={cardBorder}
                  boxShadow={`0 8px 32px 0 ${glowColor}, inset 0 0 0 1px rgba(255, 255, 255, 0.05)`}
                  position="relative"
                  overflow="hidden"
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
                  _hover={{
                    boxShadow: `0 8px 40px 0 rgba(128, 90, 213, 0.4), 0 0 20px rgba(0, 217, 255, 0.3)`,
                    borderColor: "rgba(128, 90, 213, 0.5)",
                  }}
                  sx={{
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    position="relative"
                    width="100%"
                    mb="6"
                    borderRadius="12px"
                    overflow="hidden"
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)",
                      pointerEvents: "none",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width="100%"
                      height="auto"
                      objectFit="cover"
                      maxH="200px"
                      transition="transform 0.3s ease"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                  <Text
                    as="span"
                    fontSize="2xl"
                    fontWeight="bold"
                    textAlign="center"
                    bgGradient="linear(to-r, teal.400, cyan.400)"
                    bgClip="text"
                  >
                    {project.name}
                  </Text>
                  <Text textAlign="center" mt="4" fontSize="lg" opacity={0.9}>
                    {project.description}
                  </Text>
                  <Box mt="4">
                    <SocialButton
                      link={project.repositoryLink}
                      arialLabel="Github"
                      Icon={FaGithub}
                      hoverColor="#718096"
                    />
                  </Box>
                </MotionFlex>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
}
