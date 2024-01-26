"use client";

import { DiaryPageType } from "@/types/diary";
import { Flex, Grid, Box } from "@chakra-ui/react";
import DiaryCard from "../DiaryCard/DiaryCard";
import { HorizontalHeading } from "@/components/shared";
import DiaryDateTag from "../DiaryDateTag";
import uuid from "react-uuid";

interface Props {
  data: DiaryPageType;
}

const DiaryMainLayout = ({ data }: Props) => {
  console.log(data);
  return (
    <Flex direction="column">
      <Box padding={5} textAlign="center">
        <HorizontalHeading title="일기장" fontSize="4xl" />
      </Box>
      <Flex padding={5} gap={2}>
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
