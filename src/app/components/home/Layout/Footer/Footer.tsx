"use client";

import { Flex, Box } from "@chakra-ui/react";
import { FooterMessage, SnsIcons, UserProfile } from "@/app/components/home";

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
