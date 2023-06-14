"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import type { CarouselProps } from "./Carousel.types";
import { Text, Image, Flex, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { BellIcon, SunIcon, CalendarIcon } from "@chakra-ui/icons";
import { FeaturedPostTags } from "../FeaturedPostTags";

const FeautredPostCarousel = ({ data }: CarouselProps) => {
  return (
    <Flex width={720}>
      <Swiper
        modules={[Pagination, Autoplay]}
        speed={600}
        pagination={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {data.map((post, idx) => {
          return (
            <SwiperSlide>
              <Flex direction="column" gap={2}>
                <FeaturedPostTags tags={data[idx].tags} />
                <Flex gap={1} direction="column" marginBottom={5}>
                  <Flex alignItems="center" gap={2}>
                    <BellIcon color="yellow" w={6} h={6} />
                    <Text fontSize="3xl" color="white">
                      {post.title}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap={2}>
                    <SunIcon color="orange" w={5} h={5} />
                    <Text fontSize="2xl" color="white">
                      {post.description}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap={3}>
                    <CalendarIcon color="white" w={4} h={4} />
                    <Text fontSize="lg" color="white">
                      {post.date}
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="center">
                  <Image
                    objectFit="cover"
                    src={post.thumbnail}
                    borderRadius={"xl"}
                  />
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default FeautredPostCarousel;
