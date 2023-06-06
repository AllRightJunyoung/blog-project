"use client";

import ReactMarkdown from "react-markdown";
import { Box } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";
import remarkGfm from "remark-gfm";

import type { MarkdownProps } from "./Markdown.types";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
