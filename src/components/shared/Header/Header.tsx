"use client";

import { Flex, useColorModeValue } from "@chakra-ui/react";
import { NavBar } from "@/components/shared";

const Header = () => {
  const bg = useColorModeValue(
    "light.header.background",
    "dark.header.background",
  );
  return (
    <Flex
      flexDirection="column"
      backgroundColor={bg}
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
