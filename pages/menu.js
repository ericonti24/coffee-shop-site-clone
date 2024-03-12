import { Box, Heading, Image as ChakraImage } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import menu1 from '../public/images/menu1.png'
import menu2 from '../public/images/menu2.png'

const MenuPage = () => {
    const menu1 = "/_next/static/media/menu1.14215325.png"
    const menu2 = "/_next/static/media/menu2.782de4cc.png"
    const isSmallerScreen = ScreenSizeDetector()

  return (
    <Box p={4} textAlign='center'>
      <Heading as="h1" mb={10}>MENU - PRICE LIST</Heading>
      <Box 
        width={isSmallerScreen ? '100%' : '50vw'}
        // height={isSmallerScreen ? '100%' : '510px'}
        mx="auto"
      >
        <ChakraImage src={menu1} alt="Menu1" />
      </Box>
      <Box 
        width={isSmallerScreen ? '100%' : '50vw'}
        // height={isSmallerScreen ? '50%' : '500px'}
        mx="auto" 
        mt={isSmallerScreen ? '10' : '100'}
      >
        <ChakraImage src={menu2} alt="Menu2" />
      </Box>
      {/* Add more menu items or descriptions as needed */}
    </Box>
  );
};

export default MenuPage;
