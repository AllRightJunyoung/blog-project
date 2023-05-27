"use client";

import { Flex } from "@chakra-ui/react";
import { FooterMessage, Pagination } from "@/app/components/home";
import { SnsIcons } from "@/app/components/common";

const Footer = () => {
  return (
    <Flex direction="column" alignItems="center" marginTop={10}>
      <Pagination />
      <SnsIcons />
      <FooterMessage />
    </Flex>
  );
};
export default Footer;
