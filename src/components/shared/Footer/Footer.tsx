"use client";

import { Flex, Box, Text } from "@chakra-ui/react";
import { SnsIcons, UserProfile } from "@/components/home";

const Footer = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      marginTop={20}
      padding={10}
      as="footer"
    >
      <Box margin={10}>
        <UserProfile />
        <Box marginTop={5}>
          <SnsIcons />
        </Box>
      </Box>
      <Box>
        <Text fontSize="xs" color="white" margin={3}>
          2023 copyright 문준영 all rights reserved
        </Text>
      </Box>
    </Flex>
  );
};
export default Footer;
