"use client";

import uuid from "react-uuid";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageState, PaginationPostState } from "@/recoil/home";
import type { ColorMode } from "@chakra-ui/react";
import {
  Circle,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Pagination = () => {
  const { colorMode } = useColorMode();

  const posts = useRecoilValue(PaginationPostState);
  const paginationCircles = CreatePaginationCircle(posts, colorMode);

  return (
    <HStack spacing={5} marginBottom={10}>
      {posts.length > 0 ? (
        paginationCircles.map((paginationCircle) => {
          return paginationCircle;
        })
      ) : (
        <Circle
          size="10"
          border="1px solid"
          color={
            colorMode === "light"
              ? "light.pagination.border"
              : "dark.pagination.border"
          }
          opacity={0}
          key={uuid()}
          cursor="pointer"
        ></Circle>
      )}
    </HStack>
  );
};

const CreatePaginationCircle = (posts: unknown[], colorMode: ColorMode) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const color = useColorModeValue(
    "light.pagination.border",
    "dark.pagination.border",
  );

  const pageLength = posts.length <= 4 ? 1 : Math.ceil(posts.length / 4);
  const paginationCircles = [];

  for (let i = 0; i < pageLength; i++) {
    paginationCircles.push(
      <Circle
        size="10"
        color={
          colorMode === "light"
            ? "light.pagination.border"
            : "dark.pagination.border"
        }
        border="1px solid"
        opacity={currentPage === i + 1 ? 1 : 0.5}
        key={uuid()}
        cursor="pointer"
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </Circle>,
    );
  }
  return paginationCircles;
};

export default Pagination;
