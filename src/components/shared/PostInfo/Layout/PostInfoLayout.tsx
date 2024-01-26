"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import HorizontalHeading from "../../HorizontalHeading";
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import PostDetailTags from "../PostDetailTags";

interface Props {
  title: string;
  category: string;
  date: string;
  tags: string[];
}

const PostInfoLayout = ({ title, category, date, tags }: Props) => {
  return (
    <Box padding={10}>
      <HorizontalHeading title={title} fontSize="3xl" />
      <Flex gap={5}>
        <Flex alignItems="center" gap={2} marginTop={3} marginBottom={3}>
          <InfoOutlineIcon color="white" />
          <Text color="white" fontSize="lg">
            {category}
          </Text>
        </Flex>

        <Flex alignItems="center" gap={1} marginTop={3} marginBottom={3}>
          <TimeIcon color="white" />
          <Text color="white" fontSize="lg">
            {date}
          </Text>
        </Flex>
      </Flex>
      <Box marginTop={2}>
        <PostDetailTags tags={tags} />
      </Box>
    </Box>
  );
};
export default PostInfoLayout;
