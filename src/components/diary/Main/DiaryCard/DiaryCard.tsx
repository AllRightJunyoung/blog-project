import { GridItem, useColorMode, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";
import { CalendarIcon } from "@chakra-ui/icons";
import DiaryCardTag from "../DiaryCardTag";

const DiaryCard = () => {
  const { colorMode } = useColorMode();

  return (
    <GridItem
      bg={
        colorMode === "light" ? "light.card.background" : "dark.card.background"
      }
      borderRadius="10px"
    >
      <Flex direction="column" fontWeight="bold">
        <Image
          alt=""
          // loader={imageLoader}
          src=""
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
            <DiaryCardTag name="기록" />
            <DiaryCardTag name="기록" />
            <DiaryCardTag name="기록" />
          </Flex>
          <Flex alignItems="center" alignSelf="flex-end">
            <CalendarIcon />
            <Text fontSize="md" padding={3}>
              January 25, 2024
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default DiaryCard;
