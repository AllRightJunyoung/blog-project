"use client";

import { Heading, PostTags } from "../common";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

import type { PostSectionProps } from "./PostSection.types";
import "github-markdown-css";
import MarkdownViewer from "../markdown/MarkdownViewer";

const PostSection = ({ title, content, date, tags }: PostSectionProps) => {
  return (
    <Box margin={20}>
      <Box>
        <Heading title={title} fontSize="4xl" />
        <Flex alignItems="center" gap={1} marginTop={3} marginBottom={3}>
          <TimeIcon color="white" />
          <Text color="white" fontSize="md">
            {date}
          </Text>
        </Flex>
        <Box marginTop={5}>
          <PostTags tags={tags} />
        </Box>
      </Box>

      <Box marginTop={15}>
        <MarkdownViewer>{content}</MarkdownViewer>
      </Box>
    </Box>
  );
};

export default PostSection;
