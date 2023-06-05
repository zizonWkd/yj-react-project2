import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
    return (
    <Layout>
        <VStack py="140px" bg={"gray.400"} minH={'100vh'} w={'full'} alignItems={'center'} px={4} spacing={6}>
            <VStack spacing={6}>
            <Avatar src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
            size={"xl"} color={'black'} bg={'white'} name="김세윤" 
            />
            <VStack spacing={0}>
                <Text fontSize={20} fontWeight={600}>김세윤</Text>
                <Text fontSize={14}>풀스텍 개발자를 꿈꾸는 김세윤</Text>
            </VStack>
            <HStack w={'80%'} spacing={4}>
                <Box border={'1px'} rounded={'xl'} px={'20px'} py={'1'} w={'120px'} textAlign={'center'} color={'yellow.600'}>Contact</Box>
                <Box border={'1px'} rounded={'xl'} px={'20px'} py={'1'} w={'120px'} textAlign={'center'} color={'red.600'}>Follow</Box>
            </HStack>
            </VStack>
        </VStack>
    </Layout>
    );
}
