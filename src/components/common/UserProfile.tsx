import { Avatar } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
const UserProfile = () => {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <Avatar size="2xl" />
      <Text size="xl">문준영</Text>
      <Text size="xl">Front-end Developer</Text>
    </Flex>
  );
};
export default UserProfile;
