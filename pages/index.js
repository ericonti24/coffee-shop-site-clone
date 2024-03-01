import { Box, Heading, Text, Stack, Image, Flex } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import buzzedgoatpic3 from '../public/images/buzzedgoatpic3.jpeg'
import buzzedgoatpic4 from '../public/images/buzzedgoatpic4.jpeg'

const HomePage = () => {

  const buzzedgoatpic3 = "/_next/static/media/buzzedgoatpic3.7487dc3c.jpeg"
  const buzzedgoatpic4 = "/_next/static/media/buzzedgoatpic4.175630be.jpeg"
  // console.log(buzzedgoatpic4);
  
  const isSmallerScreen = ScreenSizeDetector()
  return (
    <Box p={4}>
      {isSmallerScreen ? (
        <Box p={4}>
          {/* Mobile screen */}
        <Box p={4} maxWidth='100%' margin="0 auto">
          <Image src={buzzedgoatpic3}/>
          <Box mb={8}>
            <Heading as="h1" mb={4}>Welcome to Our Coffee Shop!</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
              vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
              dolor suscipit.
            </Text>
          </Box>
          <Box mb={8}>
            <Image src={buzzedgoatpic4}/>
            <Heading as="h2" mb={4}>About Us</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
              vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
              dolor suscipit.
            </Text>
          </Box>
          <Box mb={8}>
            <Heading as="h2" mb={4}>Sign Up for Events</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
              vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
              dolor suscipit.
            </Text>
          </Box>
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
         <Image src={buzzedgoatpic3} width='100%'/>
        <Box mb={8}>
          <Heading as="h1" mb={4}>Welcome to Our Coffee Shop!</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
            vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
            dolor suscipit.
          </Text>
        </Box>
        {/* <Box mb={8}>
          <Image src={buzzedgoatpic4}/>
          <Heading as="h2" mb={4}>About Us</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
            vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
            dolor suscipit.
          </Text>
        </Box> */}
        <Flex mb={8} alignItems="center">
          <Box mr={8}>
            <Image src={buzzedgoatpic4} alt="Image" />
          </Box>
          <Box>
            <Heading as="h2" mb={4}>About Us</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
              vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
              dolor suscipit.
            </Text>
          </Box>
        </Flex>
        <Box mb={8}>
          <Heading as="h2" mb={4}>Sign Up for Events</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
            vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
            dolor suscipit.
          </Text>
        </Box>
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

