"use client";

import { HStack } from "@chakra-ui/react";
import type { PostDetailTagsProps } from "./PostDetailTags.type";
import { PostTag } from "../../shared";
import uuid from "react-uuid";

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
