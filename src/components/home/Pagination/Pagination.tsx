import { Circle, HStack } from "@chakra-ui/react";

const Pagination = () => {
  return (
    <HStack spacing={5} marginTop={1} marginBottom={10}>
      <Circle size="10" border="1px solid #73CECF" color="pagination.fontColor">
        1
      </Circle>
      <Circle size="10" border="1px solid #73CECF" color="white">
        2
      </Circle>
      <Circle size="10" border="1px solid #73CECF" color="white">
        3
      </Circle>
      <Circle size="10" border="1px solid #73CECF" color="white">
        4
      </Circle>
    </HStack>
  );
};

export default Pagination;
