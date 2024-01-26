"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/styles/framer-motions";
import { ProgressBar } from "@/components/shared";
import { Box } from "@chakra-ui/react";
import MarkDownViewer from "@/components/shared/MarkDownViewer";

interface Props {
  description: string;
  tags: string[];
  date: string;
  content: any;
}

const DiaryDetailLayout = ({ description, tags, date, content }: Props) => {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      <ProgressBar />
      <Box
        as="main"
        padding={{ xl: 32, lg: 6 }}
        paddingTop={{ xl: 0, lg: 0 }}
        paddingBottom={{ xl: 0, lg: 0 }}
      >
        <MarkDownViewer>{content}</MarkDownViewer>
      </Box>
    </motion.div>
  );
};

export default DiaryDetailLayout;
