"use client";

import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import Image from "next/image";
import cloudinaryLoader from "@/app/lib/cloudinaryLoader";

const SnsIcons = () => {
  return (
    <AvatarGroup spacing="1rem">
      <Link as={NextLink} href="http://instagram.com" target="_blank">
        <Avatar
          icon={
            <Image
              src="icons/profile/instagram"
              width={50}
              height={50}
              loader={cloudinaryLoader}
              alt="instagram-Icon"
            />
          }
          bg="#357276"
          border="1px solid #357276"
          cursor="pointer"
        />
      </Link>
      <Link as={NextLink} href="http://linkedin.com" target="_blank">
        <Avatar
          icon={
            <Image
              src="icons/profile/linkedIn"
              width={50}
              height={50}
              loader={cloudinaryLoader}
              alt="linkedIn-Icon"
            />
          }
          bg="#357276"
          border="1px solid #357276"
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
              src="icons/profile/github"
              width={50}
              height={50}
              loader={cloudinaryLoader}
              alt="github-icon"
            />
          }
          bg="#357276"
          border="1px solid #357276"
          cursor="pointer"
        />
      </Link>
    </AvatarGroup>
  );
};

export default SnsIcons;
