import { Input, Flex } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <Flex>
      <Input
        placeholder="검색"
        _placeholder={{ color: "SearchBar.fontColor" }}
        color="white"
        margin={5}
        size="lg"
        background="SearchBar.background"
        borderRadius="xl"
        border="none"
        focusBorderColor="SearchBar.background"
        width="30%"
      />
    </Flex>
  );
};

export default SearchBar;
