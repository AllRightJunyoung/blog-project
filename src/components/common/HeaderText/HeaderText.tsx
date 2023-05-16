import { Text, Divider, Flex } from "@chakra-ui/react";
import type { HeaderTextProps } from "./HeaderText.types";
const HeaderText = ({ title, fontSize }: HeaderTextProps) => {
  return (
    <Flex flexDirection="column">
      <Text fontSize={fontSize}>{title}</Text>
      <Divider color="white" border="1px" />
    </Flex>
  );
};

export default HeaderText;
