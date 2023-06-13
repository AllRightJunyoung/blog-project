"use client";

import { Flex, Text, Divider } from "@chakra-ui/react";
import type { HeadingProps } from "./Heading";

const Heading = ({ title, fontSize }: HeadingProps) => {
  return (
    <Flex flexDirection="column">
      <Text fontSize={fontSize} color="white" fontWeight="bold">
        {title}
      </Text>
      <Divider color="divider.color" border="1px" />
    </Flex>
  );
};

export default Heading;
