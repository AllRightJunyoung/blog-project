import uuid from "react-uuid";
import { Grid, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PostCard from "../../home/PostCard";
import { PostCardSectionProps } from "./PostCardSection.types";
import {
  AllPostState,
  PostCardSectionState,
} from "@/app/components/home/recoil";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { getDiffDate } from "../../home/utils/date";

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
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
      }}
      gap={10}
    >
      {postCardData ? (
        postCardData.map((post) => {
          return (
            <motion.div
              key={uuid()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <PostCard
                slug={post.slug}
                title={post.title}
                category={post.category}
                date={post.date}
                diffDate={getDiffDate(post.date)}
                thumbnail={post.thumbnail}
              />
            </motion.div>
          );
        })
      ) : (
        <Spinner
          thickness="7px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal"
          size="xl"
        />
      )}
    </Grid>
  );
};
export default PostCardSection;
