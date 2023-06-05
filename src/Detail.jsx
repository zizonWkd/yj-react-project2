import { Box, VStack, Image, Text } from "@chakra-ui/react";
import Layout from "./Layout";
import KakaoMap from "./KakaoMap";

export default function Detail() {
  return (
    <Layout canGoBack={true} title="디테일 페이지">
      <VStack py="110px" bg={'gray.800'} w={'full'}>
        <Box>
          <Image src='https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'/>
        </Box>
        <VStack w={'full'} alignItems={'flex-start'} px={4} spacing={1}>
          <Text color="white" fontWeight={700}>대구 스파벨리</Text>
          <Text color={'white'}>대구 최고의 여름 테마파크</Text>
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'} px={4} spacing={1}>
          <Text color="white" fontWeight={600}>운영시간</Text>
          <Text color={'white'}>10:00 ~ 17:00</Text>
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'} px={4} spacing={1}>
          <Text color="white" fontWeight={600}>입장인원</Text>
          <Text color={'white'}>120명</Text>
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'} px={4} spacing={1}>
          <Text color="white" fontWeight={600}>이용요금</Text>
          <Text color={'white'}>20,000원</Text>
        </VStack>
        {/* 카카오맵 */}
        <KakaoMap />
      </VStack>
    </Layout>
  );
}
