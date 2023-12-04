"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Flex, useColorMode, Button } from "@chakra-ui/react";
import Image from "next/image";
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
          <Image src="/house" width={32} height={32} alt="house-icon" />
        </Link>
        <Link
          as={NextLink}
          href="/about"
          color="NavBar.fontColor"
          fontSize="xl"
        >
          <Image src="/about" width={32} height={32} alt="house-icon" />
        </Link>
        <Link
          as={NextLink}
          href="/project"
          color="NavBar.fontColor"
          fontSize="xl"
        >
          <Image src="/project" width={32} height={32} alt="house-icon" />
        </Link>
        <Button onClick={toggleColorMode} background="none" padding={1}>
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
