"use client";

import { GridItem, useColorMode, Flex, Text } from "@chakra-ui/react";
import type { DiaryType } from "@/types/diary";
import Image from "next/image";
import { CalendarIcon } from "@chakra-ui/icons";
import DiaryCardTag from "../DiaryCardTag";
import { useRouter } from "next/navigation";

import uuid from "react-uuid";

const DiaryCard = ({ date, description, tags, thumbnail, slug }: DiaryType) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <GridItem
      cursor="pointer"
      bg={
        colorMode === "light" ? "light.card.background" : "dark.card.background"
      }
      borderRadius="10px"
      onClick={() => router.push(`/diary/${slug}`)}
    >
      <Flex direction="column" fontWeight="bold">
        <Image
          alt={description}
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
