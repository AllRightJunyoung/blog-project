"use client";

import {
  Avatar,
  AvatarGroup,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import Image from "next/image";

const SnsIcons = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue(
    "light.snsIcons.background",
    "dark.snsIcons.background",
  );
  const color = useColorModeValue(
    "light.snsIcons.border",
    "dark.snsIcons.border",
  );

  return (
    <AvatarGroup spacing="1rem">
      <Link as={NextLink} href="http://instagram.com" target="_blank">
        <Avatar
          icon={
            <Image
              src={
                colorMode === "light"
                  ? "icons/profile/instagram"
                  : "icons/profile/instagramdark"
              }
              width={50}
              height={50}
              alt="instagram-Icon"
            />
          }
          bg={bg}
          color={color}
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
                  ? "icons/profile/linkedIn"
                  : "icons/profile/linkedindark"
              }
              width={50}
              height={50}
              alt="linkedIn-Icon"
            />
          }
          bg={bg}
          border="1px solid"
          color={color}
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
                  ? "icons/profile/github"
                  : "icons/profile/githubdark"
              }
              width={50}
              height={50}
              alt="github-icon"
            />
          }
          bg={bg}
          border="1px solid"
          color={color}
          cursor="pointer"
        />
      </Link>
    </AvatarGroup>
  );
};

export default SnsIcons;
