"use client";

import { GridItem, useColorMode, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";
import { CalendarIcon } from "@chakra-ui/icons";
import DiaryCardTag from "../DiaryCardTag";

import type { DiaryListType } from "@/types/diary";
import imageLoader from "@/lib/imageloader";
import uuid from "react-uuid";

const DiaryCard = ({ date, description, tags, thumbnail }: DiaryListType) => {
  const { colorMode } = useColorMode();

  return (
    <GridItem
      cursor="pointer"
      bg={
        colorMode === "light" ? "light.card.background" : "dark.card.background"
      }
      borderRadius="10px"
    >
      <Flex direction="column" fontWeight="bold">
        <Image
          alt={description}
          loader={imageLoader}
          src={thumbnail}
          sizes="100vw"
          width={200}
          height={150}
          style={{
            width: "100%",
            height: "auto",
            border: "1px solid gray",
            borderRadius: "7px",
          }}
        />
        <Flex direction="column" color="white">
          <Flex paddingLeft={2} marginTop={6} gap={2}>
            {tags.map((name) => {
              return <DiaryCardTag key={uuid()} name={name} />;
            })}
          </Flex>
          <Flex alignItems="center" alignSelf="flex-end">
            <CalendarIcon />
            <Text fontSize="md" padding={3}>
              {date}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default DiaryCard;
