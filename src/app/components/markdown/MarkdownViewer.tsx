"use client";

import ReactMarkdown from "react-markdown";
import { Box } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";
import remarkGfm from "remark-gfm";

import type { MarkdownViewerProps } from "./MarkdownViewer.types";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "github-markdown-css";

const customMarkDownComponent = {
  img: (image: any) => {
    return (
      <Image src={`${image.src}`} alt={image.alt} width={600} height={400} />
    );
  },
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
        {...props}
        style={atomDark}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code {...props}>{children}</code>
    );
  },
};

const MarkdownViewer = ({ children }: MarkdownViewerProps) => {
  return (
    <Box className="markdown-body" padding={10} width="90vw">
      <ReactMarkdown
        components={customMarkDownComponent}
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownViewer;
