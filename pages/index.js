import { Box, Heading, Text, Stack, Image, Flex, Input, Button } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import { useState } from 'react';
import buzzedgoatpic3 from '../public/images/buzzedgoatpic3.jpeg'
import buzzedgoatpic4 from '../public/images/buzzedgoatpic4.jpeg'
import buzzedgoatpic7 from '../public/images/buzzedgoatpic7.jpeg'
import buzzedgoatpic6 from '../public/images/buzzedgoatpic6.jpeg'
import buzzedgoatpic8 from '../public/images/buzzedgoatpic8.webp'

const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleInputFocus = () => {
    setIsClicked(true);
  };

  const buzzedgoatpic3 = "/_next/static/media/buzzedgoatpic3.7487dc3c.jpeg"
  const buzzedgoatpic4 = "/_next/static/media/buzzedgoatpic4.175630be.jpeg"
  const buzzedgoatpic6 = "/_next/static/media/buzzedgoatpic6.4c5ca957.jpeg"
  const buzzedgoatpic7 = "/_next/static/media/buzzedgoatpic7.9819e21b.jpeg"
  const buzzedgoatpic8 = "/_next/static/media/buzzedgoatpic8.f4a577bb.webp"
  // console.log(buzzedgoatpic8);
  
  const isSmallerScreen = ScreenSizeDetector()
  return (
    <Box p={0}>
      {isSmallerScreen ? (
        <Box p={4}>
          {/* Mobile screen */}
        <Box p={4} maxWidth='100%' margin="0 auto">
          <Image src={buzzedgoatpic3} mb={8}/>
          <Box mb={8}>
            <Heading as="h1" mb={4}>Welcome to Our Coffee Shop!</Heading>
            <Image src={buzzedgoatpic8}/>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
              vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
              dolor suscipit.
            </Text>
          </Box>
          <Box mb={8}>
            <Heading as="h2" mb={4}>About Us</Heading>
            <Image src={buzzedgoatpic4}/>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
              vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
              dolor suscipit.
            </Text>
          </Box>
          {/* <Box
              backgroundImage={`url(${buzzedgoatpic6})`}
              backgroundSize="cover"
              backgroundPosition="center"
              minHeight="400px"
              px={4}
              py={8}
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                transform="translate(2%, 90%)"
                color="white"
              >
                <Heading as="h2" mb={2}>Sign Up for Events</Heading>
                <Text mb={2}>
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
                    width='200px'
                  />
                  <Button color='white'bg='black'>Submit</Button>
                </Flex>
              </Flex>
            </Box> */}
          <Box mb={8}>
            <Heading as="h2" mb={4}>Come Grab a Drink</Heading>
            <Stack spacing={4}>
              <Box>
                <Heading as="h3" size="md" mb={2}>Location 1</Heading>
                <Text>123 Main Street</Text>
                <Text>Opening Hours: Monday - Friday, 8:00 AM - 10:00 PM</Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>Location 2</Heading>
                <Text>456 Elm Street</Text>
                <Text>Opening Hours: Monday - Friday, 9:00 AM - 11:00 PM</Text>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      ) : (
        <Box p={4} maxWidth='1100px' margin="0 auto">
          {/* Desktop screen */}
         <Image src={buzzedgoatpic3} boxSize='100%'mb={10}/>
         <Flex mb={10} alignItems="center" height='100%'>
          <Box mr={8} height="100%">
            <Image src={buzzedgoatpic8} alt="Image" height='100%'/>
          </Box>
          <Box flex="1">
            <Heading as="h2" mb={6}>Welcome to Our Coffee Shop</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </Text>
          </Box>
        </Flex>
        <Flex mb={8} alignItems="center" height='600px'>
          
          <Box flex="1">
            <Heading as="h2" mb={4}>About Us</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
              vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
              dolor suscipit.
            </Text>
          </Box>
          <Box height="100%">
            <Image src={buzzedgoatpic4} alt="Image" height="100%" objectFit="contain"/>
          </Box>
        </Flex>
        {/* <Box
          backgroundImage={`url(${buzzedgoatpic6})`}
          backgroundSize="100% 100%"
          backgroundPosition="center"
          minHeight="900px" 
          position="relative" 
        >
          <Flex
            position="absolute"
            top="50%"
            left="70%" 
            transform="translate(-30%, 10%)" 
            flexDirection="column"
            alignItems="flex-start" 
            color="white"
          >
            <Heading as="h2" mb={2}>Sign Up for Events</Heading>
            <Text mb={2}>
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
              width='200px'
            />
            <Button color='white' bg='black'>Submit</Button>
          </Flex>
          </Flex>
        </Box> */}
        <Box mb={8}>
          <Heading as="h2" mb={4}>Come Grab a Drink</Heading>
          <Stack spacing={4}>
            <Box>
              <Heading as="h3" size="md" mb={2}>Location 1</Heading>
              <Text>123 Main Street</Text>
              <Text>Opening Hours: Monday - Friday, 8:00 AM - 10:00 PM</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Location 2</Heading>
              <Text>456 Elm Street</Text>
              <Text>Opening Hours: Monday - Friday, 9:00 AM - 11:00 PM</Text>
            </Box>
          </Stack>
        </Box>
      </Box>
      )}
      
    </Box>
  );
};

export default HomePage;

