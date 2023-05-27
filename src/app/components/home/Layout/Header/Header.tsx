"use client";

import { Link, Flex } from "@chakra-ui/react";
import { NavBar } from "@/app/components/common";

const Header = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="NavBar.background"
      position="sticky"
      height="50px"
      width="100vw"
    >
      <NavBar />
    </Flex>
  );
};
export default Header;
