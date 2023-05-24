import { Text, Divider, Flex } from "@chakra-ui/react";
import type { HeaderTextProps } from "./HeaderText.types";
const HeaderText = ({ title, fontSize }: HeaderTextProps) => {
  return (
    <Flex flexDirection="column">
      <Text fontSize={fontSize} marginLeft={5}>
        {title}
      </Text>
      <Divider color="blog.divider.color" border="1px" />
    </Flex>
  );
};

export default HeaderText;
