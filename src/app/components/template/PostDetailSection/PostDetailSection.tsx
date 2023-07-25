"use client";

import { HorizontalHeading } from "../../common";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import type { PostDetailSectionProps } from "./PostDetailSection.types";
import MarkdownViewer from "../../markdown/MarkdownViewer";
import { PostDetailTags } from "../../post/PostDetailTags";
import { TableOfContents } from "../../post/Toc";

const PostDetailSection = ({
  title,
  content,
  date,
  tags,
  category,
}: PostDetailSectionProps) => {
  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <article>
      <Box>
        <Box padding={10}>
          <HorizontalHeading title={title} fontSize="4xl" />
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
        <Flex padding={3} gap={5}>
          <MarkdownViewer>{content}</MarkdownViewer>
          {!isSmallerThan960 && <TableOfContents />}
        </Flex>
      </Box>
    </article>
  );
};

export default PostDetailSection;
