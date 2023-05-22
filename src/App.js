import { CloseButton, Spinner, Stack, Checkbox, Button, Text, Box, VStack, position, HStack, Center, Grid, GridItem, Img } from '@chakra-ui/react'
import {HiArrowSmDown} from "react-icons/hi"
import {FaHome} from "react-icons/fa"
import {ImProfile} from "react-icons/im"
import {AiFillPhone} from "react-icons/ai"

const dataTour = [
  {text:"6월 이벤트", image:"https://images.unsplash.com/photo-1555281614-8d58d2611325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
  {text:"7월 이벤트", image:"https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"},
  {text:"8월 이벤트", image:"https://images.unsplash.com/photo-1583091618471-56becbdb1c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1532&q=80"},
];

const jjijji = [
  {text:"에라 모르겠다", image:"https://images.unsplash.com/photo-1555281614-8d58d2611325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
  {text:"맨정신이 난 싫어", image:"https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"},
  {text:"아무것도 할 수가 없어", image:"https://images.unsplash.com/photo-1583091618471-56becbdb1c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1532&q=80"},
  {text:"몰루?", image:"https://images.unsplash.com/photo-1583091618471-56becbdb1c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1532&q=80"},
]

function App() {
  return (
    <>
      <Box w={'full'} display="flex" justifyContent={'center'}>
        <VStack w={'sm'}>
          {/*헤더*/}
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'} 
            w={'inherit'}
            h={'120px'}
            bg={'yellow.200'} 
            position={'fixed'} 
            top={0}
          >
              <HiArrowSmDown size={32} color="red" />
            </Box>
            {/*본문*/}
          <VStack spacing={8} w={'inherit'} padding={'140px'} px={4} alignItems={'flex-start'}>
            {/*최신상품 컨테이너*/}
            <VStack w={'full'} alignItems={'flex-start'}>
            <Text fontWeight={600} fontSize={24}>
              최신상품
            </Text>
            <Grid gridTemplateColumns={'repeat(2, 1fr)'} w={'full'} gap={4}>
            {jjijji.map((itemm, index) => (
              <GridItem 
              key={index}
                h={'200px'}
                border={'1px'}
                rounded={"md"}
                borderColor={'gray'}
                backgroundImage={`url(${itemm.image})`}
                backgroundPosition={'center'}
                backgroundSize={'cover'}
                position={'relative'}
                overflow={'hidden'}
              >
                <Box position={'absolute'} top={0} left={0} w={'full'} h={'full'}>
                  <Text color={'white'} position={'absolute'} w={'full'} bottom={'0'} align={'center'} py={4} fontWeight={'600px'}>
                    {itemm.text}
                  </Text>
                </Box>
                </GridItem>
                
                ))}
                </Grid>
              
            
            </VStack>
            
            {/*이벤트 컨테이너*/}
            <VStack w={'full'} alignItems={'flex-start'}>
            <Text fontWeight={600} fontSize={24}>
              이벤트
            </Text>
            <Grid gap={4} w={'full'}>
              {dataTour.map((item, i) => (
                <GridItem
                key={i}
                rounded={'lg'}
                w={'full'} 
                h={'120px'} 
                bg={'yellow.200'}
                backgroundImage={`url(${item.image})`}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                position={'relative'}
              >
                <Box bgGradient={'liner(to-b, rgba(255, 255, 255, 0.4))'}>
                  <Text
                    position={'absolute'} 
                    top={'50%'}
                    left={'50%'}
                    transform={'translate(-50%, -50%)'}
                    fontWeight={600}
                    fontSize={'15'}
                    color={'yellow.200'}
                    
                  >
                    {item.text}
                  </Text>
                </Box>
              </GridItem>
              ))}
              
              
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
            </Grid>
            </VStack>
          </VStack>
          <Box w={'inherit'} h={'120px'} bg={'red.200'} position={'fixed'} bottom={0}>
              <HStack h={'inherit'} justifyContent={'space-between'} alignItems={'Center'}>
                <VStack w={'full'}>
                  <FaHome/>
                  <Text>홈</Text>
                </VStack>
                <VStack w={'full'}>
                  <ImProfile/>
                  <Text>프로필</Text>
                </VStack>
                <VStack w={'full'}>
                  <AiFillPhone/>
                  <Text>연락처</Text>
                </VStack>
              </HStack>
            </Box>
        </VStack>
      </Box>
    </>
  );
}

export default App;
