"use client";

import { Heading } from "../../common";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import type { PostDetailSectionProps } from "./PostDetailSection.types";
import MarkdownViewer from "../../markdown/MarkdownViewer";
import { PostDetailTag } from "../../post/PostDetailTag";

const PostDetailSection = ({
  title,
  content,
  date,
  tags,
}: PostDetailSectionProps) => {
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
          <PostDetailTag tags={tags} />
        </Box>
      </Box>

      <Box marginTop={15}>
        <MarkdownViewer>{content}</MarkdownViewer>
      </Box>
    </Box>
  );
};

export default PostDetailSection;
