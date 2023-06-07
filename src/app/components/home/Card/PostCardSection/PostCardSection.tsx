import { Grid } from "@chakra-ui/react";
import PostCard from "../PostCard";
import { PostCardSectionProps } from "./PostCardSection.types";
import uuid from "react-uuid";

const PostCardSection = ({ data }: PostCardSectionProps) => {
  const postCardData = data.map((postData) => {
    return (
      <PostCard
        title={postData.title}
        category={postData.category}
        date={postData.date}
        time="3일전"
        thumbnail={postData.thumbnail}
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
      {postCardData}
    </Grid>
  );
};
export default PostCardSection;
