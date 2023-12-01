import uuid from "react-uuid";
import { AllPostState, PostCardSectionState } from "@/app/recoil/home";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Grid } from "@chakra-ui/react";
import { PostCardSectionProps } from "./PostCardSection.types";
import { fadeInFromLeft } from "@/app/styles/framer-motions";
import { getDiffDate } from "@/app/utils/home/date";
import { PostCard } from "../../home";

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
        {postCardData.length > 0 ? (
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
          })
        ) : (
          <PostCard
            key={uuid()}
            style={{ opacity: 0 }}
            slug="empty"
            title="empty"
            category="empty"
            date="empty"
            diffDate="empty"
            thumbnail="postcardempty"
            blurURL="postcardempty"
          />
        )}
      </Grid>
    </motion.div>
  );
};
export default PostCardSection;
