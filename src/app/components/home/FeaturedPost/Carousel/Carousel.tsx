"use client";
import "swiper/css";
import "swiper/css/pagination";

import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import type { CarouselProps } from "./Carousel.types";

import { BellIcon, SunIcon } from "@chakra-ui/icons";

const FeautredPostCarousel = ({ data }: CarouselProps) => {
  console.log(data);
  return (
    <Flex width={720}>
      <Swiper modules={[Pagination]} speed={600} pagination={true}>
        {data.map((post) => {
          return (
            <SwiperSlide>
              <Flex direction="column">
                <Flex gap={1} direction="column" marginBottom={5}>
                  <Flex alignItems="center" gap={2}>
                    <BellIcon color="yellow" w={6} h={6} />
                    <Text fontSize="3xl" color="white">
                      {post.title}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap={2}>
                    <SunIcon color="orange" w={4} h={4} />
                    <Text fontSize="xl" color="white">
                      {post.description}
                    </Text>
                  </Flex>
                </Flex>
                <Image
                  objectFit="cover"
                  src={post.thumbnail}
                  borderRadius={"xl"}
                />
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default FeautredPostCarousel;
