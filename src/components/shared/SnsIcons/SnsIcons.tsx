"use client";

import { Avatar, AvatarGroup, useColorMode } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import Image from "next/image";

const SnsIcons = () => {
  const { colorMode } = useColorMode();

  return (
    <AvatarGroup spacing="1rem">
      <Link as={NextLink} href="http://instagram.com" target="_blank">
        <Avatar
          icon={
            <Image
              src={
                colorMode === "light"
                  ? "/icons/instagram.svg"
                  : "/icons/instagramdark.svg"
              }
              width={50}
              height={50}
              alt="인스타그램 이동 링크"
            />
          }
          bg={
            colorMode === "light"
              ? "light.snsIcons.background"
              : "dark.snsIcons.background"
          }
          color={
            colorMode === "light"
              ? "light.snsIcons.border"
              : "dark.snsIcons.border"
          }
          border="1px solid"
          cursor="pointer"
        />
      </Link>
      <Link as={NextLink} href="http://linkedin.com" target="_blank">
        <Avatar
          icon={
            <Image
              src={
                colorMode === "light"
                  ? "/icons/linkedIn.svg"
                  : "/icons/linkedindark.svg"
              }
              width={50}
              height={50}
              alt="링크드 인 이동 링크"
            />
          }
          bg={
            colorMode === "light"
              ? "light.snsIcons.background"
              : "dark.snsIcons.background"
          }
          border="1px solid"
          color={
            colorMode === "light"
              ? "light.snsIcons.border"
              : "dark.snsIcons.border"
          }
          cursor="pointer"
        />
      </Link>
      <Link
        as={NextLink}
        href="https://github.com/allrightjunyoung"
        target="_blank"
      >
        <Avatar
          icon={
            <Image
              src={
                colorMode === "light"
                  ? "/icons/github.svg"
                  : "/icons/githubdark.svg"
              }
              width={50}
              height={50}
              alt="깃허브 이동 링크"
            />
          }
          bg={
            colorMode === "light"
              ? "light.snsIcons.background"
              : "dark.snsIcons.background"
          }
          border="1px solid"
          color={
            colorMode === "light"
              ? "light.snsIcons.border"
              : "dark.snsIcons.border"
          }
          cursor="pointer"
        />
      </Link>
    </AvatarGroup>
  );
};

export default SnsIcons;
