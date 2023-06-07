"use client";

import { HStack } from "@chakra-ui/react";
import type { PostTagSectionProps } from "./PostTagSection.type";
import PostTag from "../PostTag";

const PostTagSection = ({ tags }: PostTagSectionProps) => {
  return (
    <HStack spacing={3}>
      <PostTag name="All" active={true} />
      {tags.map((tagName) => (
        <PostTag name={tagName} active={false} />
      ))}
    </HStack>
  );
};

export default PostTagSection;
