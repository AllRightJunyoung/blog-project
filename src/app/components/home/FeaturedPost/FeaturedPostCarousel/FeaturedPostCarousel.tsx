"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import uuid from "react-uuid";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { BellIcon, SunIcon, CalendarIcon, LinkIcon } from "@chakra-ui/icons";
import { FeaturedPostTags } from "../FeaturedPostTags";
import type { FeaturedPostCarouselProps } from "./FeaturedPostCarousel.types";

const FeautredPostCarousel = ({ data }: FeaturedPostCarouselProps) => {
  const router = useRouter();

  return (
    <Flex width={{ lg: "720px", md: "640px", base: "375px" }} padding={5}>
      <Swiper
        modules={[Pagination, Autoplay]}
        speed={600}
        pagination={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {data.map((post, idx) => {
          return (
            <SwiperSlide key={uuid()}>
              <Flex direction="column" gap={2}>
                <FeaturedPostTags tags={data[idx].tags} />
                <Flex gap={1} direction="column" marginBottom={5}>
                  <Flex alignItems="center" gap={2}>
                    <BellIcon color="yellow" w={6} h={6} />
                    <Text fontSize="3xl" color="white">
                      {post.title}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap={2} marginBottom={1}>
                    <SunIcon color="orange" w={5} h={5} />
                    <Text fontSize="2xl" color="white">
                      {post.description}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap={3} marginBottom={7}>
                    <CalendarIcon color="white" w={4} h={4} />
                    <Text fontSize="lg" color="white">
                      {post.date}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap={3} cursor="pointer">
                    <LinkIcon color="white" w={4} h={4} />
                    <Text
                      fontSize="2xl"
                      color="white"
                      onClick={() => router.push(`/posts/${post.slug}`)}
                    >
                      {"READ POST"}
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="center">
                  <Image
                    alt={post.title}
                    src={post.thumbnail}
                    sizes="100vw"
                    width={300}
                    height={200}
                    priority={true}
                    style={{
                      width: "100%",
                      height: "auto",
                      border: "2px solid gray",
                      borderRadius: "20px",
                    }}
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
