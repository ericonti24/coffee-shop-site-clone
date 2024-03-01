import { ButtonGroup, Container, IconButton, Stack, Text, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYelp } from '@fortawesome/free-brands-svg-icons';
import ScreenSizeDetector from '@/components/IsSmallerScreen';

const Footer = () => {
  const isSmallerScreen = ScreenSizeDetector();
  const fontSize = isSmallerScreen ? 'sm' : 'lg'; // Adjust fontSize based on screen size

  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: '5',
        md: '10',
      }}
      bg="transparent" 
      mt="auto" 
      bottom={0}
      alignContent='center'
      // border='1px solid red'
      maxW={{ base: '100%', md: '1100px' }} // Set maximum width for larger screens
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
            <Stack direction="row" justify="center" align="center">
              <ButtonGroup variant="tertiary">
                <IconButton as="a" href="#" aria-label="Facebook" icon={<FontAwesomeIcon icon={faFacebook} />} />
                <IconButton as="a" href="#" aria-label="Instagram" icon={<FontAwesomeIcon icon={faInstagram} />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FontAwesomeIcon icon={faTwitter} />} />
                <IconButton as="a" href="#" aria-label="Yelp" icon={<FontAwesomeIcon icon={faYelp} />} />
              </ButtonGroup>
            </Stack>
            <Stack direction="row" justify="space-between" align="center">
              <Text fontSize={fontSize} color="black" textAlign="left">
                Coffee Shop Name
              </Text>
              <Text fontSize={fontSize} color="black" textAlign="right">
                &copy; {new Date().getFullYear()} Coffee Shop Name. All rights reserved.
              </Text>
            </Stack>
          </>
        ) : (
          <Flex justify="space-between" align="center" width='1100px'>
          <Text fontSize={fontSize} color="black">
            Coffee Shop Name
          </Text>
          <Stack direction="row" align="center">
            <ButtonGroup variant="tertiary">
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FontAwesomeIcon icon={faFacebook} />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FontAwesomeIcon icon={faInstagram} />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FontAwesomeIcon icon={faTwitter} />} />
              <IconButton as="a" href="#" aria-label="Yelp" icon={<FontAwesomeIcon icon={faYelp} />} />
            </ButtonGroup>
          </Stack>
          <Text fontSize={fontSize} color="black">
            &copy; {new Date().getFullYear()} Coffee Shop Name. All rights reserved.
          </Text>
        </Flex>
        )}
      </Stack>
    </Container>
  );
}

export default Footer;






