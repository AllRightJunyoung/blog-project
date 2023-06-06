"use client";

import ReactMarkdown from "react-markdown";
import { Box } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import type { MarkdownProps } from "./Markdown.types";

const customMarkDownComponent = {
  img: (image: any) => {
    return (
      <Image src={`${image.src}`} alt={image.alt} width={600} height={400} />
    );
  },
};

const MarkDown = ({ children }: MarkdownProps) => {
  return (
    <Box margin={10} width="70vw">
      <Box className="markdown-body" padding={10}>
        <ReactMarkdown
          components={customMarkDownComponent}
          remarkPlugins={[remarkGfm]}
        >
          {children}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default MarkDown;
