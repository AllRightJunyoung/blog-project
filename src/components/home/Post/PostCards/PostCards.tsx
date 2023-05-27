import { Grid } from "@chakra-ui/react";
import PostCard from "../PostCard";

const PostCards = () => {
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
      }}
      gap={5}
      margin={10}
    >
      <PostCard
        name="제주도 여행 가이드"
        title="여행"
        date="2023/06/01"
        time="3일전"
      />
      <PostCard
        name="제주도 여행 가이드"
        title="여행"
        date="2023/06/01"
        time="3일전"
      />
      <PostCard
        name="제주도 여행 가이드"
        title="여행"
        date="2023/06/01"
        time="3일전"
      />
      <PostCard
        name="제주도 여행 가이드"
        title="여행"
        date="2023/06/01"
        time="3일전"
      />
    </Grid>
  );
};
export default PostCards;
