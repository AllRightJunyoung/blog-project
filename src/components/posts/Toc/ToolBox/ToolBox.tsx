"use clients";

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
          src={`${process.env.IMAGE_URI}/icons/clip.svg`}
          width={40}
          height={40}
          alt="clip-icon"
        />
      </Box>
      <Box cursor="pointer">
        <Link href={`#nav-bar`}>
          <Image  src={`${process.env.IMAGE_URI}/icons/top.svg`} width={40} height={40} alt="top-icon" />
        </Link>
      </Box>
    </Flex>
  );
};

export default ToolBox;
