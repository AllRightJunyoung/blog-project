"use clients";
import TopButton from "public/icons/toc/top.svg";
import MessageButton from "public/icons/toc/message.svg";
import ClipButton from "public/icons/toc/clip.svg";

import { Flex } from "@chakra-ui/react";

const ToolBox = () => {
  return (
    <Flex
      borderRadius="7px"
      justifyContent="space-between"
      bg="#1D1F21"
      marginTop={1}
    >
      <TopButton width={40} height={40} />
      <MessageButton width={40} height={40} />
      <ClipButton width={40} height={40} />
    </Flex>
  );
};

export default ToolBox;
