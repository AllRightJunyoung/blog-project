"use client";
import type { CategoryTagProps } from "./CategoryTag.types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CategoryTagState, currentPageState } from "@/recoil/home";
import { Tag, TagLabel, useColorMode } from "@chakra-ui/react";

const CategoryTag = ({ name }: CategoryTagProps) => {
  const [categoryTag, setCategoryTag] = useRecoilState(CategoryTagState);
  const setCurrentPage = useSetRecoilState(currentPageState);
  const { colorMode } = useColorMode();

  const handleTag = () => {
    setCategoryTag(name);
    setCurrentPage(1);
  };

  return (
    <Tag
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
      onClick={handleTag}
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
