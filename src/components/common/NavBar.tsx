import { Link, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const NavBar = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="#293C4A"
      position="sticky"
      height="50px"
      marginBottom="30px"
    >
      <Flex gap="20px" alignSelf="flex-end" padding="10px" marginEnd="5">
        <Link as={NextLink} href="/home" color="white" fontSize="xl">
          Home
        </Link>
        <Link as={NextLink} href="/about" color="white" fontSize="xl">
          About
        </Link>
        <Link as={NextLink} href="/project" color="white" fontSize="xl">
          Project
        </Link>
      </Flex>
    </Flex>
  );
};
export default NavBar;
