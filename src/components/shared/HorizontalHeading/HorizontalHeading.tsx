"use client";

import { Flex, Text, Divider } from "@chakra-ui/react";
import type { TypographyProps } from "@chakra-ui/react";
interface Props {
  title: string;
  fontSize: TypographyProps["fontSize"];
}

const HorizontalHeading = ({ title, fontSize }: Props) => {
  return (
    <Flex flexDirection="column">
      <Text fontSize={fontSize} color="white" fontWeight="bold">
        {title}
      </Text>
      <Divider color="divider.color" border="1px" />
    </Flex>
  );
};

export default HorizontalHeading;
