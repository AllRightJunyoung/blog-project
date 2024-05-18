"use client";
import { Flex, Text, useColorMode, Image } from "@chakra-ui/react";

const UserProfile = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <Image
        color={
          colorMode === "light"
            ? "light.userProfile.border"
            : "dark.userProfile.border"
        }
        objectFit="cover"
        src="/profile/profile.jpg"
        borderRadius="full"
        boxSize="150px"
        alt="블로그 주인 프로필"
        border="2px solid"
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
