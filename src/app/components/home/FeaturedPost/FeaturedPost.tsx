"use client";
import { motion } from "framer-motion";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { FeaturedPostsState } from "../recoil";
import FeautredPostCarousel from "./Carousel";
import { fadeInFromLeft } from "@/app/styles/framer-motions";
import Spinner from "../../common/Spinner/Spinner";

const FeaturedPost = () => {
  const featuredPost = useRecoilValue(FeaturedPostsState);

  return featuredPost.length ? (
    <motion.div variants={fadeInFromLeft} initial="hidden" animate="visible">
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
    </motion.div>
  ) : (
    <Spinner />
  );
};

export default FeaturedPost;
