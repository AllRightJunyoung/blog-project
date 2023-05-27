"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Flex } from "@chakra-ui/react";

const ToastEditor = dynamic(() => import("../components/editor/ToastEditor"), {
  ssr: false,
});

const PostPage = () => {
  const editorRef = useRef<any>();
  const [editorContent, setEditorContent] = useState<string>("");

  return (
    <Flex alignItems="center">
      <ToastEditor editorRef={editorRef} content={editorContent} />
    </Flex>
  );
};

export default PostPage;
