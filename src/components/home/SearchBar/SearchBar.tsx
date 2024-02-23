"use client";

import { useSetRecoilState } from "recoil";
import { SearchBarInputState } from "@/recoil/home";
import { Input, Flex, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const SearchBar = () => {
  const { colorMode } = useColorMode();

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
        _placeholder={{
          color:
            colorMode === "light"
              ? "light.searchBar.background"
              : "dark.searchBar.background",
        }}
        color={
          colorMode === "light"
            ? "light.searchBar.fontColor"
            : "dark.searchBar.fontColor"
        }
        size="lg"
        background={
          colorMode === "light"
            ? "light.searchBar.background"
            : "dark.searchBar.background"
        }
        borderRadius="xl"
        border="none"
        focusBorderColor={
          colorMode === "light"
            ? "light.searchBar.background"
            : "dark.searchBar.background"
        }
        width={500}
        onChange={handleInput}
      />
      {colorMode === "dark" ? (
        <Image
          src="/icons/darkSearch.svg"
          width="50"
          height="50"
          alt="search-icon"
        />
      ) : (
        <Image
          src="/icons/search.svg"
          width="50"
          height="50"
          alt="search-icon"
        />
      )}
    </Flex>
  );
};

export default SearchBar;
