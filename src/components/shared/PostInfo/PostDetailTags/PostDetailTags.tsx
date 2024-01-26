"use client";
import uuid from "react-uuid";
import { HStack } from "@chakra-ui/react";
import { PostTag } from "@/components/shared";

interface Props {
  tags: string[];
}

const PostDetailTags = ({ tags }: Props) => {
  return (
    <HStack spacing={3}>
      {tags.map((tagName) => (
        <PostTag name={tagName} key={uuid()} />
      ))}
    </HStack>
  );
};

export default PostDetailTags;
