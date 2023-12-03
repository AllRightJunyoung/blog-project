"use client";
import { SnsIcons, UserProfile } from "@/components/shared";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";

const AboutLayout = () => {
  return (
    <>
      <Flex
        direction="row"
        padding={5}
        marginTop={7}
        justifyContent="space-between"
      >
        <Flex padding={6}>
          <UserProfile size="3xl" />
        </Flex>
        <Flex direction="column" gap={2}>
          <Box marginBottom={10} textAlign="center">
            <Heading color="white">Introduction</Heading>
          </Box>
          <Text fontSize="20px" color="white" fontWeight="bold">
            안녕하세요 프론트 엔드 개발자 문준영 입니다.
          </Text>
          <Text fontSize="20px" color="white" fontWeight="bold">
            상상한것을 코드로 구현했을때 즐거움을 느끼고, 다른사람들에게 도움이
            되는 서비스를 만드는것을 지향합니다.
          </Text>
          <Text fontSize="20px" color="white" fontWeight="bold">
            MBTI는 ENFP, 취미는 웨이트 트레이닝 등산 하는것을 좋아합니다.
          </Text>
          <Text fontSize="20px" color="white" fontWeight="bold">
            사용할수 있는 기술스택은 Next.js React TypeScript 입니다.
          </Text>
          <Text fontSize="20px" color="white" fontWeight="bold">
            개발지식을 폭 넓게 이해하기 위해 현재는 운영체제 네트워크 알고리즘을
            학습하며 부족한 CS지식을 기르고 있습니다.
          </Text>
          <Text fontSize="20px" color="white" fontWeight="bold">
            업무방식은 워터풀 방식보다 애자일 한것을 선호합니다.
          </Text>
        </Flex>
      </Flex>
      <Flex
        padding={10}
        marginTop={10}
        alignItems="center"
        justifyContent="center"
      >
        <Flex marginTop={10} direction="column" gap={3} alignItems="center">
          <SnsIcons />
          <Text padding={1} color="white">
            2023 copyright 문준영 all rights reserved
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default AboutLayout;
