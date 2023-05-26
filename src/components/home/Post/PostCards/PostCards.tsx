import { Grid } from "@chakra-ui/react";
import PostCard from "../PostCard";

const PostCards = () => {
  // 아이템 4개씩 보여주는 거로
  return (
    <Grid templateColumns="repeat(4,1fr)" gap={5} margin={7}>
      <PostCard
        name="제주도 여행 가이드"
        title="여행"
        date="June 03"
        time="24min"
      />
      <PostCard name="운동 가이드" title="운동" date="June 05" time="30min" />
      <PostCard name="운동 가이드" title="운동" date="June 05" time="30min" />
      <PostCard name="운동 가이드" title="운동" date="June 05" time="30min" />
    </Grid>
  );
};
export default PostCards;
