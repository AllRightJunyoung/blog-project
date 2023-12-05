"use client";

import { Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";
import type { PostTagProps } from "./PostTag.types";

const PostTag = ({ name }: PostTagProps) => {
  const bg = useColorModeValue(
    "light.tag.active.background",
    "dark.tag.active.background",
  );
  const color = useColorModeValue(
    "light.tag.active.fontColor",
    "dark.tag.active.fontColor",
  );

  return (
    <Tag size="lg" key="lg" variant="solid" background={bg} borderRadius={10}>
      <TagLabel color={color} fontSize="md">
        {name}
      </TagLabel>
    </Tag>
  );
};
export default PostTag;
