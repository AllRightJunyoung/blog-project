import uuid from "react-uuid";
import { Grid } from "@chakra-ui/react";
import PostCard from "../../home/Card/PostCard";
import { PostCardSectionProps } from "./PostCardSection.types";
import { AllPostsState, PostCardSectionState } from "@/app/recoil/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { useEffect } from "react";

const PostCardSection = ({ data }: PostCardSectionProps) => {
  const setAllPosts = useSetRecoilState(AllPostsState);
  const postData = useRecoilValue(PostCardSectionState);

  const AllPostData = data.map((postData) => {
    return {
      slug: postData.slug,
      title: postData.title,
      category: postData.category,
      date: postData.date,
      time: "3일전",
      thumbnail: postData.thumbnail,
    };
  });

  useEffect(() => {
    setAllPosts(AllPostData);
  }, []);

  const postCards = postData.map((post) => {
    return (
      <PostCard
        slug={post.slug}
        title={post.title}
        category={post.category}
        date={post.date}
        time="3일전"
        thumbnail={post.thumbnail}
        key={uuid()}
      />
    );
  });

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
      {postCards}
    </Grid>
  );
};
export default PostCardSection;
