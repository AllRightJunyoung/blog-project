"use clients";
import TopButton from "public/icons/toc/top.svg";
import ClipButton from "public/icons/toc/clip.svg";

import { Flex, Box, Link } from "@chakra-ui/react";

const ToolBox = () => {
  return (
    <Flex
      borderRadius="15px"
      justifyContent="flex-end"
      bg="#17242c"
      marginTop={1}
      padding={3}
    >
      <Box cursor="pointer">
        <ClipButton width={40} height={40} />
      </Box>
      <Box cursor="pointer">
        <Link href={`#nav-bar`}>
          <TopButton width={40} height={40} />
        </Link>
      </Box>
    </Flex>
  );
};

export default ToolBox;
