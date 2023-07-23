"use client";

import ReactMarkdown from "react-markdown";
import {
  Box,
  ListItem,
  Heading,
  Text,
  Table,
  Thead,
  Highlight,
  Td,
  Tr,
  Th,
  Code,
  OrderedList,
  UnorderedList,
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
        customStyle={{
          margin: 0,
          paddingTop: 25,
          paddingBottom: 25,
          borderRadius: 0,
          borderWidth: 0,
          fontSize: "13px",
          height: "auto",
        }}
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
          size={{ lg: "lg", base: "md" }}
          id={String(children).replaceAll(" ", "-")}
          color="#FF8945"
          mt={5}
          mb={5}
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
          size={{ lg: "md", base: "sm" }}
          color="#9FD5D5"
          id={String(children).replaceAll(" ", "-")}
          mt={6}
          mb={3}
        >
          {children}
        </Heading>
      </>
    );
  },
  h3: ({ children }) => {
    return (
      <>
        <Heading
          as="h3"
          size={{ lg: "sm", base: "xs" }}
          color="#9FD5D5"
          id={String(children).replaceAll(" ", "-")}
          mt={6}
          mb={3}
        >
          {children}
        </Heading>
      </>
    );
  },
  p: ({ children, ...props }) => {
    return (
      <Text mt={2} mb={5} fontSize={{ lg: "16px", base: "14px" }} color="white">
        {children}
      </Text>
    );
  },
  ol: ({ children }) => {
    return (
      <OrderedList color="white" fontSize={{ lg: "16px", base: "14px" }}>
        {children}
      </OrderedList>
    );
  },
  ul: ({ children }) => {
    return (
      <UnorderedList color="white" fontSize={{ lg: "16px", base: "14px" }}>
        {children}
      </UnorderedList>
    );
  },
  li: ({ children }) => {
    return (
      <ListItem mt={2} mb={2}>
        {children}
      </ListItem>
    );
  },
  table: ({ children }) => {
    return (
      <Table
        mb={3}
        mt={3}
        variant="simple"
        color="white"
        size={{ lg: "md", base: "sm" }}
        layout="auto"
      >
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
      <Text
        as="b"
        fontSize={{ lg: "16px", base: "14px" }}
        color="#9FD5D5"
        fontWeight="bold"
      >
        {children}
      </Text>
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
    <Box padding={{ xl: 8, lg: 6, base: 4 }} bgColor="blackAlpha.300" w="100%">
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
