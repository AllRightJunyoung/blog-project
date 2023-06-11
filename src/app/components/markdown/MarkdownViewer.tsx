"use client";

import ReactMarkdown from "react-markdown";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Td,
  Tr,
  Th,
  Code,
} from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import type { MarkdownViewerProps } from "./MarkdownViewer.types";
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
      <Code colorScheme="teal">{children}</Code>
    );
  },

  h1: ({ children }) => {
    return (
      <>
        <Heading
          as="h1"
          id={String(children).replaceAll(" ", "-")}
          color="#FF8945"
          fontSize="28px"
          mt={10}
          mb={3}
        >
          {children}
        </Heading>
      </>
    );
  },

  h2: ({ children }) => {
    return (
      <>
        <Heading
          as="h2"
          color="#9FD5D5"
          fontSize="24px"
          id={String(children).replaceAll(" ", "-")}
          mt={10}
          mb={3}
        >
          {children}
        </Heading>
      </>
    );
  },
  p: ({ children, ...props }) => {
    return (
      <Text marginTop={1} mb={3} fontSize="16px" color="white">
        {children}
      </Text>
    );
  },
  ul: ({ children }) => {
    return <ul>{children}</ul>;
  },
  li: ({ children }) => {
    return <li style={{ color: "white" }}>{children}</li>;
  },
  table: ({ children }) => {
    return (
      <Table margin={5} variant="simple" color="white">
        {children}
      </Table>
    );
  },
  thead: ({ children }) => {
    return <Thead color="white">{children}</Thead>;
  },
  td: ({ children }) => {
    return <Td color="white">{children}</Td>;
  },
  tr: ({ children }) => {
    return <Tr color="white">{children}</Tr>;
  },
  th: ({ children }) => {
    return <Th color="white">{children}</Th>;
  },
  strong: ({ children }) => {
    return (
      <strong
        style={{ fontSize: "16px", color: "#9FD5D5", fontWeight: "bold" }}
      >
        {children}
      </strong>
    );
  },
  blockquote: ({ children }) => {
    return (
      <blockquote
        style={{
          color: "white",
          marginTop: "0.25rem",
          marginBottom: "1.6em",
          paddingLeft: "1em",
          borderLeftWidth: "5px",
          borderColor: "teal",
        }}
      >
        {children}
      </blockquote>
    );
  },
};

const MarkdownViewer = ({ children }: MarkdownViewerProps) => {
  return (
    <Box padding={10} bgColor="blackAlpha.300" width="70vw">
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
