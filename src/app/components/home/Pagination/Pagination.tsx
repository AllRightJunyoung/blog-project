import { Circle, HStack } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AllPostState, currentPageState } from "../recoil";
import uuid from "react-uuid";

const Pagination = () => {
  const allpost = useRecoilValue(AllPostState);
  const circles = createCircle(allpost);

  return (
    <HStack spacing={5} marginBottom={10}>
      {circles.map((circle) => {
        return circle;
      })}
    </HStack>
  );
};

const createCircle = (allpost: any[]) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const pageLength = allpost.length <= 4 ? 1 : Math.round(allpost.length / 4);
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
