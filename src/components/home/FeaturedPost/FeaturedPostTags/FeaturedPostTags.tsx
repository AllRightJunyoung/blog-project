import uuid from "react-uuid";
import type { FeaturedPostTagsProps } from "./FeaturedPostTags.types";
import PostTag from "@/components/shared/PostTag";
import { HStack } from "@chakra-ui/react";

const FeaturedPostTags = ({ tags }: FeaturedPostTagsProps) => {
  return (
    <HStack spacing={3}>
      {tags.map((tag) => (
        <PostTag name={tag} key={uuid()} />
      ))}
    </HStack>
  );
};

export default FeaturedPostTags;
