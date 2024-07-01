import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Text } from "@chakra-ui/react";

export function ProjectSlider() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "80%" }}
      >
        <SwiperSlide>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Text as="h3">project 1</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Text as="h3">project 2</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Text as="h3">project 3</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Text as="h3">project 4</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Text as="h3">project 5</Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
