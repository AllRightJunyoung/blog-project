"use client";
import { Flex } from "@chakra-ui/react";
import FeaturedPost from "../../FeaturedPost/FeaturedPost";

const Nav = () => {
  return (
    <nav>
      <Flex direction="column" alignItems="center" margin={5}>
        <FeaturedPost />
      </Flex>
    </nav>
  );
};

export default Nav;
