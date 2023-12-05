"use client";
import type { CategoryTagProps } from "./CategoryTag.types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CategoryTagState, currentPageState } from "@/recoil/home";
import { Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";

const CategoryTag = ({ name }: CategoryTagProps) => {
  const [categoryTag, setCategoryTag] = useRecoilState(CategoryTagState);
  const setCurrentPage = useSetRecoilState(currentPageState);

  const bgActive = useColorModeValue(
    "light.tag.active.background",
    "dark.tag.active.background",
  );

  const bgInActive = useColorModeValue(
    "light.tag.inactive.background",
    "dark.tag.inactive.background",
  );

  const activeColor = useColorModeValue(
    "light.tag.active.fontColor",
    "dark.tag.active.fontColor",
  );
  const inactiveColor = useColorModeValue(
    "light.tag.inactive.fontColor",
    "dark.tag.inactive.fontColor",
  );

  const handleTag = () => {
    setCategoryTag(name);
    setCurrentPage(1);
  };

  return (
    <Tag
      size="lg"
      key="lg"
      variant="solid"
      background={categoryTag === name ? bgActive : bgInActive}
      borderRadius={10}
      cursor="pointer"
      onClick={handleTag}
    >
      <TagLabel
        color={categoryTag === name ? activeColor : inactiveColor}
        fontSize="md"
      >
        {name}
      </TagLabel>
    </Tag>
  );
};
export default CategoryTag;
