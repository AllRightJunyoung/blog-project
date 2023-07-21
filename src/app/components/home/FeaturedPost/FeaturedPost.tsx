"use client";

import { Flex, Heading, Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { FeaturedPostsState } from "../recoil";
import FeautredPostCarousel from "./Carousel";

const FeaturedPost = () => {
  const featuredPost = useRecoilValue(FeaturedPostsState);

  return (
    <Flex direction="column" alignItems="center">
      <Box>
        <Flex direction="column" gap={5}>
          <Heading as="h1" color="white" fontStyle="italic" padding={5}>
            Featured Post
          </Heading>
          <FeautredPostCarousel data={featuredPost} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default FeaturedPost;
