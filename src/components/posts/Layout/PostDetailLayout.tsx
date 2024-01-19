"use client";
import type { PostDetailLayoutProps } from "./PostDetailLayout.types";
import { motion } from "framer-motion";
import { fadeIn } from "@/styles/framer-motions";
import { useRecoilState } from "recoil";
import { TocModalState } from "@/recoil/posts";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import {
  MarkdownViewer,
  PostDetailTags,
  ProgressBar,
  TocLayout,
} from "@/components/posts";
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Giscus from "@giscus/react";
import { HorizontalHeading, Footer } from "@/components/shared";

const PostDetailLayout = ({
  title,
  content,
  date,
  tags,
  category,
}: PostDetailLayoutProps) => {
  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)", {
    ssr: true,
    fallback: false,
  });
  const [activeTocModal, setActiveTocModal] = useRecoilState(TocModalState);

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      <ProgressBar />
      <Box
        as="main"
        padding={{ xl: 16, base: 0 }}
        paddingTop={{ xl: 0, base: 0 }}
        paddingBottom={{ xl: 0, base: 0 }}
      >
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
              <Image
                src="/icons/toc/list"
                width={60}
                height={60}
                alt="toc-list-Icon"
              />
            ) : (
              <Image
                src="/icons/toc/close"
                width={80}
                height={80}
                alt="toc-close-Icon"
              />
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
          <Flex as="article" padding={{ "2xl": 10, xl: 8, lg: 6, base: 4 }}>
            <MarkdownViewer>{content}</MarkdownViewer>
            <TocLayout isSmallerThan960={isSmallerThan960} />
          </Flex>
          <Box padding={3} as="footer">
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
          <Footer />
        </Box>
      </Box>
    </motion.div>
  );
};

export default PostDetailLayout;
