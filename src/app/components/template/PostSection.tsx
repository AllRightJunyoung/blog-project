"use client";

import { Heading, PostTags } from "../common";
import { MarkDown } from "../markdown";
import { Box } from "@chakra-ui/react";
import type { PostSectionProps } from "./PostSection.types";
import "github-markdown-css";

const PostSection = ({ title, content, date, tags }: PostSectionProps) => {
  return (
    <section>
      <Box margin={10} marginBottom={0}>
        <Heading title={title} fontSize="4xl" />
      </Box>
      <Box margin={5}>
        <PostTags tags={tags} />
      </Box>

      <Box color="white">
        <MarkDown>{content}</MarkDown>
      </Box>
    </section>
  );
};

export default PostSection;
