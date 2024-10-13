import { Box, Heading, Flex } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';

const MediaPage = () => {
  const isSmallerScreen = ScreenSizeDetector()

  return (
    <Box p={2} textAlign='center'>
      <Heading as="h1" mb={10}>Media</Heading>
      <Flex flexDirection="column" alignItems="center">
        <Box width={isSmallerScreen ? '100%' : '1100px'} mb={10}>
          <iframe
            width="100%"
            height={isSmallerScreen ? '200px' : '520px'}
            src="https://www.youtube.com/embed/mxKceyKICe4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Box width={isSmallerScreen ? '100%' : '1100px'} mb={10}>
              <iframe
                width="100%"
                height={isSmallerScreen ? '200px' : '520px'}
                src="https://www.youtube.com/embed/pzEwHg3XN_c?rel=0&showinfo=0&start=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
        {isSmallerScreen ? (
          <>
            <Box width="100%" mb={4}>
              <iframe
                width="100%"
                height="200px"
                src="https://www.youtube.com/embed/nlrMVqoizcE?rel=0&showinfo=0&start=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Box width="100%" mb={4}>
              <iframe
                width="100%"
                height="200px"
                src="https://www.youtube.com/embed/bwb3lKXxWmA?rel=0&showinfo=0&start=76"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Box width="100%" mb={4}>
              <iframe
                width="100%"
                height="200px"
                src="https://www.youtube.com/embed/jRca0GGDY1s?rel=0&showinfo=0&start=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Box width="100%" mb={4}>
              <iframe
                width="100%"
                height="200px"
                src="https://www.youtube.com/embed/0TzkRelcykY?rel=0&showinfo=0&start=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </>
        ) : (
          <Flex flexWrap="wrap" justifyContent="space-between" width="1100px">
            <Box width={isSmallerScreen ? '100%' : '49%'} mb={10}>
              <iframe
                width="100%"
                height={isSmallerScreen ? '200px' : '300px'}
                src="https://www.youtube.com/embed/nlrMVqoizcE?rel=0&showinfo=0&start=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Box width={isSmallerScreen ? '100%' : '49%'} mb={0}>
              <iframe
                width="100%"
                height={isSmallerScreen ? '200px' : '300px'}
                src="https://www.youtube.com/embed/bwb3lKXxWmA?rel=0&showinfo=0&start=76"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Box width={isSmallerScreen ? '100%' : '49%'} mb={10}>
              <iframe
                width="100%"
                height={isSmallerScreen ? '200px' : '300px'}
                src="https://www.youtube.com/embed/jRca0GGDY1s?rel=0&showinfo=0&start=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Box width={isSmallerScreen ? '100%' : '49%'} mb={0}>
              <iframe
                width="100%"
                height={isSmallerScreen ? '200px' : '300px'}
                src="https://www.youtube.com/embed/0TzkRelcykY?rel=0&showinfo=0&start=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default MediaPage;


