"use client";

import { Heading } from "../../common";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import type { PostDetailSectionProps } from "./PostDetailSection.types";
import MarkdownViewer from "../../markdown/MarkdownViewer";
import { PostDetailTags } from "../../post/PostDetailTags";
import TableOfContents from "../../post/Toc/TableOfContents";

const PostDetailSection = ({
  title,
  content,
  date,
  tags,
  category,
}: PostDetailSectionProps) => {
  return (
    <article>
      <Box margin={20}>
        <Box>
          <Heading title={title} fontSize="4xl" />
          <Flex gap={5}>
            <Flex alignItems="center" gap={2} marginTop={3} marginBottom={3}>
              <InfoOutlineIcon color="white" />
              <Text color="white" fontSize="md">
                {category}
              </Text>
            </Flex>

            <Flex alignItems="center" gap={1} marginTop={3} marginBottom={3}>
              <TimeIcon color="white" />
              <Text color="white" fontSize="md">
                {date}
              </Text>
            </Flex>
          </Flex>
          <Box marginTop={5}>
            <PostDetailTags tags={tags} />
          </Box>
        </Box>

        <Box marginTop={15}>
          <MarkdownViewer>{content}</MarkdownViewer>
          <TableOfContents />
        </Box>
      </Box>
    </article>
  );
};

export default PostDetailSection;
