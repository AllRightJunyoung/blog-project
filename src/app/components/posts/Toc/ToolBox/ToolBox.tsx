"use clients";

import { Flex, Box, Link } from "@chakra-ui/react";
import Image from "next/image";

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
        <Image src="/icons/toc/clip" width={40} height={40} alt="clip-icon" />
      </Box>
      <Box cursor="pointer">
        <Link href={`#nav-bar`}>
          <Image src="/icons/toc/top" width={40} height={40} alt="top-icon" />
        </Link>
      </Box>
    </Flex>
  );
};

export default ToolBox;
