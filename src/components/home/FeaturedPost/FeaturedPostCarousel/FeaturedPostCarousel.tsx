"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { PostsType } from "@/types/shared";
import uuid from "react-uuid";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BellIcon, SunIcon, CalendarIcon } from "@chakra-ui/icons";
import { FeaturedPostTags } from "../FeaturedPostTags";

interface Props {
  data: PostsType[];
}

const FeautredPostCarousel = ({ data }: Props) => {
  const router = useRouter();

  return (
    <Flex width={{ lg: "720px", md: "640px", base: "400px" }} padding={7}>
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
                <Flex gap={1} direction="column">
                  <Flex alignItems="center" gap={2}>
                    <BellIcon color="yellow" w={5} h={5} />
                    <Text fontSize="2xl" color="white">
                      {post.title}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap={2} marginBottom={1}>
                    <SunIcon color="orange" w={5} h={5} />
                    <Text fontSize="2xl" color="white">
                      {post.description}
                    </Text>
                  </Flex>
                  <Flex
                    alignItems="center"
                    gap={2}
                    marginTop={3}
                    marginBottom={3}
                  >
                    <CalendarIcon color="white" w={5} h={5} />
                    <Text fontSize="lg" color="white">
                      {post.date}
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
                      cursor: "pointer",
                    }}
                    onClick={() => router.push(`/posts/${post.slug}`)}
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
