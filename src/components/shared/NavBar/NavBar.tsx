"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Flex, useColorMode, Button } from "@chakra-ui/react";

import NextLink from "next/link";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" id="nav-bar" as="nav" alignSelf="flex-end">
      <Flex
        gap={3}
        justifyContent="center"
        alignItems="center"
        marginRight={3}
        marginTop={1}
      >
        <Link as={NextLink} href="/" color="NavBar.fontColor" fontSize="xl">
          Home
        </Link>
        <Link
          as={NextLink}
          href="/about"
          color="NavBar.fontColor"
          fontSize="xl"
        >
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
        <Button onClick={toggleColorMode} background="none" padding="none">
          {colorMode === "light" ? (
            <SunIcon color="orange" />
          ) : (
            <MoonIcon color="yellow" />
          )}
        </Button>
      </Flex>
    </Flex>
  );
};
export default NavBar;
