import { UserProfile, SnsIcons } from "@/components/shared";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        marginTop={10}
        direction="column"
        gap={3}
        alignItems="center"
        justifyContent="center"
      >
        <UserProfile size="2xl" />
        <SnsIcons />
        <Text padding={1} color="white" textAlign="center">
          2023 copyright 문준영 all rights reserved
        </Text>
      </Flex>
    </Flex>
  );
};
export default Footer;
