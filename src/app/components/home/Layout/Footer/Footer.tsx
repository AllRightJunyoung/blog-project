"use client";

import { Flex, Box } from "@chakra-ui/react";
import { FooterMessage } from "@/app/components/home";
import { SnsIcons, UserProfile } from "@/app/components/common";
const Footer = () => {
  return (
    <Flex direction="column" alignItems="center" marginTop={10} as="footer">
      <Box margin={10}>
        <UserProfile />
        <Box marginTop={5}>
          <SnsIcons />
        </Box>
      </Box>
      <FooterMessage />
    </Flex>
  );
};
export default Footer;
