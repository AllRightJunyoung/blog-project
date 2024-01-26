"use client";

import uuid from "react-uuid";
import { Tag, TagLabel } from "@chakra-ui/react";

interface Props {
  name: string;
}

const DiaryDateTag = ({ name }: Props) => {
  return (
    <Tag
      size="lg"
      key={uuid()}
      variant="solid"
      background="teal"
      cursor="pointer"
    >
      <TagLabel color="white" fontSize="md">
        {name}
      </TagLabel>
    </Tag>
  );
};
export default DiaryDateTag;
