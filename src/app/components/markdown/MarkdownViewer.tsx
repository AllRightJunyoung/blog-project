"use client";
import ReactMarkdown from "react-markdown";
import {
  Box,
  ListItem,
  Heading,
  Text,
  Table,
  Thead,
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
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { ImageProps } from "next/image";
import { ReactNode } from "react-markdown/lib/react-markdown";
import { PropsWithChildren } from "react";
import { MarkdownViewerProps } from "./MarkdownViewer.types";

const customMarkDownComponent: any = {
  img: (image: ImageProps) => {
    return (
      <Box display="flex" flexDirection="column">
        <Image
          src={`${image.src}`}
          alt={image.alt}
          width={600}
          height={400}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    );
  },
  code({ node, inline, className, children, ...props }: CodeProps) {
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
          fontSize: "14px",
          height: "auto",
        }}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <Code colorScheme="teal">{children}</Code>
    );
  },

  h1: ({ children }: PropsWithChildren<ReactNode>) => {
    return (
      <>
        <Heading
          as="h1"
          size="lg"
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

  h2: ({ children }: PropsWithChildren<ReactNode>) => {
    return (
      <>
        <Heading
          as="h2"
          size="md"
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
  h3: ({ children }: PropsWithChildren<ReactNode>) => {
    return (
      <>
        <Heading
          as="h3"
          size="sm"
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
  p: ({ children }: PropsWithChildren<ReactNode>) => {
    return (
      <Text mt={2} mb={5} fontSize={{ lg: "18px", base: "16px" }} color="white">
        {children}
      </Text>
    );
  },
  ol: ({ children }: PropsWithChildren<ReactNode>) => {
    return (
      <OrderedList color="white" fontSize={{ lg: "18px", base: "16px" }}>
        {children}
      </OrderedList>
    );
  },
  ul: ({ children }: PropsWithChildren<ReactNode>) => {
    return (
      <UnorderedList color="white" fontSize={{ lg: "18px", base: "16px" }}>
        {children}
      </UnorderedList>
    );
  },
  li: ({ children }: PropsWithChildren<ReactNode>) => {
    return (
      <ListItem mt={2} mb={2}>
        {children}
      </ListItem>
    );
  },
  table: ({ children }: PropsWithChildren<ReactNode>) => {
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
  thead: ({ children }: PropsWithChildren<ReactNode>) => {
    return <Thead color="white">{children}</Thead>;
  },
  td: ({ children }: PropsWithChildren<ReactNode>) => {
    return <Td color="white">{children}</Td>;
  },
  tr: ({ children }: PropsWithChildren<ReactNode>) => {
    return <Tr color="white">{children}</Tr>;
  },
  th: ({ children }: PropsWithChildren<ReactNode>) => {
    return <Th color="white">{children}</Th>;
  },
  strong: ({ children }: PropsWithChildren<ReactNode>) => {
    return (
      <Text
        as="b"
        fontSize={{ lg: "20px", base: "18px" }}
        color="#9FD5D5"
        fontWeight="bold"
      >
        {children}
      </Text>
    );
  },

  blockquote: ({ children }: PropsWithChildren<ReactNode>) => {
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
