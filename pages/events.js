import { Box, Flex, Input, Button, Heading, Text, Image } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import buzzedgoatpic5 from '../public/images/buzzedgoatpic5.jpeg'
import buzzedgoatpic29 from '../public/images/buzzedgoatpic29.jpeg'
import buzzedgoatpic1 from '../public/images/buzzedgoatpic1.webp'
import buzzedgoateventspic from '../public/images/buzzedgoateventspic.webp'
import buzzedgoateventexample from '../public/images/buzzedgoateventexample.jpeg'
import { useState } from 'react';



export default function Events() {
  const isSmallerScreen = ScreenSizeDetector();
  const [isClicked, setIsClicked] = useState(false);
  const buzzedgoateventexample = "/_next/static/media/buzzedgoateventexample.cae5f5f5.jpeg"
  const [currentEvent, setCurrentEvent] = useState(buzzedgoateventexample)

  // console.log(buzzedgoateventexample);

  const handleInputFocus = () => {
    setIsClicked(true);
  };

  const buzzedgoatpic5 = "/_next/static/media/buzzedgoatpic5.64b8021d.jpeg";
  const buzzedgoatpic29 = "/_next/static/media/buzzedgoatpic29.f00888da.jpeg"
  const buzzedgoatpic1 = "/_next/static/media/buzzedgoatpic1.65bb9b94.webp"
  const buzzedgoateventspic = "/_next/static/media/buzzedgoateventspic.64eb666d.webp"
  

  return (
    <Box p={5} >
      <Flex
        flexDirection={isSmallerScreen ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box mb={isSmallerScreen ? 4 : 0} mr={isSmallerScreen ? 0 : 4}>
          <Heading as="h2" mb={2}>Events</Heading>
          <Text mb={2} fontSize={isSmallerScreen ? 'lg' : 'xl'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Flex alignItems="baseline">
            <Input
              placeholder='EMAIL'
              _placeholder={{ color: 'gray.500'}}
              borderRadius='0'
              border='none'
              borderColor='black'
              focusBorderColor='white'
              borderBottom='1px solid black'
              onClick={handleInputFocus}
              mr={isSmallerScreen ? 0 : 2}
              mb={isSmallerScreen ? 2 : 0}
              width={isSmallerScreen ? '100%' : '300px'}
              _focus={{ borderBottomColor: 'black' }}
            />
            <Button color='white' bg='black' borderRadius={0} width={isSmallerScreen ? '30%' : '100px'}>Submit</Button>
          </Flex>
        </Box>
      </Flex>
      <Box p={5}>
      <Flex
        flexDirection={isSmallerScreen ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
          {currentEvent ? (
            <Image src={currentEvent} width={isSmallerScreen ? '100%' : '80%'} alt="Event Image" />
          ) : (
            <Text>No events at this time</Text>
          )}
          </Flex>
        </Box>
    </Box>
  );
}

