import { useSetRecoilState } from "recoil";
import { SearchBarInputState } from "@/recoil/home";
import { Input, Flex, useColorModeValue, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const SearchBar = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue(
    "light.searchBar.background",
    "dark.searchBar.background",
  );
  const color = useColorModeValue(
    "light.searchBar.fontColor",
    "dark.searchBar.fontColor",
  );

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
        _placeholder={{ color }}
        color={color}
        size="lg"
        background={bg}
        borderRadius="xl"
        border="none"
        focusBorderColor={bg}
        width={500}
        onChange={handleInput}
      />
      {colorMode === "dark" ? (
        <Image
          src="/icons/post/darksearch"
          width="50"
          height="50"
          alt="search-icon"
        />
      ) : (
        <Image
          src="/icons/post/search"
          width="50"
          height="50"
          alt="search-icon"
        />
      )}
    </Flex>
  );
};

export default SearchBar;
