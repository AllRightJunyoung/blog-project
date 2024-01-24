"use client";

import { Flex, Box, Heading, Highlight, Text } from "@chakra-ui/react";

const MyInfo = () => {
  return (
    <Flex direction="row" padding={5} justifyContent="center" marginTop={5}>
      <Flex
        direction="column"
        border="1px solid white"
        padding={10}
        borderRadius={7}
      >
        <Box textAlign="center" marginBottom={10}>
          <Heading color="white">Introduction</Heading>
        </Box>

        <Flex
          direction="column"
          gap={2}
          fontSize={{ lg: "lg", sm: "md" }}
          color="white"
          fontWeight="bold"
        >
          <Text>
            <Highlight
              query={["문준영"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              안녕하세요 프론트엔드 개발자 문준영 입니다.
            </Highlight>
          </Text>
          <Text>
            <Highlight
              query={["코드", "서비스"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              상상한것을 코드로 구현했을때 즐거움을 느끼고 다른사람들에게 도움이
              되는 서비스를 만드는것을 지향합니다.
            </Highlight>
          </Text>
          <Text>
            <Highlight
              query={["코드없는", "지양"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              코드없는 이론 공부를 지양합니다.
            </Highlight>
          </Text>
          <Text>
            <Highlight
              query={[" 논리적인 사고력", "알고리즘"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              논리적인 사고력을 키우기 위해 알고리즘 플랫폼 사이트에서 백준
              400문제이상 릿코드 100문제이상 달리고있습니다.
            </Highlight>
          </Text>
          <Text>
            <Highlight
              query={["함께", "공유"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              사람들과 공유 하며 함께 성장하는것을 좋아합니다.
            </Highlight>
          </Text>
          <Text>
            <Highlight
              query={["ENFP"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              MBTI는 ENFP 입니다.
            </Highlight>
          </Text>
          <Text>
            <Highlight
              query={["웨이트", "8년", "500"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              취미는 아침마다 웨이트를 8년째 꾸준히 하고 있고 삼대중량 500이상을
              보유 하고있습니다.
            </Highlight>
          </Text>
          <Text></Text>
          <Text>
            <Highlight
              query={["웨이트", "등산", "8년"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              주말에 종종 등산을 하며 주변 경치를 보며 힐링하러 갑니다.
            </Highlight>
          </Text>

          <Text>
            <Highlight
              query={["Next.js", "React", "TypeScript"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
            >
              현재 사용해본 주요 기술스택은 Next.js React TypeScript 입니다.
            </Highlight>
          </Text>
          <Text>
            웹에서 발생하는 성능 최적화 사용자 UI/UX 개선 ReactNative에
            관심이있습니다
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default MyInfo;
