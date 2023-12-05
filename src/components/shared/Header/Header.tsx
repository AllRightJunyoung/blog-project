"use client";

import { Flex, useColorMode } from "@chakra-ui/react";
import { NavBar } from "@/components/shared";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection="column"
      backgroundColor={
        colorMode === "dark"
          ? "dark.header.background"
          : "light.header.background"
      }
      color="white"
      position="sticky"
      height="50px"
      as="header"
    >
      <NavBar />
    </Flex>
  );
};
export default Header;
