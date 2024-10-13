import { useState, useEffect } from "react";
import { ButtonGroup, Container, IconButton, Stack, Text, Flex, Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYelp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import buzzedgoatpic21 from '../public/images/buzzedgoatpic21.jpeg'


const Footer = () => {
  const isSmallerScreen = ScreenSizeDetector();
  const buzzedgoatpic21 = "/_next/static/media/buzzedgoatpic21.b2e09aed.jpeg"
  const [showFooter, setShowFooter] = useState(false);
  const fontSize = isSmallerScreen ? "md" : "lg"; 

  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: '4',
        md: '4',
      }}
      bg="black"
      alignContent='center'
      // border='1px solid white'
      maxW={{ base: '100%', md: '100%' }}
      height={{ base: '20%', md: '150px' }}
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
            <Stack direction="row" justify="center" align="center" color='white' width='100%'>
              <ButtonGroup variant="tertiary" size='lg'>
                <IconButton as="a" href="https://www.facebook.com/thebuzzedgoat?locale=af_ZA" target='_blank' rel='noopener noreferrer' aria-label="Facebook" icon={<FontAwesomeIcon icon={faFacebook} />} />
                <IconButton as="a" href="https://www.instagram.com/thebuzzedgoat/?hl=en" target='_blank' rel='noopener noreferrer' aria-label="Instagram" icon={<FontAwesomeIcon icon={faInstagram} />} />
                <IconButton as="a" href="https://www.tiktok.com/@thebuzzedgoatcoffee" target='_blank' rel='noopener noreferrer' aria-label="TikTok" icon={<FontAwesomeIcon icon={faTiktok} />} />
                <IconButton as="a" href="https://www.yelp.com/biz/the-buzzed-goat-phoenix" target='_blank' rel='noopener noreferrer' aria-label="Yelp" icon={<FontAwesomeIcon icon={faYelp} />} />
              </ButtonGroup>
            </Stack>
            <Stack direction="row" justify="space-between" align="center">
              <Image src={buzzedgoatpic21} alt="Logo" boxSize="50px" mr={0} borderRadius='full'/>
              {/* <Text fontSize={fontSize} color="white" textAlign="left" fontFamily='Helvetica, arial, sans-serif'>
                Coffee Shop Name
              </Text> */}
              <Text fontSize={fontSize} color="white" textAlign="right" fontFamily='Helvetica, arial, sans-serif'>
                &copy; {new Date().getFullYear()} The Buzzed Goat.
              </Text>
            </Stack>
          </>
        ) : (
          <Flex justify="space-between" align="center" width='100%'>
            <Flex align='center'>
              <Image src={buzzedgoatpic21} alt="Logo" boxSize="90px" mr={2} borderRadius='full'/>
              {/* <Text fontSize={fontSize} color="white" fontFamily='Helvetica, arial, sans-serif'>
                Coffee Shop Name
              </Text> */}
            </Flex>
          <Stack direction="row" align="center" color='white'>
            <ButtonGroup variant="tertiary" size='lg'>
              <IconButton as="a" href="https://www.facebook.com/thebuzzedgoat?locale=af_ZA" target='_blank' rel='noopener noreferrer' aria-label="Facebook" icon={<FontAwesomeIcon icon={faFacebook} />} />
              <IconButton as="a" href="https://www.instagram.com/thebuzzedgoat/?hl=en" target='_blank' rel='noopener noreferrer' aria-label="Instagram" icon={<FontAwesomeIcon icon={faInstagram} />} />
              <IconButton as="a" href="https://www.tiktok.com/@thebuzzedgoatcoffee" target='_blank' rel='noopener noreferrer' aria-label="Tiktok" icon={<FontAwesomeIcon icon={faTiktok} />} />
              <IconButton as="a" href="https://www.yelp.com/biz/the-buzzed-goat-phoenix" target='_blank' rel='noopener noreferrer' aria-label="Yelp" icon={<FontAwesomeIcon icon={faYelp} />} />
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









