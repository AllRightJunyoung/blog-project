import { Circle, HStack } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageState, PaginationPostState } from "../recoil";

import uuid from "react-uuid";

const Pagination = () => {
  const posts = useRecoilValue(PaginationPostState);
  const paginationCircles = createPaginationCircle(posts);

  if (posts.length === 0) {
    return <></>;
  }

  return (
    <HStack spacing={5} marginBottom={10}>
      {paginationCircles.map((paginationCircle) => {
        return paginationCircle;
      })}
    </HStack>
  );
};

const createPaginationCircle = (posts: any[]) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const pageLength = posts.length <= 4 ? 1 : Math.ceil(posts.length / 4);
  const paginationCircles = [];

  for (let i = 0; i < pageLength; i++) {
    paginationCircles.push(
      <Circle
        size="10"
        border="1px solid #73CECF"
        color={"pagination.fontColor"}
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
