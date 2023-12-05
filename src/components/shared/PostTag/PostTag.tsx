"use client";

import { Tag, TagLabel, useColorMode } from "@chakra-ui/react";
import type { PostTagProps } from "./PostTag.types";

const PostTag = ({ name }: PostTagProps) => {
  const { colorMode } = useColorMode();

  return (
    <Tag
      size="lg"
      key="lg"
      variant="solid"
      background={
        colorMode === "light"
          ? "light.tag.active.background"
          : "dark.tag.active.background"
      }
      borderRadius={10}
    >
      <TagLabel
        color={
          colorMode === "light"
            ? "light.tag.active.fontColor"
            : "dark.tag.active.fontColor"
        }
        fontSize="md"
      >
        {name}
      </TagLabel>
    </Tag>
  );
};
export default PostTag;
