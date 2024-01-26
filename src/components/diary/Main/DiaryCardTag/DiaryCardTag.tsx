"use client";

import { Tag, TagLabel } from "@chakra-ui/react";
import uuid from "react-uuid";

interface Props {
  name: string;
}

const DiaryCardTag = ({ name }: Props) => {
  return (
    <Tag size="md" key={uuid()} variant="solid" background="teal">
      <TagLabel color="white" fontSize="md">
        {name}
      </TagLabel>
    </Tag>
  );
};

export default DiaryCardTag;
