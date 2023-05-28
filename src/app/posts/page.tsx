"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Flex, Textarea, Box, Divider, Input, Button } from "@chakra-ui/react";
import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";

const ToastEditor = dynamic(() => import("../components/editor/ToastEditor"), {
  ssr: false,
});

const PostPage = () => {
  const editorRef = useRef<any>();
  const [editorContent, setEditorContent] = useState<string>("");

  return (
    <Flex direction="column" marginLeft={5}>
      <Box marginBottom={5}>
        <Textarea
          variant="unstyled"
          placeholder="제목을 입력 하세요"
          fontSize="4xl"
          width="auto"
          color="white"
          height="3px"
        />
        <Box>
          <Divider color="divider.color" border="2px" />
          <Input
            marginTop={5}
            variant="unstyled"
            placeholder="태그를 입력하세요"
            size="lg"
            color="white"
          />
        </Box>
      </Box>
      <Box>
        <ToastEditor editorRef={editorRef} content={editorContent} />
      </Box>
      <Flex boxShadow="md" rounded="md" gap={3} alignSelf="flex-end" margin={2}>
        <Button leftIcon={<ArrowBackIcon />} colorScheme="blackAlpha" size="md">
          뒤로가기
        </Button>
        <Button leftIcon={<AddIcon />} colorScheme="teal" size="md">
          작성하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default PostPage;
