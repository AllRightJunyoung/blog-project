import uuid from "react-uuid";
import type { FeaturedPostTagsProps } from "./FeaturedPostTags.types";
import { HStack } from "@chakra-ui/react";
import { PostTag } from "@/components/shared";

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
