"use client";

import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "@/styles/framer-motions";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { FeaturedPostsState } from "@/recoil/home";
import { FeautredPostCarousel } from "../FeaturedPostCarousel";

const FeaturedPostLayout = () => {
  const featuredPost = useRecoilValue(FeaturedPostsState);

  return (
    <motion.div variants={fadeInFromLeft} initial="hidden" animate="visible">
      <Flex direction="column" alignItems="center" as="article" margin={10}>
        <Box>
          <Flex direction="column" gap={5}>
            <Heading
              as="h1"
              color="white"
              fontStyle="italic"
              textAlign="center"
            >
              Featured Post
            </Heading>
            <FeautredPostCarousel data={featuredPost} />
          </Flex>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default FeaturedPostLayout;
