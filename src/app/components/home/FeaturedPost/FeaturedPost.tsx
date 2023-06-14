"use client";

import { Flex, Heading } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { FeaturedPostsState } from "../recoil";
import FeautredPostCarousel from "./Carousel";

const FeaturedPost = () => {
  const featuredPost = useRecoilValue(FeaturedPostsState);

  return (
    <Flex padding={10} direction="column" alignItems="center">
      <Flex direction="column" gap={5}>
        <Heading as="h2" size="xl" color="white" fontStyle="italic">
          Featured Post
        </Heading>
        <FeautredPostCarousel data={featuredPost} />
      </Flex>
    </Flex>
  );
};

export default FeaturedPost;
