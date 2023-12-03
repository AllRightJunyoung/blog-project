"use client";
import type { UserProfileProps } from "./UserProfile.types";
import { Avatar, Flex, Text } from "@chakra-ui/react";
const UserProfile = ({ size }: UserProfileProps) => {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <Avatar
        border="4px solid #357276"
        size={size}
        src="https://res.cloudinary.com/junyoung/image/upload/v1701588171/profile_1_vqchbm.jpg"
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
