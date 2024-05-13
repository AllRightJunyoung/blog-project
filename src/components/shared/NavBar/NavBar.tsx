"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Flex, useColorMode, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

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
        <Link as={NextLink} href="/" fontSize="xl" fontWeight="bold">
          Home
        </Link>
        <Link
          as={NextLink}
          href="/introduction"
          fontSize="xl"
          fontWeight="bold"
        >
          Introduction
        </Link>
        <Link as={NextLink} href="/diary" fontSize="xl" fontWeight="bold">
          Diary
        </Link>

        <Button
          onClick={toggleColorMode}
          background="none"
          padding={1}
          aria-label="다크모드 라이트모드 전환 버튼"
        >
          {colorMode === "light" ? (
            <SunIcon color="orange" />
          ) : (
            <MoonIcon color="yellow" />
          )}
        </Button>
        <Link
          as={NextLink}
          target="_blank"
          href="/rss.xml"
          fontSize="xl"
          fontWeight="bold"
        >
          <Image
            src="/icons/rss.svg"
            width="30"
            height="30"
            alt="RSS 구독 버튼"
          />
        </Link>
      </Flex>
    </Flex>
  );
};
export default NavBar;
