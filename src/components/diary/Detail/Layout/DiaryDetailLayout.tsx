"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/styles/framer-motions";
import { PostInfoLayout, ProgressBar } from "@/components/shared";
import { Box } from "@chakra-ui/react";
import MarkDownViewer from "@/components/shared/MarkDownViewer";
import { PostsType } from "@/types/shared";

type Props = Pick<
  PostsType,
  "description" | "tags" | "date" | "content" | "title" | "category"
>;

const DiaryDetailLayout = ({ tags, date, content, title, category }: Props) => {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      <ProgressBar />
      <Box
        as="main"
        padding={{ xl: 32, lg: 6 }}
        paddingTop={{ xl: 0, lg: 0 }}
        paddingBottom={{ xl: 0, lg: 0 }}
      >
        <Box padding={5}>
          <PostInfoLayout
            tags={tags}
            date={date}
            title={title}
            category={category}
          />
        </Box>
        <MarkDownViewer>{content}</MarkDownViewer>
      </Box>
    </motion.div>
  );
};

export default DiaryDetailLayout;
