"use client";

import { Avatar, Flex, Text } from "@chakra-ui/react";
const UserProfile = () => {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <Avatar size="2xl" border="7px solid #357276" />
      <Text size="xl" color="white" mt={1} fontWeight="bold">
        문준영
      </Text>
      <Text size="xl" color="white">
        Front-End Developer
      </Text>
    </Flex>
  );
};
export default UserProfile;
