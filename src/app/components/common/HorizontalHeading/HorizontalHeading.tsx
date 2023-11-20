"use client";
import { Flex, Text, Divider } from "@chakra-ui/react";
import type { HorizontalHeadingProps } from "./HorizontalHeading.types";

const HorizontalHeading = ({ title, fontSize }: HorizontalHeadingProps) => {
  return (
    <Flex flexDirection="column" as="h1">
      <Text fontSize={fontSize} color="white" fontWeight="bold">
        {title}
      </Text>
      <Divider color="divider.color" border="1px" />
    </Flex>
  );
};

export default HorizontalHeading;
