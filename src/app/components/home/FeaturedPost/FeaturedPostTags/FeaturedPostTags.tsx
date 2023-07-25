import { HStack } from "@chakra-ui/react";
import { PostTag } from "@/app/components/common";
import type { FeaturedPostTagsProps } from "./FeaturedPostTags.types";
import uuid from "react-uuid";

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