import { useSetRecoilState } from "recoil";
import { SearchBarInputState } from "@/recoil/home";
import { Input, Flex } from "@chakra-ui/react";

const SearchBar = () => {
  const setSearchBarInput = useSetRecoilState(SearchBarInputState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarInput(e.target.value);
  };

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
        onChange={handleInput}
      />
      {/* <SearchIcon width="50" height="50" /> */}
    </Flex>
  );
};

export default SearchBar;
