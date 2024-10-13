import { Box, Heading, Text, Image, Flex, Input, Button, Textarea, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import buzzedgoatpic17 from '../../public/images/buzzedgoatpic17.jpeg'
import {createClient} from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({ content_type: 'heroSection' })

  return {
    props: {
      hero: res.items
    }
  }
}

export default function Hero({hero}) {
    console.log("Hero data:", hero);
    
    const router = useRouter();
    const buzzedgoatpic17 = "/_next/static/media/buzzedgoatpic17.998f7b45.jpeg"
    const isSmallerScreen = ScreenSizeDetector();


  return (
    <Box width="100%">
    {isSmallerScreen ? (
      // <>
      <Box 
        position="relative"  // Allows positioning of the text over the image
        width="100%"
        height="40vh"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4)), url(${buzzedgoatpic17})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // filter: 'blur(1px)',  
          zIndex: -1  // Places the image behind the text
        }}
      >
        <Box
          position="absolute"  // Ensures the text is overlaid on the image
          top="65%"
          left="50%"
          transform="translate(-50%, -50%)"  // Centers the text vertically and horizontally
          textAlign="center"
          color="white"  // Ensures text stands out over the image
          fontFamily="Helvetica, Arial, sans-serif"
          zIndex={1}  // Keeps the text on top of the image
          width='100%'
        >
          <Heading as='h1' size='xl' fontWeight="bold">
            THE BUZZED GOAT
          </Heading>
          <Text size='sm' fontWeight="bold">
            Coffee Bar
          </Text>
          <Text size='sm' fontWeight="bold">
            &
          </Text>
          <Text size='sm' fontWeight="bold" mb={4}>
            Tap House
          </Text>
          <Flex justify="center" gap={4}>  {/* Flex container to center buttons and add spacing */}
            <Link href="/menu">
              <Button
                backgroundColor="white"  // White background
                color="black"  // Black text
                size='sm'
                _hover='none'  // No hover effect
                textDecoration="none"  // Remove underline or border styling
              >
                Menu
              </Button>
            </Link>
            <Link href="/events">
              <Button
                backgroundColor="white"  // White background
                color="black"  // Black text
                size='sm'
                _hover='none'  // No hover effect
                textDecoration="none"  // Remove underline or border styling
              >
                Events
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
      // </>
    ) : (
      <Box 
        position="relative"  // Allows positioning of the text over the image
        width="100%"
        height='90vh' 
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4)), url(${buzzedgoatpic17})`,
          backgroundPosition: 'top',  // Keep the top of the image in view on desktop
          backgroundSize: 'cover',  // Full image, scaling down to fit the container width
          backgroundRepeat: 'no-repeat',
          zIndex: -1  // Places the image behind the text
        }}
      >
        <Box
          position="absolute"  // Ensures the text is overlaid on the image
          top="75%"
          left="50%"
          transform="translate(-50%, -50%)"  // Centers the text vertically and horizontally
          textAlign="center"
          color="white"  // Ensures text stands out over the image
          fontFamily="Helvetica, Arial, sans-serif"
          zIndex={1}  // Keeps the text on top of the image
        >
          <Heading as='h1' size='4xl'  textTransform='uppercase'>
            The Buzzed Goat
          </Heading>
          <Heading as='h1' size='2xl' fontWeight="bold">
            Coffee Bar
          </Heading>
          <Heading as='h1' size='2xl' fontWeight="bold">
            &
          </Heading>
          <Heading as='h1' size='2xl' fontWeight="bold" mb={4}>
            Tap House
          </Heading>
          <Flex justify="center" gap={4}>  {/* Flex container to center buttons and add spacing */}
            <Link href="/menu">
              <Button
                backgroundColor="white"  // White background
                color="black"  // Black text
                size='lg'
                _hover='none'  // No hover effect
                textDecoration="none"  // Remove underline or border styling
              >
                Menu
              </Button>
            </Link>
            <Link href="/events">
              <Button
                backgroundColor="white"  // White background
                color="black"  // Black text
                size='lg'
                _hover='none'  // No hover effect
                textDecoration="none"  // Remove underline or border styling
              >
                Events
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    )}
    </Box>
  )
}


