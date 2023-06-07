"use client";

import { Tag, TagLabel } from "@chakra-ui/react";
import type { PostTagProps } from "./PostTag.types";

const PostTag = ({ name, active }: PostTagProps) => {
  return (
    <Tag
      size="lg"
      key="lg"
      variant="solid"
      background={active ? "tag.active.background" : "tag.inactive.background"}
      borderRadius={10}
    >
      <TagLabel
        color={active ? "tag.active.fontColor" : "tag.inactive.fontColor"}
        fontSize="md"
      >
        {name}
      </TagLabel>
    </Tag>
  );
};
export default PostTag;
