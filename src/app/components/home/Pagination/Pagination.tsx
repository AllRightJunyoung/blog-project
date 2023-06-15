import { Circle, HStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
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
  const currentPage = useRecoilValue(currentPageState);
  const pageLength = allpost.length <= 4 ? 1 : Math.floor(allpost.length / 4);
  const circles = [];
  for (let i = 0; i < pageLength; i++) {
    circles.push(
      <Circle
        size="10"
        border="1px solid #73CECF"
        color={currentPage === i + 1 ? "pagination.fontColor" : "white"}
        key={uuid()}
      >
        {i + 1}
      </Circle>,
    );
  }
  return circles;
};

export default Pagination;
