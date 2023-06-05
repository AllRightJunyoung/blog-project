"use client";

import { HStack } from "@chakra-ui/react";
import type { PostTagsProps } from "./PostTags.type";
import PostTag from "../PostTag";

const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <HStack spacing={3} marginLeft={5}>
      {tags.map((tagName) => (
        <PostTag name={tagName} active={true} />
      ))}
    </HStack>
  );
};

export default PostTags;
