"use client";

import { DiaryPageType } from "@/types/diary";
import { Flex, Grid, Box } from "@chakra-ui/react";
import DiaryCard from "../DiaryCard/DiaryCard";
import { HorizontalHeading } from "@/components/shared";
import DiaryTag from "../DiaryTag";

interface Props extends DiaryPageType {
  date: string[];
}

const DiaryMainLayout = ({ date, list }: Props) => {
  return (
    <Flex direction="column">
      <Box padding={5} textAlign="center">
        <HorizontalHeading title="일기장" fontSize="4xl" />
      </Box>
      <Flex padding={5} gap={2}>
        <DiaryTag year={2024} month={1} />
        <DiaryTag year={2024} month={2} />
        <DiaryTag year={2024} month={3} />
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
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
      </Grid>
    </Flex>
  );
};

export default DiaryMainLayout;
