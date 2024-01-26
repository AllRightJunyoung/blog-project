"use client";

import { DiaryPageType } from "@/types/diary";
import { Flex, Grid } from "@chakra-ui/react";
import DiaryCard from "../DiaryCard/DiaryCard";
import DiaryDateTag from "../DiaryDateTag";
import uuid from "react-uuid";

interface Props {
  data: DiaryPageType;
}

const DiaryMainLayout = ({ data }: Props) => {
  return (
    <Flex direction="column">
      <Flex padding={10} gap={2}>
        {data.date.map((value) => {
          return <DiaryDateTag key={uuid()} name={value} />;
        })}
      </Flex>

      <Grid
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={10}
        padding={5}
      >
        {data.list.map((info) => {
          return (
            <DiaryCard
              slug={info.slug}
              key={uuid()}
              description={info.description}
              date={info.date}
              tags={info.tags}
              thumbnail={info.thumbnail}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default DiaryMainLayout;
