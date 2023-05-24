import { HStack } from "@chakra-ui/react";
import PostTag from "../PostTag";

const PostTags = () => {
  // 서버로부터 가져온 아이템 개수 기반으로 spaceing 설정

  return (
    <HStack spacing={3} marginLeft={5}>
      <PostTag name="전체" active={true} />
      <PostTag name="음식" active={false} />
      <PostTag name="운동" active={false} />
    </HStack>
  );
};

export default PostTags;
