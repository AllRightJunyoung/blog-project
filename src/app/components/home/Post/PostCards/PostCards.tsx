import { Grid } from "@chakra-ui/react";
import PostCard from "../PostCard";
import { PostCardsProps } from "./PostCards.types";

const PostCards = ({ data }: PostCardsProps) => {
  const postCardData = data.map((postData) => {
    return (
      <PostCard
        title={postData.title}
        category={postData.category}
        date={postData.date}
        time="3일전"
        thumbnail={postData.thumbnail}
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
      margin={5}
    >
      {postCardData}
    </Grid>
  );
};
export default PostCards;
