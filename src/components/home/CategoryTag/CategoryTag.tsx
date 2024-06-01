"use client";

import { useRecoilState, useSetRecoilState } from "recoil";
import { CategoryTagState, currentPageState } from "@/recoil/home";
import { Tag, TagLabel, useColorMode } from "@chakra-ui/react";

interface Props {
  name: string;
}

const CategoryTag = ({ name }: Props) => {
  const [categoryTag, setCategoryTag] = useRecoilState(CategoryTagState);
  const setCurrentPage = useSetRecoilState(currentPageState);
  const { colorMode } = useColorMode();

  const handleClick = () => {
    setCategoryTag(name);
    setCurrentPage(1);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      setCategoryTag(name);
      setCurrentPage(1);
    }
  };

  return (
    <Tag
      tabIndex={0}
      size="lg"
      key="lg"
      variant="solid"
      background={
        categoryTag === name
          ? colorMode === "light"
            ? "light.tag.active.background"
            : "dark.tag.active.background"
          : colorMode === "light"
            ? "light.tag.inactive.background"
            : "dark.tag.inactive.background"
      }
      borderRadius={10}
      cursor="pointer"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <TagLabel
        color={
          categoryTag === name
            ? colorMode === "light"
              ? "light.tag.active.fontColor"
              : "dark.tag.active.fontColor"
            : colorMode === "light"
              ? "light.tag.inactive.fontColor"
              : "dark.tag.inactive.fontColor"
        }
        fontSize="md"
      >
        {name}
      </TagLabel>
    </Tag>
  );
};
export default CategoryTag;
