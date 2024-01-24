"use client";
import type { UserProfileProps } from "./UserProfile.types";
import { Avatar, Flex, Text, useColorMode } from "@chakra-ui/react";

const UserProfile = ({ size }: UserProfileProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <Avatar
        color={
          colorMode === "light"
            ? "light.userProfile.border"
            : "dark.userProfile.border"
        }
        border="2px solid"
        size={size}
        src={`${process.env.IMAGE_URI}/profile/profile.jpg`}
      />
      <Text size="2xl" color="white" mt={1} fontWeight="bold">
        문준영
      </Text>
      <Text size="2xl" color="white">
        Front-End Developer
      </Text>
    </Flex>
  );
};
export default UserProfile;
