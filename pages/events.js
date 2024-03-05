import { Box, Flex, Input, Button, Heading, Text } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import buzzedgoatpic5 from '../public/images/buzzedgoatpic5.jpeg'
import { useState } from 'react';

export default function Events() {
  const isSmallerScreen = ScreenSizeDetector();
  const [isClicked, setIsClicked] = useState(false);

  const handleInputFocus = () => {
    setIsClicked(true);
  };

  const buzzedgoatpic5 = "/_next/static/media/buzzedgoatpic5.64b8021d.jpeg";

  return (
    <Box p={5}>
      {isSmallerScreen ? (
        <Box
          backgroundImage={`url(${buzzedgoatpic5})`}
          backgroundSize="cover"
          backgroundPosition="center"
          minHeight="400px"
          px={9}
          py={-20}
        >
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            transform="translate(6%, 90%)"
            color="white"
          >
            <Heading as="h2" mb={2}>Sign Up for Events</Heading>
            <Text mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Flex flexDirection="column">
              <Input
                placeholder='EMAIL'
                _placeholder={{ color: 'white'}}
                focusBorderColor='white'
                borderBottomColor={isClicked ? 'white' : 'white'}
                borderRadius='0'
                border='none'
                borderBottom='1px solid white'
                onClick={handleInputFocus}
                mr={2}
                width='200px'
              />
              <Button color='white' bg='gray.600' mt={2} width='200px'>Submit</Button>
            </Flex>
          </Flex>
        </Box> 
      ) : (
        <Box p={4} maxWidth='1100px' margin="0 auto">
          <Box
            backgroundImage={`url(${buzzedgoatpic5})`}
            backgroundSize="100% 100%"
            backgroundPosition="center"
            minHeight="1000px" 
            position="relative" 
          >
            <Flex
              position="absolute"
              top="50%"
              left="70%" 
              transform="translate(-30%, -70%)" 
              flexDirection="column"
              alignItems="flex-start" 
              color="white"
            >
              <Heading as="h2" mb={2} fontSize='6xl'>Sign Up for Events</Heading>
              <Text mb={2} fontSize='xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </Text>
              <Flex alignItems="baseline">
                <Input
                  placeholder='EMAIL'
                  _placeholder={{ color: 'white'}}
                  focusBorderColor='white'
                  borderBottomColor={isClicked ? 'white' : 'white'}
                  borderRadius='0'
                  border='none' 
                  borderBottom='1px solid white' 
                  onClick={handleInputFocus}
                  mr={2}
                  width='300px'
                />
                <Button color='white' bg='gray.600' borderRadius={0}>Submit</Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
}

