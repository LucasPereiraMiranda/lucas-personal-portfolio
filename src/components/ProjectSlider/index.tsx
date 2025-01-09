import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Text, Image, IconButton, Box } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaGithub } from "react-icons/fa";
import { SocialButton } from "../SocialButton";

export function ProjectSlider() {
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
          navigation= {false}
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
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding="40px"
                borderRadius="12px"
                boxShadow="lg"
                height="100%"
                minW="320px"
                maxW="500px"
                m="auto"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  mb="6"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                  maxH="200px"
                />
                <Text
                  as="span"
                  fontSize="2xl"
                  fontWeight="bold"
                  textAlign="center"
                >
                  {project.name}
                </Text>
                <Text textAlign="center" mt="4" fontSize="lg">
                  {project.description}
                </Text>{" "}
                {/* Adicionando um pouco de espaço acima da descrição e aumentando o fontSize */}
                <SocialButton
                  link={project.repositoryLink}
                  arialLabel="Github"
                  Icon={FaGithub}
                  hoverColor="#718096"
                />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
}
