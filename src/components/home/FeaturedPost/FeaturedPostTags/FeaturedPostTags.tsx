"use client";

import uuid from "react-uuid";
import { HStack } from "@chakra-ui/react";
import { PostTag } from "@/components/shared";

interface Props {
  tags: string[];
}

const FeaturedPostTags = ({ tags }: Props) => {
  return (
    <HStack spacing={3}>
      {tags.map((tag) => (
        <PostTag name={tag} key={uuid()} />
      ))}
    </HStack>
  );
};

export default FeaturedPostTags;
