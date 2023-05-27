"use client";

import { UserProfile } from "@/app/components/common";
import { Box } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box margin={10}>
      <UserProfile />
    </Box>
  );
};

export default Nav;
