"use client";

import uuid from "react-uuid";
import { AllPostState, PostCardSectionState } from "@/recoil/home";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Grid } from "@chakra-ui/react";
import { fadeInFromLeft } from "@/styles/framer-motions";
import { getDiffDate } from "@/utils/home/date";
import PostCard from "../../PostCard";
import { PostsType } from "@/types/shared";

interface Props {
  data: PostsType[];
}

const PostCardSection = ({ data }: Props) => {
  const setAllPosts = useSetRecoilState(AllPostState);
  const postCardData = useRecoilValue(PostCardSectionState);

  const AllPostData = data.map((postData) => {
    return {
      ...postData,
    };
  });

  useEffect(() => {
    setAllPosts(AllPostData);
  }, []);

  return (
    <motion.div variants={fadeInFromLeft} initial="hidden" animate="visible">
      <Grid
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap={10}
      >
        {postCardData &&
          postCardData.map((post) => {
            return (
              <PostCard
                key={uuid()}
                slug={post.slug}
                title={post.title}
                category={post.category}
                date={post.date}
                diffDate={getDiffDate(post.date)}
                thumbnail={post.thumbnail}
                blurURL={post.blurURL}
              />
            );
          })}
      </Grid>
    </motion.div>
  );
};
export default PostCardSection;
