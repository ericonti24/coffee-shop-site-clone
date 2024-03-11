import { Box, Heading, Text, Image, Flex, Input, Button, Textarea, Link } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import { useState, useEffect } from 'react';
import buzzedgoatpic3 from '../public/images/buzzedgoatpic3.jpeg';
import buzzedgoatpic4 from '../public/images/buzzedgoatpic4.jpeg';
import buzzedgoatpic7 from '../public/images/buzzedgoatpic7.jpeg';
import buzzedgoatpic6 from '../public/images/buzzedgoatpic6.jpeg';
import buzzedgoatpic8 from '../public/images/buzzedgoatpic8.webp';
import buzzedgoatpic10 from '../public/images/buzzedgoatpic10.jpeg';
import buzzedgoatpic11 from '../public/images/buzzedgoatpic11.webp';
import buzzedgoatpic13 from '../public/images/buzzedgoatpic13.jpeg';
import buzzedgoatpic14 from '../public/images/buzzedgoatpic14.jpeg';
import buzzedgoatpic16 from '../public/images/buzzedgoatpic16.jpeg';
import buzzedgoatpic17 from '../public/images/buzzedgoatpic17.jpeg';
import buzzedgoatpic18 from '../public/images/buzzedgoatpic18.jpeg';
import buzzedgoatpic19 from '../public/images/buzzedgoatpic19.jpeg';
import buzzedgoatpic20 from '../public/images/buzzedgoatpic20.jpeg';
import buzzedgoatpic22 from '../public/images/buzzedgoatpic22.jpeg'
import buzzedgoatpic24 from '../public/images/buzzedgoatpic24.jpeg'
import buzzedgoatpic25 from '../public/images/buzzedgoatpic25.jpeg'
import buzzedgoatpic26 from '../public/images/buzzedgoatpic26.jpeg'
import buzzedgoatpic27 from '../public/images/buzzedgoatpic27.jpeg'



const HomePage = () => {

  const buzzedgoatpic3 = "/_next/static/media/buzzedgoatpic3.7487dc3c.jpeg"
  const buzzedgoatpic4 = "/_next/static/media/buzzedgoatpic4.175630be.jpeg"
  const buzzedgoatpic6 = "/_next/static/media/buzzedgoatpic6.4c5ca957.jpeg"
  const buzzedgoatpic7 = "/_next/static/media/buzzedgoatpic7.9819e21b.jpeg"
  const buzzedgoatpic8 = "/_next/static/media/buzzedgoatpic8.f4a577bb.webp"
  const buzzedgoatpic10 = "/_next/static/media/buzzedgoatpic10.68c83c7f.jpeg"
  const buzzedgoatpic11 = "/_next/static/media/buzzedgoatpic11.6f1eca82.webp"
  const buzzedgoatpic13 = "/_next/static/media/buzzedgoatpic13.135ec198.jpeg"
  const buzzedgoatpic14 = "/_next/static/media/buzzedgoatpic14.5bb3d08c.jpeg"
  const buzzedgoatpic16 = "/_next/static/media/buzzedgoatpic16.879e9f88.jpeg"
  const buzzedgoatpic17 = "/_next/static/media/buzzedgoatpic17.998f7b45.jpeg"
  const buzzedgoatpic18 = "/_next/static/media/buzzedgoatpic18.7e7b70b2.jpeg"
  const buzzedgoatpic19 = "/_next/static/media/buzzedgoatpic19.ba39caa6.jpeg"
  const buzzedgoatpic20 = "/_next/static/media/buzzedgoatpic20.db00dacd.jpeg"
  const buzzedgoatpic22 = "/_next/static/media/buzzedgoatpic22.dc3ba058.jpeg"
  const buzzedgoatpic24 = "/_next/static/media/buzzedgoatpic24.f042a258.jpeg"
  const buzzedgoatpic25 = "/_next/static/media/buzzedgoatpic25.309b9b39.jpeg"
  const buzzedgoatpic26 = "/_next/static/media/buzzedgoatpic26.0904a17a.jpeg"
  const buzzedgoatpic27 = "/_next/static/media/buzzedgoatpic27.2f7a9b91.jpeg"

  // console.log(buzzedgoatpic27);

  const topImages = [
    buzzedgoatpic17,
    buzzedgoatpic14,
    buzzedgoatpic16,
    buzzedgoatpic8,
  ];

  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === topImages.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image per second

    return () => clearInterval(interval); // Clean up the interval
  }, [currentIndex]);

  const toggleForm1 = () => {
    setShowForm1(!showForm1);
  };

  const toggleForm2 = () => {
    setShowForm2(!showForm2);
  };

  const isSmallerScreen = ScreenSizeDetector();

  return (
    <Box p={0}>
      {/* <Box width="2000px" maxH="100%" overflow="hidden" >
        <Box
          display="flex"
          width={`${topImages.length * 100}%`}
          transform={`translateX(-${currentIndex * (100 / topImages.length)}%)`}
          transition="transform 0.9s ease"
        >
          {topImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              width={`${100 / topImages.length}%`}
              objectFit="cover"
              style={{ opacity: index === currentIndex ? 1 : 0, transition: 'opacity 0.9s ease' }}
            />
          ))}
        </Box>
      </Box> */}
      <Box
      display="flex"
      justifyContent="center" // Center horizontally
      alignItems="center" // Center vertically
      // minHeight="500px" // Set the minimum height
    >
      <Box
        width="90vw" // Adjust width as needed
        // height="80vh" // Adjust height as needed
        overflow="hidden"
      >
        <Box
          display="flex"
          width={`${topImages.length * 100}%`}
          transform={`translateX(-${currentIndex * (100 / topImages.length)}%)`}
          transition="transform 0.9s ease"
        >
          {topImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              width={`${100 / topImages.length}%`}
              objectFit="cover"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transition: "opacity 0.9s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
      <Box p={4} margin="0 auto" textAlign="center"  maxWidth={isSmallerScreen ? '100%' : '1700px'} mb='0'>
        <Box margin="0 auto" bg='white' mb={4}>
          <Heading as="h2" mb={4} fontFamily='Helvetica, arial, sans-serif' color='black' fontSize='25'>ABOUT US</Heading>
          <Text fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,
            vitae ullamcorper nisi tristique. Nulla facilisi. Sed elementum eros a orci tincidunt, ut rutrum
            dolor suscipit.
          </Text>
        </Box>
        <Box mb={8} />

          <Heading as="h2" mb={8} fontFamily='Helvetica, arial, sans-serif' fontSize='25'>OUR LOCATIONS</Heading>

          <Flex alignItems={isSmallerScreen ? "center" : "flex-start"} flexDirection={isSmallerScreen ? "column" : "row"} justify={isSmallerScreen ? "center" : "space-around"}>
            <Box flex="1" textAlign="center" mb={isSmallerScreen ? 4 : 0}>
                {/* Content for Location 1 */}
                <Image src={buzzedgoatpic20} alt="Location 1" w={isSmallerScreen ? "100%" : "500px"} style={{ margin: 'auto' }} />
                {/* {showForm1 ? (
                <form>
                  <Heading as="h3" size="lg" mb={4} fontFamily='Helvetica, arial, sans-serif'>Connect With Us</Heading>
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
                  <Heading as="h3" size="lg" mb={2} fontFamily='Helvetica, arial, sans-serif'>Location 1</Heading>
                  <Text fontSize="lg" mb={2} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>123 Main Street</Text>
                  <Text fontSize="lg" mb={4} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>Opening Hours: Monday - Friday, 8:00 AM - 10:00 PM</Text>
                  <Button color='white' bg='gray.600' borderRadius={0} onClick={toggleForm1} mb={2} fontFamily='Helvetica, arial, sans-serif'>Connect With Us</Button>
                </>
              )} */}
                {/* <Heading as="h3" size="md" mb={2} fontFamily='Helvetica, arial, sans-serif'>Location 1</Heading> */}
                <Text fontSize="md" mb={2} mt={4} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,vitae ullamcorper nisi tristique.
                </Text>
                <Text fontSize="sm" fontWeight='bold' mb={2} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>123 Main Street</Text>
                <Text fontSize="sm" fontWeight='bold' mb={4} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>Opening Hours: Monday - Friday, 8:00 AM - 10:00 PM</Text>
            </Box>
            <Box flex="1" textAlign="center">
              {/* Content for Location 2 */}
              <Image src={buzzedgoatpic18} alt="Location 2" w={isSmallerScreen ? "100%" : "700px"} style={{ margin: 'auto' }}/>
              {/* {showForm2 ? (
                <form>
                  <Heading as="h3" size="lg" mb={4} fontFamily='Helvetica, arial, sans-serif'>Connect With Us</Heading>
                  <Input placeholder="Name" mb={4} fontFamily='Helvetica, arial, sans-serif'/>
                  <Input placeholder="Email" mb={4} fontFamily='Helvetica, arial, sans-serif'/>
                  <Textarea placeholder="Message" mb={4} resize="none" fontFamily='Helvetica, arial, sans-serif'/>
                  <Flex justify="flex-end">
                    <Button color='white' bg='gray.600' borderRadius={0} mr={2} fontFamily='Helvetica, arial, sans-serif'>Submit</Button>
                    <Button colorScheme="gray" borderRadius={0} onClick={toggleForm2} fontFamily='Helvetica, arial, sans-serif'>Cancel</Button>
                  </Flex>
                </form>
              ) : (
              <>
                <Heading as="h3" size="lg" mb={2} fontFamily='Helvetica, arial, sans-serif'>Location 2</Heading>
                <Text fontSize="lg" mb={2} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>456 Elm Street</Text>
                <Text fontSize="lg" mb={4} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>Opening Hours: Monday - Friday, 9:00 AM - 11:00 PM</Text>
                <Button color='white' bg='gray.600' borderRadius={0} onClick={toggleForm2} fontFamily='Helvetica, arial, sans-serif'>Connect With Us</Button>
              </>
            )} */}
              {/* <Heading as="h3" size="lg" mb={2} fontFamily='Helvetica, arial, sans-serif'>Location 2</Heading> */}
              <Text fontSize="md" mb={2} mt={4} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum urna nec turpis hendrerit,vitae ullamcorper nisi tristique.
              </Text>
              <Text fontSize="sm" fontWeight='bold' mb={2} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>456 Elm Street</Text>
              <Text fontSize="sm" fontWeight='bold' mb={4} fontFamily='Helvetica, arial, sans-serif' color='rgb(94, 94, 94)'>Opening Hours: Monday - Friday, 9:00 AM - 11:00 PM</Text>
          </Box>
        </Flex>
      </Box>
      <Box p={4} margin="0 auto" mb='8' textAlign="center">
        <Heading as="h2" mb={8} fontFamily='Helvetica, arial, sans-serif' fontSize='25'>COME EXPERIENCE</Heading>
        <Flex 
          maxWidth={isSmallerScreen ? '100%' : '1700px'}
          margin={isSmallerScreen ? '0' : '0 auto'}
          alignItems="center" 
          flexDirection={isSmallerScreen ? "column" : "row"} 
          justify="center"
        >
          <Box flex="1" textAlign="center" mb={isSmallerScreen ? 4 : 0} mr={isSmallerScreen ? 0 : 4}>
            <Link href='https://www.instagram.com/p/CNsxOAJl0h8/' target='_blank' rel='noopener noreferrer'>
              <Image src={buzzedgoatpic24} boxSize={isSmallerScreen ? "100%" : "100%"} mb={0} />
            </Link>
          </Box>
          <Box flex="1" textAlign="center" mb={isSmallerScreen ? 4 : 0} ml={isSmallerScreen ? 0 : 4}>
            <Link href='https://www.instagram.com/p/C33DwbaP4gk/' target='_blank' rel='noopener noreferrer'>
              <Image src={buzzedgoatpic26} boxSize={isSmallerScreen ? "100%" : "100%"} mb={0} />
            </Link>
          </Box>
          <Box flex="1" textAlign="center" mb={isSmallerScreen ? 4 : 0} ml={isSmallerScreen ? 0 : 4}>
            <Link href='https://www.instagram.com/p/CdrGLrhvW0J/' target='_blank' rel='noopener noreferrer'>
              <Image src={buzzedgoatpic27} boxSize={isSmallerScreen ? "100%" : "100%"} mb={0} />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;



