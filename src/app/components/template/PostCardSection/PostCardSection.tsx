import { motion } from "framer-motion";
import uuid from "react-uuid";
import { Grid } from "@chakra-ui/react";
import PostCard from "../../home/PostCard";
import { PostCardSectionProps } from "./PostCardSection.types";
import {
  AllPostState,
  PostCardSectionState,
} from "@/app/components/home/recoil";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { getDiffDate } from "../../home/utils/date";
import { fadeInFromLeft } from "@/app/styles/framer-motions";

const PostCardSection = ({ data }: PostCardSectionProps) => {
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
        {postCardData.map((post) => {
          return (
            <PostCard
              key={uuid()}
              slug={post.slug}
              title={post.title}
              category={post.category}
              date={post.date}
              diffDate={getDiffDate(post.date)}
              thumbnail={post.thumbnail}
            />
          );
        })}
      </Grid>
    </motion.div>
  );
};
export default PostCardSection;
