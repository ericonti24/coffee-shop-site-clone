// pages/shop.js
import { Box, Heading } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';

export default function Shop() {
  const isSmallerScreen = ScreenSizeDetector();
  return (
    <Box textAlign='center' mt='20'>
        <Heading>COMING SOON...</Heading>
    </Box>
  );
}
