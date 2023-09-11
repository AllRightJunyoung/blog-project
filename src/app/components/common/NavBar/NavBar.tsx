"use client";

import { Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

const NavBar = () => {
  return (
    <Flex
      gap="20px"
      alignSelf="flex-end"
      padding="10px"
      marginEnd="5"
      id="nav-bar"
    >
      <Flex>
        <Link as={NextLink} href="/" color="NavBar.fontColor" fontSize="xl">
          Home
        </Link>
      </Flex>
      <Link as={NextLink} href="/about" color="NavBar.fontColor" fontSize="xl">
        About
      </Link>
      <Link
        as={NextLink}
        href="/project"
        color="NavBar.fontColor"
        fontSize="xl"
      >
        Project
      </Link>
    </Flex>
  );
};
export default NavBar;
