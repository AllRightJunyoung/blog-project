"use client";

import { throttle } from "@/utils/shared/throttle";
import { Box } from "@chakra-ui/react";
import { Line } from "rc-progress";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = throttle(() => {
    const scrollY = window.scrollY; // 현재 위치 값

    const { scrollHeight, clientHeight } = document.documentElement; // 스크롤바가 차지하는 공간 제외 높이 계산

    if (scrollY === 0) {
      return setWidth(0);
    }
    const windowHeight = scrollHeight - clientHeight;
    const currentPercent = scrollY / windowHeight;
    setWidth(currentPercent * 100);
  }, 200);

  useEffect(() => {
    window.document.documentElement.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box position="sticky" top={0} left={0} zIndex={9999}>
      <Line
        strokeColor="teal"
        trailWidth={1}
        strokeWidth={0.5}
        strokeLinecap="butt"
        percent={width}
      ></Line>
    </Box>
  );
};

export default ProgressBar;
