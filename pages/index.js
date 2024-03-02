import { Box, Heading, Text, Stack, Image, Flex, Input, Button, Textarea } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import { useState } from 'react';
import buzzedgoatpic3 from '../public/images/buzzedgoatpic3.jpeg'
import buzzedgoatpic4 from '../public/images/buzzedgoatpic4.jpeg'
import buzzedgoatpic7 from '../public/images/buzzedgoatpic7.jpeg'
import buzzedgoatpic6 from '../public/images/buzzedgoatpic6.jpeg'
import buzzedgoatpic8 from '../public/images/buzzedgoatpic8.webp'
import buzzedgoatpic10 from '../public/images/buzzedgoatpic10.jpeg'
import buzzedgoatpic11 from '../public/images/buzzedgoatpic11.webp'

const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  const toggleForm1 = () => {
    setShowForm1(!showForm1);
  };

  const toggleForm2 = () => {
    setShowForm2(!showForm2);
  };
  
  const handleInputFocus = () => {
    setIsClicked(true);
  };

  const buzzedgoatpic3 = "/_next/static/media/buzzedgoatpic3.7487dc3c.jpeg"
  const buzzedgoatpic4 = "/_next/static/media/buzzedgoatpic4.175630be.jpeg"
  const buzzedgoatpic6 = "/_next/static/media/buzzedgoatpic6.4c5ca957.jpeg"
  const buzzedgoatpic7 = "/_next/static/media/buzzedgoatpic7.9819e21b.jpeg"
  const buzzedgoatpic8 = "/_next/static/media/buzzedgoatpic8.f4a577bb.webp"
  const buzzedgoatpic10 = "/_next/static/media/buzzedgoatpic10.68c83c7f.jpeg"
  const buzzedgoatpic11 = "/_next/static/media/buzzedgoatpic11.6f1eca82.webp"
  // console.log(buzzedgoatpic11);
  
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
          <Box mb={8}>
            <Heading as="h2" mb={4} textAlign='center'>Come Grab a Drink</Heading>
            <Flex mb={8} alignItems="center" height='600px'>
              <Box flex="1" textAlign="center">
                <Image src={buzzedgoatpic11} alt="Image" height="100%" objectFit="contain" />
                {showForm1 ? (
                  <form>
                    <Heading as="h3" size="lg" mb={4}>Connect With Us</Heading>
                    <Input placeholder="Name" mb={4} />
                    <Input placeholder="Email" mb={4} />
                    <Textarea placeholder="Message" mb={4} resize="none" />
                    <Flex justify="flex-end">
                      <Button color='white' bg='gray.600' borderRadius={0} mr={2}>Submit</Button>
                      <Button colorScheme="gray" borderRadius={0} onClick={toggleForm1}>Cancel</Button>
                    </Flex>
                  </form>
                ) : (
                  <>
                    <Heading as="h3" size="lg" mb={2}>Location 1</Heading>
                    <Text fontSize="lg" mb={2}>123 Main Street</Text>
                    <Text fontSize="lg" mb={4}>Opening Hours: Monday - Friday, 8:00 AM - 10:00 PM</Text>
                    <Button color='white' bg='gray.600' borderRadius={0} onClick={toggleForm1} mb={2}>Connect With Us</Button>
                  </>
                )}
              </Box>
            </Flex>
            <Flex mb={8} alignItems="center" height='600px'>
              <Box flex="1" textAlign="center">
                <Image src={buzzedgoatpic10} alt="Image" height="100%" objectFit="contain" />
                {showForm2 ? (
                  <form>
                    <Heading as="h3" size="lg" mb={4}>Connect With Us</Heading>
                    <Input placeholder="Name" mb={4} />
                    <Input placeholder="Email" mb={4} />
                    <Textarea placeholder="Message" mb={4} resize="none" />
                    <Flex justify="flex-end">
                      <Button color='white' bg='gray.600' borderRadius={0} mr={2}>Submit</Button>
                      <Button colorScheme="gray" borderRadius={0} onClick={toggleForm2}>Cancel</Button>
                    </Flex>
                  </form>
                ) : (
                  <>
                    <Heading as="h3" size="lg" mb={2}>Location 2</Heading>
                    <Text fontSize="lg" mb={2}>456 Elm Street</Text>
                    <Text fontSize="lg" mb={4}>Opening Hours: Monday - Friday, 9:00 AM - 11:00 PM</Text>
                    <Button color='white' bg='gray.600' borderRadius={0} onClick={toggleForm2} mb={2}>Connect With Us</Button>
                  </>
                )}
              </Box>
            </Flex>
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
        <Box mb={8}>
          <Heading as="h2" mb={4}>Come Grab a Drink</Heading>
          <Flex alignItems="center" height='600px'>
            <Box flex="1">
              <Image src={buzzedgoatpic11} alt="Image" height="100%" objectFit="contain" />
            </Box>
            <Box flex="1" ml={8}>
              {showForm1 ? (
                <form>
                  <Heading as="h3" size="lg" mb={4}>Connect With Us</Heading>
                  <Input placeholder="Name" mb={4} />
                  <Input placeholder="Email" mb={4} />
                  <Textarea placeholder="Message" mb={4} resize="none" />
                  <Flex justify="flex-end">
                    <Button color='white' bg='gray.600' borderRadius={0} mr={2}>Submit</Button>
                    <Button colorScheme="gray" borderRadius={0} onClick={toggleForm1}>Cancel</Button>
                  </Flex>
                </form>
              ) : (
                <>
                  <Heading as="h3" size="lg" mb={2}>Location 1</Heading>
                  <Text fontSize="lg" mb={2}>123 Main Street</Text>
                  <Text fontSize="lg" mb={4}>Opening Hours: Monday - Friday, 8:00 AM - 10:00 PM</Text>
                  <Button color='white' bg='gray.600' borderRadius={0} onClick={toggleForm1} mb={2}>Connect With Us</Button>
                </>
              )}
            </Box>
          </Flex>
          <Flex mb={8} alignItems="center" height='600px'>
            <Box flex="1">
              <Box flex="1" ml={8}>
                {showForm2 ? (
                  <form>
                    <Heading as="h3" size="lg" mb={4}>Connect With Us</Heading>
                    <Input placeholder="Name" mb={4} />
                    <Input placeholder="Email" mb={4} />
                    <Textarea placeholder="Message" mb={4} resize="none" />
                    <Flex justify="flex-end">
                      <Button color='white' bg='gray.600' borderRadius={0} mr={2}>Submit</Button>
                      <Button colorScheme="gray" borderRadius={0} onClick={toggleForm2}>Cancel</Button>
                    </Flex>
                  </form>
                ) : (
                  <>
                    <Heading as="h3" size="lg" mb={2}>Location 2</Heading>
                    <Text fontSize="lg" mb={2}>456 Elm Street</Text>
                    <Text fontSize="lg" mb={4}>Opening Hours: Monday - Friday, 9:00 AM - 11:00 PM</Text>
                    <Button color='white' bg='gray.600' borderRadius={0} onClick={toggleForm2} mb={2}>Connect With Us</Button>
                  </>
                )}
              </Box>
            </Box>
            <Box flex="1" ml={8}>
              <Image src={buzzedgoatpic10} alt="Image" height="100%" objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Box>
      )}
    </Box>
  );
};

export default HomePage;

