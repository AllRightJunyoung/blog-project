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

const PostCardSection = ({ data }: PostCardSectionProps) => {
  const setAllPosts = useSetRecoilState(AllPostState);
  const postCardData = useRecoilValue(PostCardSectionState);

  const AllPostData = data.map((postData) => {
    return {
      ...postData,
      time: "3일전",
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
            <PostCard
              slug={post.slug}
              title={post.title}
              category={post.category}
              date={post.date}
              time={"3일전"}
              thumbnail={post.thumbnail}
              key={uuid()}
            />
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </Grid>
  );
};
export default PostCardSection;
