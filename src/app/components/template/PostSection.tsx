"use client";

import { Heading, PostTags } from "../common";
import { MarkDown } from "../markdown";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

import type { PostSectionProps } from "./PostSection.types";
import "github-markdown-css";

const PostSection = ({ title, content, date, tags }: PostSectionProps) => {
  return (
    <section>
      <Box margin={10} marginBottom={0}>
        <Heading title={title} fontSize="4xl" />
        <Flex alignItems="center" gap={1} marginTop={3} marginBottom={3}>
          <TimeIcon color="white" />
          <Text color="white" fontSize="md">
            {date}
          </Text>
        </Flex>
      </Box>
      <Box margin={5}>
        <PostTags tags={tags} />
      </Box>
      <MarkDown>{content}</MarkDown>
    </section>
  );
};

export default PostSection;
