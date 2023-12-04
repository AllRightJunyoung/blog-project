"use client";

import { Flex } from "@chakra-ui/react";
import { NavBar } from "@/components/shared";

const Header = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="NavBar.background"
      position="sticky"
      height="50px"
      as="header"
    >
      <NavBar />
    </Flex>
  );
};
export default Header;
