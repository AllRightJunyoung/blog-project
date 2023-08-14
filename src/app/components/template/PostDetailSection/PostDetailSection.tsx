"use client";

import { useEffect, useState } from "react";

import ListIcon from "public/icons/toc/list.svg";
import CloseIcon from "public/icons/toc/close.svg";

import { HorizontalHeading } from "../../common";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import type { PostDetailSectionProps } from "./PostDetailSection.types";
import { PostDetailTags } from "../../post/PostDetailTags";
import { useRecoilState } from "recoil";
import { TocModalState } from "../../post/recoil";

import dynamic from "next/dynamic";
import Spinner from "../../common/Spinner/Spinner";

const MarkdownViewer = dynamic(() => import("../../markdown/MarkdownViewer"), {
  ssr: true,
  loading: () => <Spinner />,
});

const TableOfContents = dynamic(
  () => import("../../post/Toc/TableOfContents"),
  {
    ssr: true,
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
  const [headingElements, setHeadingElements] = useState<Element[]>([]);
  const [activeTocModal, setActiveTocModal] = useRecoilState(TocModalState);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;
    const headingElements = Array.from(article.querySelectorAll("h1,h2"));
    setHeadingElements(headingElements);
  }, []);

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
          {headingElements.length > 0 ? (
            <TableOfContents
              headingElements={headingElements}
              isSmallerThan960={isSmallerThan960}
            />
          ) : (
            <Spinner />
          )}
        </Flex>
      </Box>
    </article>
  );
};

export default PostDetailSection;
