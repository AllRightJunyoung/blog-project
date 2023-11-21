"use client";

import { Tag, TagLabel } from "@chakra-ui/react";
import type { PostTagProps } from "./PostTag.types";

const PostTag = ({ name }: PostTagProps) => {
  return (
    <Tag
      size="lg"
      key="lg"
      variant="solid"
      background="tag.active.background"
      borderRadius={10}
    >
      <TagLabel color="tag.active.fontColor" fontSize="md">
        {name}
      </TagLabel>
    </Tag>
  );
};
export default PostTag;
