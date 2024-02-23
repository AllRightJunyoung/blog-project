"use client";

import { Flex, Box, Link, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
const ToolBox = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      borderRadius="15px"
      justifyContent="flex-end"
      bg={colorMode === "light" ? "light.toc.bg" : "dark.toc.bg"}
      marginTop={1}
      padding={3}
    >
      <Box cursor="pointer">
        <Image
          src="/icons/clip.svg"
          width={40}
          height={40}
          alt="clip-icon"
        />
      </Box>
      <Box cursor="pointer">
        <Link href={`#nav-bar`}>
          <Image
            src="/icons/top.svg"
            width={40}
            height={40}
            alt="top-icon"
          ></Image>
        </Link>
      </Box>
    </Flex>
  );
};

export default ToolBox;
