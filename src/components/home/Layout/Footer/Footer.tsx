import { Flex } from "@chakra-ui/react";
import { FooterMessage, Pagination } from "@/components/home";
import { SnsIcons } from "@/components/common";

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
