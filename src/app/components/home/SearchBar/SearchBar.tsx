import { Input, Flex } from "@chakra-ui/react";
import SearchIcon from "public/icons/search.svg";

const SearchBar = () => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      marginTop={5}
      marginBottom={5}
      gap={1}
    >
      <Input
        placeholder="검색"
        _placeholder={{ color: "SearchBar.fontColor" }}
        color="white"
        size="lg"
        background="SearchBar.background"
        borderRadius="xl"
        border="none"
        focusBorderColor="SearchBar.background"
        width={500}
      />
      <SearchIcon width="50" height="50" />
    </Flex>
  );
};

export default SearchBar;
