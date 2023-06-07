"use client";

import { HStack } from "@chakra-ui/react";
import type { PostDetailTagProps } from "./PostDetailTag.type";
import { PostTag } from "../../common";
import uuid from "react-uuid";

const PostDetailTag = ({ tags }: PostDetailTagProps) => {
  return (
    <HStack spacing={3}>
      {tags.map((tagName) => (
        <PostTag name={tagName} active={true} key={uuid()} />
      ))}
    </HStack>
  );
};

export default PostDetailTag;
