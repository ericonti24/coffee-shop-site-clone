import { ButtonGroup, Container, IconButton, Stack, Text, Flex, Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYelp } from '@fortawesome/free-brands-svg-icons';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import buzzedgoatpic21 from '../public/images/buzzedgoatpic21.jpeg'


const Footer = () => {
  const isSmallerScreen = ScreenSizeDetector();
  const fontSize = isSmallerScreen ? 'sm' : 'lg'; // Adjust fontSize based on screen size
  const buzzedgoatpic21 = "/_next/static/media/buzzedgoatpic21.b2e09aed.jpeg"


  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: '5',
        md: '10',
      }}
      bg="black" 
      mt="auto" 
      bottom={0}
      alignContent='center'
      // border='1px solid red'
      maxW={{ base: '100%', md: '100%' }} // Set maximum width for larger screens
    >
      <Stack
        spacing={{
          base: '4',
          md: '5',
        }}
        align="center" 
        justify="center" 
      >
        {isSmallerScreen ? (
          <>
            <Stack direction="row" justify="center" align="center" color='white'>
              <ButtonGroup variant="tertiary">
                <IconButton as="a" href="#" aria-label="Facebook" icon={<FontAwesomeIcon icon={faFacebook} />} />
                <IconButton as="a" href="#" aria-label="Instagram" icon={<FontAwesomeIcon icon={faInstagram} />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FontAwesomeIcon icon={faTwitter} />} />
                <IconButton as="a" href="#" aria-label="Yelp" icon={<FontAwesomeIcon icon={faYelp} />} />
              </ButtonGroup>
            </Stack>
            <Stack direction="row" justify="space-between" align="center">
              <Image src={buzzedgoatpic21} alt="Logo" boxSize="50px" mr={0} borderRadius='full'/>
              <Text fontSize={fontSize} color="white" textAlign="left" fontFamily='Helvetica, arial, sans-serif'>
                Coffee Shop Name
              </Text>
              <Text fontSize={fontSize} color="white" textAlign="right" fontFamily='Helvetica, arial, sans-serif'>
                &copy; {new Date().getFullYear()} Coffee Shop Name. All rights reserved.
              </Text>
            </Stack>
          </>
        ) : (
          <Flex justify="space-between" align="center" width='100%'>
            <Flex align='center'>
              <Image src={buzzedgoatpic21} alt="Logo" boxSize="50px" mr={2} borderRadius='full'/>
              <Text fontSize={fontSize} color="white" fontFamily='Helvetica, arial, sans-serif'>
                Coffee Shop Name
              </Text>
            </Flex>
          <Stack direction="row" align="center" color='white'>
            <ButtonGroup variant="tertiary">
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FontAwesomeIcon icon={faFacebook} />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FontAwesomeIcon icon={faInstagram} />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FontAwesomeIcon icon={faTwitter} />} />
              <IconButton as="a" href="#" aria-label="Yelp" icon={<FontAwesomeIcon icon={faYelp} />} />
            </ButtonGroup>
          </Stack>
          <Text fontSize={fontSize} color="white" fontFamily='Helvetica, arial, sans-serif'>
            &copy; {new Date().getFullYear()} Coffee Shop Name. All rights reserved.
          </Text>
        </Flex>
        )}
      </Stack>
    </Container>
  );
}

export default Footer;






