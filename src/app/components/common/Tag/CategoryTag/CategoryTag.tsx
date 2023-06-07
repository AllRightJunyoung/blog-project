import { Tag, TagLabel } from "@chakra-ui/react";
import type { CategoryTagProps } from "./CategoryTag.types";
const CategoryTag = ({ name, active }: CategoryTagProps) => {
  return (
    <Tag
      size="lg"
      key="lg"
      variant="solid"
      background={active ? "tag.active.background" : "tag.inactive.background"}
      borderRadius={10}
    >
      <TagLabel
        color={active ? "tag.active.fontColor" : "tag.inactive.fontColor"}
        fontSize="md"
      >
        {name}
      </TagLabel>
    </Tag>
  );
};
export default CategoryTag;
