import { VStack, Text, Input, RadioGroup, Stack, Radio, Button } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Contact() {
    
    return <Layout>
        <VStack py="140px" bg={"gray.400"} minH={'100vh'} w={'full'} alignItems={'flex-start'} px={4} spacing={6}>
            <Text fontWeight={700} fontSize={20}>
                무료상담신청
            </Text>
        <VStack w={'full'} alignItems={'flex-start'}>
            <Text fontWeight={'600'}>Name</Text>
            <Input bg={"gray.100"} placeholder="이름을 입력해 주세요"></Input>
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'}>
            <Text fontWeight={'600'}>Number</Text>
            <Input bg={"gray.100"} placeholder="연락처를 입력해 주세요"></Input>
        </VStack>
        <VStack w={'full'} alignItems={'flex-start'}>
            <Text fontWeight={'600'}>E-Mail</Text>
            <Input bg={"gray.100"} placeholder="이메일을 입력해 주세요"></Input>
        </VStack>
        <RadioGroup>
            <Stack direction={'row'}>
                <Radio value="1">남성</Radio>
                <Radio value="2">여성</Radio>
            </Stack>
        </RadioGroup>
        <Button colorScheme="blue">전송하기</Button>
        </VStack>
    </Layout>
}