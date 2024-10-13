import { Box, Heading, Text, Image, Flex, Input, Button, Textarea, Link } from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import buzzedgoatpic1 from '../../public/images/buzzedgoatpic1.webp'

export default function About() {
    const isSmallerScreen = ScreenSizeDetector();
    const buzzedgoatpic1 = "/_next/static/media/buzzedgoatpic1.65bb9b94.webp"

  return (
    <Box 
      textAlign="center" 
      width="100%" 
      px={{ base: 4, md: 12}}
      py={{ base: 0, md: '12' }}
      // border='1px solid red'
      mt={0}
    >
    <Box 
      width='100%' 
      py={{ base: '0', md: '0' }}
      // border='1px solid blue'
    >
      <Flex 
        flexDirection={isSmallerScreen ? "column-reverse" : "row"} 
        justifyContent="space-between" 
        alignItems="center"
        px={{ base: 4, md: 12 }} 
        // border='1px solid green'
        width='100%'
      >
        <Box 
          display="flex" 
          justifyContent="center" 
          // p={isSmallerScreen ? 0 : 0}
          mb={isSmallerScreen ? 6 : 0} 
          // border='1px solid green'
        >
          <Image 
            src={buzzedgoatpic1} 
            boxSize={isSmallerScreen ? '100%' : '100%'} 
            objectFit="contain"
            borderRadius="md"
          />
        </Box>
        <Box 
          flex="1" 
          textAlign={isSmallerScreen ? "center" : "left"} 
          p={isSmallerScreen ? 6 : 8}
          mt={isSmallerScreen ? 0 : 0} 
          // border='1px solid black'
        >
          <Heading
            fontFamily='Helvetica, arial, sans-serif'
            size={{base: '2xl', md: '4xl'}}
            width="100%"
            color='black'
            py={{base: 0, md: 12}}
          >
            ABOUT US
          </Heading>
          <Text 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black' 
            fontSize={isSmallerScreen ? 'md' : 'xl'}
            py={{base: 6, md: 0}}
          >
            The Buzzed Goat Coffee Shop is a local business originated in the town of Ahwatukee. We make hand-crafted coffees that are custom-tailored to each order. We specialize in cold brew, lattes, local beers, and coffee cocktails. We are known for doing truck events at multiple sites, including non-profits, schools, businesses, and other community events. A portion of the money that is made at these events goes towards different organizations of their choice.
            We are an upscale, high-energy coffee company that was created to bring a different and fresh vibe to Arizona. Within the first few months of opening, we were recognized as The Best of 2018 Ahwatukee Foothills News Best New Business, then best coffee shop the last 3 years! We small batch our own cold brew, and the majority of our products are local, including pastries, beers, and spirits.
          </Text>
        </Box>
        </Flex>
    </Box>
    </Box>
  )
}
