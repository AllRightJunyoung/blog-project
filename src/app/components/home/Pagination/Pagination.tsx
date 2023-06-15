import { Circle, HStack } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { PaginationState, currentPageState } from "../recoil";
import uuid from "react-uuid";

const Pagination = () => {
  const posts = useRecoilValue(PaginationState);
  const circles = createCircle(posts);

  return (
    <HStack spacing={5} marginBottom={10}>
      {circles.map((circle) => {
        return circle;
      })}
    </HStack>
  );
};

const createCircle = (posts: any[]) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const pageLength = posts.length <= 4 ? 1 : Math.ceil(posts.length / 4);
  const circles = [];

  for (let i = 0; i < pageLength; i++) {
    circles.push(
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
  return circles;
};

export default Pagination;
