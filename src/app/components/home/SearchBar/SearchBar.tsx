import { Input, Flex } from "@chakra-ui/react";
import SearchIcon from "public/search.svg";

const SearchBar = () => {
  return (
    <Flex flexDirection="row" alignItems="center">
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
      <SearchIcon width="50" height="50" />
    </Flex>
  );
};

export default SearchBar;
