"use client";

import uuid from "react-uuid";
import { HStack } from "@chakra-ui/react";
import type { PostDetailTagsProps } from "./PostDetailTags.type";
import { PostTag } from "@/components/shared";
const PostDetailTags = ({ tags }: PostDetailTagsProps) => {
  return (
    <HStack spacing={3}>
      {tags.map((tagName) => (
        <PostTag name={tagName} key={uuid()} />
      ))}
    </HStack>
  );
};

export default PostDetailTags;
