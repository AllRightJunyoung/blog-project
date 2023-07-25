"use client";

import { Avatar, AvatarGroup } from "@chakra-ui/react";
import GithubIcon from "public/icons/profile/github.svg";
import LinkedIn from "public/icons/profile/linkedIn.svg";
import Instagram from "public/icons/profile/instagram.svg";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";

const SnsIcons = () => {
  return (
    <AvatarGroup spacing="1rem">
      <Link
        as={NextLink}
        href="https://github.com/thegiantkiller"
        target="_blank"
      >
        <Avatar
          icon={<GithubIcon />}
          bg="#357276"
          border="1px solid #357276"
          cursor="pointer"
        />
      </Link>
      <Avatar
        icon={<LinkedIn />}
        bg="#357276"
        border="1px solid #357276"
        cursor="pointer"
      />
      <Avatar
        icon={<Instagram />}
        bg="#357276"
        border="1px solid #357276"
        cursor="pointer"
      />
    </AvatarGroup>
  );
};

export default SnsIcons;
