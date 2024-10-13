import { Box, Heading, Flex, Image as ChakraImage } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import menu1 from '../public/images/menu1.png'
import menu2 from '../public/images/menu2.png'

const MenuPage = () => {
    const menu1 = "/_next/static/media/menu1.14215325.png"
    const menu2 = "/_next/static/media/menu2.782de4cc.png"
    const isSmallerScreen = ScreenSizeDetector()

  return (
    <Box p={10} textAlign='center'>
      <Heading as="h1" mb={10}>MENU - PRICE LIST</Heading>
      <Flex justifyContent="center">
        <Box 
          width={isSmallerScreen ? '100%' : '80%'}
          mx="auto"
        >
          <ChakraImage src={menu1} alt="Menu1" />
        </Box>
      </Flex>
      <Flex justifyContent="center" mt={isSmallerScreen ? 10 : 10}>
        <Box 
          width={isSmallerScreen ? '100%' : '80%'}
          mx="auto" 
        >
          <ChakraImage src={menu2} alt="Menu2" />
        </Box>
      </Flex>
    </Box>
  );
};

export default MenuPage;
