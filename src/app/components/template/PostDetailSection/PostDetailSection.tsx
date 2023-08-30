"use client";

import ListIcon from "public/icons/toc/list.svg";
import CloseIcon from "public/icons/toc/close.svg";
import { HorizontalHeading } from "../../common";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import type { PostDetailSectionProps } from "./PostDetailSection.types";
import { PostDetailTags } from "../../post/PostDetailTags";
import { useRecoilState } from "recoil";
import { TocModalState } from "../../post/recoil";
import MarkdownViewer from "../../markdown/MarkdownViewer";
import { TableOfContents } from "../../post/Toc";
import { motion } from "framer-motion";

import { fadeIn } from "@/app/styles/framer-motions";
import Giscus from "@giscus/react";

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

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
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
            <TableOfContents isSmallerThan960={isSmallerThan960} />
          </Flex>
          <Box padding={3}>
            <Giscus
              category="Comments"
              categoryId="DIC_kwDOKM2rEM4CY8Vl"
              repo="AllRightJunyoung/junyoungBlog.comments"
              repoId="R_kgDOKM2rEA"
              mapping="pathname"
              strict="0"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="bottom"
              theme="dark_dimmed"
              lang="ko"
            />
          </Box>
        </Box>
      </article>
    </motion.div>
  );
};

export default PostDetailSection;
