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
              안녕하세요 프론트엔드 개발자를 꿈꾸는 문준영 입니다.
            </Highlight>
          </Text>
          <Text fontSize="18px" color="white" fontWeight="bold">
            상상한것을 코드로 구현했을때 즐거움을 느끼고 다른사람들에게 도움이
            되는 서비스를 만드는것을 지향합니다.
          </Text>
          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["함께"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              사람들과 커뮤니케이션 하며 함께 성장하는것을 좋아합니다.
            </Highlight>
          </Text>
          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["헬스케어"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              도메인은 헬스케어 부분을 선호하고 있습니다.
            </Highlight>
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
              query={["웨이트", "8년", "삼대중량", "500"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              취미는 아침마다 웨이트를 8년째 하고 있고 삼대중량 500이상을 치며
              보디빌딩 쇼를 보는것을 좋아합니다.
            </Highlight>
          </Text>
          <Text fontSize="18px" color="white" fontWeight="bold"></Text>
          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["웨이트", "등산", "8년"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              주말에 종종 등산을 하며 주변 경치를 보며 힐링하러 갑니다.
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
              query={["ReactNative", "TypeScript"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              서버 상태관리라이브러리 웹에서 발생하는 성능 문제 해결 사용자
              UI/UX 개선 ReactNative에 관심이있습니다
            </Highlight>
          </Text>
          <Text fontSize="18px" color="white" fontWeight="bold">
            <Highlight
              query={["애자일"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              업무방식은 워터풀 방식보다 빠르게 변화하는 애자일 한것을
              선호합니다.
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
