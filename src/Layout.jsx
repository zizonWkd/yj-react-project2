import { Text, Box, VStack, HStack } from '@chakra-ui/react'
import {HiArrowSmDown} from "react-icons/hi"
import {FaHome} from "react-icons/fa"
import {ImProfile} from "react-icons/im"
import {AiFillPhone} from "react-icons/ai"
import { Link } from 'react-router-dom'


export default function Layout({children}) {
  return (
    <>
      <Box w={'full'} display="flex" justifyContent={'center'}>
        <VStack w={'sm'}>
          {/*헤더*/}
          <Box
          zIndex={99}
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
            {children}
          
          <Box w={'inherit'} h={'120px'} bg={'red.200'} position={'fixed'} bottom={0} padding={'10px'}>
              <HStack h={'inherit'} justifyContent={'space-between'} alignItems={'Center'}>
                <Link to="/">
                <VStack w={'full'}>
                  <FaHome/>
                  <Text>홈</Text>
                </VStack>
                </Link>
                <Link to="/profile">
                <VStack w={'full'}>
                  <ImProfile/>
                  <Text>프로필</Text>
                </VStack>
                </Link>
                <Link to="/contact">
                <VStack w={'full'}>
                  <AiFillPhone/>
                  <Text>연락처</Text>
                </VStack>
                </Link>
              </HStack>
            </Box>
        </VStack>
      </Box>
    </>
  );
}

