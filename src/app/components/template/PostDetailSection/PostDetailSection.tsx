"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

import ListIcon from "public/icons/toc/list.svg";
import CloseIcon from "public/icons/toc/close.svg";

import { HorizontalHeading } from "../../common";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import type { PostDetailSectionProps } from "./PostDetailSection.types";
import { PostDetailTags } from "../../post/PostDetailTags";
import { useSetRecoilState, useRecoilState } from "recoil";
import { TocModalState, TocResoultionState } from "../../post/recoil";
import Spinner from "../../common/Spinner/Spinner";

const MarkdownViewer = dynamic(() => import("../../markdown/MarkdownViewer"), {
  ssr: false,
  loading: () => <Spinner />,
});

const TableOfContents = dynamic(
  () => import("../../post/Toc/TableOfContents"),
  {
    ssr: false,
    loading: () => <Spinner />,
  },
);

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
  const [activeTocModal, setActiveTocModal] = useRecoilState(TocModalState);
  const setTocResoultion = useSetRecoilState(TocResoultionState);

  useEffect(() => {
    setTocResoultion(isSmallerThan960);
  }, [isSmallerThan960]);

  return (
    <article>
      {isSmallerThan960 && (
        <Box
          position="fixed"
          right="0.75rem"
          bottom="1.25rem"
          cursor="pointer"
          zIndex={30}
          onClick={() => setActiveTocModal(!activeTocModal)}
        >
          {!activeTocModal ? (
            <ListIcon width="60" height="60" />
          ) : (
            <CloseIcon width="80" height="80" />
          )}
        </Box>
      )}
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
          {content && <TableOfContents />}
        </Flex>
      </Box>
    </article>
  );
};

export default PostDetailSection;
