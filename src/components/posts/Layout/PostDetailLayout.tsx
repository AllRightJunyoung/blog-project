"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/styles/framer-motions";
import { useRecoilState } from "recoil";
import { TocModalState } from "@/recoil/posts";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { TocLayout } from "@/components/posts";
import Image from "next/image";
import Giscus from "@giscus/react";
import { Footer, MarkdownViewer, ProgressBar } from "@/components/shared";
import PostInfoLayout from "@/components/shared/PostInfo/Layout/PostInfoLayout";
import { PostsType } from "@/types/shared";

interface Props
  extends Pick<PostsType, "title" | "category" | "date" | "tags" | "content"> {}
const PostDetailLayout = ({ title, content, date, tags, category }: Props) => {
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
        padding={{ xl: 32, lg: 6 }}
        paddingTop={{ xl: 0, lg: 0 }}
        paddingBottom={{ xl: 0, lg: 0 }}
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
                src="/icons/list.svg"
                width={60}
                height={60}
                alt="toc-list-Icon"
              />
            ) : (
              <Image
                src="/icons/close.svg"
                width={80}
                height={80}
                alt="toc-close-Icon"
              />
            )}
          </Box>
        )}
        <Box>
          <PostInfoLayout
            title={title}
            date={date}
            category={category}
            tags={tags}
          />
          <Flex as="article" padding={{ base: 4, sm: 2 }} gap={3}>
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
