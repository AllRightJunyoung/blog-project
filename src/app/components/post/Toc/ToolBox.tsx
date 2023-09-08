"use clients";
import TopButton from "public/icons/toc/top.svg";
import MessageButton from "public/icons/toc/message.svg";
import ClipButton from "public/icons/toc/clip.svg";

import { Flex, Box } from "@chakra-ui/react";

const ToolBox = () => {
  return (
    <Flex
      borderRadius="15px"
      justifyContent="space-between"
      bg="#17242c"
      marginTop={1}
      padding={3}
    >
      <Box cursor="pointer">
        <TopButton width={40} height={40} />
      </Box>
      <Box cursor="pointer">
        <MessageButton width={40} height={40} />
      </Box>
      <Box cursor="pointer">
        <ClipButton width={40} height={40} />
      </Box>
    </Flex>
  );
};

export default ToolBox;
