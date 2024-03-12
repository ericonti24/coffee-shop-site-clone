import { Box, Heading, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';

const MediaPage = () => {
  const isSmallerScreen = ScreenSizeDetector()

  return (
    <Box p={4} textAlign='center' >
      <Heading as="h1" mb={4}>Media</Heading>
      <Flex justifyContent="center">
        <Box width={isSmallerScreen ? '100%' : '1100px'} >
          <iframe
            width="100%"
            height={isSmallerScreen ? '200px' : '520px'}
            src="https://www.youtube.com/embed/mxKceyKICe4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            
          ></iframe>
        </Box>
      </Flex>
    </Box>
  );
};

export default MediaPage;


