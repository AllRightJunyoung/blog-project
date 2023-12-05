"use client";
import { SnsIcons, UserProfile } from "@/components/shared";
import {
  Flex,
  Heading,
  Text,
  Box,
  Highlight,
  useMediaQuery,
} from "@chakra-ui/react";

const AboutLayout = () => {
  const [isSmallerThan960] = useMediaQuery("(max-width: 960px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <>
      <Flex
        direction="row"
        padding={5}
        marginTop={7}
        justifyContent="space-between"
      >
        {!isSmallerThan960 ? (
          <Flex padding={6}>
            <UserProfile size="3xl" />
          </Flex>
        ) : (
          <></>
        )}
        <Flex direction="column" gap={2} marginLeft={5}>
          <Box marginBottom={10} textAlign="center">
            <Heading color="white">Introduction</Heading>
          </Box>
          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["문준영"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              안녕하세요 프론트엔드 개발자 문준영 입니다.
            </Highlight>
          </Text>
          <Text fontSize="18px" color="white" fontWeight="bold">
            상상한것을 코드로 구현했을때 즐거움을 느끼고 다른사람들에게 도움이
            되는 서비스를 만드는것을 지향합니다.
          </Text>

          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["MBTI", "ENFP"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              MBTI는 ENFP 입니다.
            </Highlight>
          </Text>
          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["웨이트", "등산", "8년"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              취미는 웨이트를 8년째 하고 있고 보디빌딩쇼를 보는것을 좋아합니다.
              그리고 주말에 종종 등산가는것을 좋아합니다.
            </Highlight>
          </Text>

          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["Next.js", "React", "TypeScript"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              사용가능한 기술스택은 Next.js React TypeScript 입니다.
            </Highlight>
          </Text>
          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["애자일"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              업무방식은 워터풀 방식보다 애자일 한것을 선호합니다.
            </Highlight>
          </Text>
        </Flex>
      </Flex>
      <Flex
        padding={10}
        marginTop={10}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          marginTop={10}
          direction="column"
          gap={3}
          alignItems="center"
          justifyContent="center"
        >
          {isSmallerThan960 && <UserProfile size="2xl" />}
          <SnsIcons />
          <Text padding={1} color="white" textAlign="center">
            2023 copyright 문준영 all rights reserved
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default AboutLayout;
