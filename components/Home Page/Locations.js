import { Box, Heading, Text, Image, Flex, List, ListItem} from '@chakra-ui/react';
import buzzedgoatpic20 from '../../public/images/buzzedgoatpic20.jpeg'
import buzzedgoatpic18 from '../../public/images/buzzedgoatpic18.jpeg'
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import TempeLocationPic from '../../public/images/BuzzedGoatTempeLocationPic.jpeg'

export default function Locations() {
    const buzzedgoatpic18 = "/_next/static/media/buzzedgoatpic18.7e7b70b2.jpeg"
    const buzzedgoatpic20 = "/_next/static/media/buzzedgoatpic20.db00dacd.jpeg"
    const tempeLocationPic = "/_next/static/media/BuzzedGoatTempeLocationPic.62e17936.jpeg"
    const isSmallerScreen = ScreenSizeDetector();
    // console.log(TempeLocationPic);
    

  return (
    <Box 
      textAlign="center" 
      width="100%" 
      px={{ base: 4, md: 12}}
      py={{ base: '0', md: '12' }}
    >
    <Box 
      maxWidth='100%' 
      py={{ base: '0', md: '0' }}
      fontSize={isSmallerScreen ? 'sm' : 'xl'}
    >
      <Heading
        display="flex" 
        justifyContent={isSmallerScreen ? "center" : "flex-start"}
        width='100%'
        fontFamily='Helvetica, arial, sans-serif'
        size={{base: '3xl', md: '4xl'}}
        color='black'
        px={{ base: 4, md: 40 }} 
        textAlign={isSmallerScreen ? "center" : "left"}
        mb={4}
      >
        LOCATIONS
      </Heading>
      <Flex 
        flexDirection={isSmallerScreen ? "column" : "row"} // Adjust for smaller screens
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 40 }}
        py={6} 
        mb={0} 
      >
        <Box flex="1" p={4}>
          <Image 
            src={buzzedgoatpic20} 
            // width={isSmallerScreen ? '100%' : '80%'} 
            boxSize={isSmallerScreen ? "100%" : "100%"} 
            objectFit="contain"
            borderRadius="md"
          />
        </Box>
        <Box 
          flex="2" 
          p={4} 
          textAlign={isSmallerScreen ? "center" : "center"}
        >
          <Heading>
            AHWATUKEE
          </Heading>
          <Text 
            mb={2} 
            mt={4} 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black'
          >
            Thank you for the continuous support for voting us Ahwatukee's best coffee shop 5 years running!! 
            We are Tukee's local coffee shop!
          </Text>
          <Text 
            mb={2} 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black'
          >
            4302 East Ray Road, Phoenix, Arizona 85044, United States
          </Text>
          <Text 
            mb={4} 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black'
            fontWeight='bold'
          >
            Hours
          </Text>
          <List 
            mb={4} 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black'
          >
            <ListItem>
                Mon 7:00 am – 3:00 pm
            </ListItem>
            <ListItem>
                Tue 7:00 am – 7:00 pm
            </ListItem>
            <ListItem>
                Wed 7:00 am – 7:00 pm
            </ListItem>
            <ListItem>
                Thu 7:00 am – 7:00 pm
            </ListItem>
            <ListItem>
                Fri 7:00 am – 7:00 pm
            </ListItem>
            <ListItem>
                Sat 7:00 am – 5:00 pm
            </ListItem>
            <ListItem>
                Sun 7:00 am – 3:00 pm
            </ListItem>
          </List>
        </Box>
      </Flex>
      <Flex 
        flexDirection={isSmallerScreen ? "column" : "row"} 
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 40 }}
        py={6} 
        mb={0} 
      >
        <Box flex="1" p={4}>
          <Image 
            src={tempeLocationPic} 
            // width={isSmallerScreen ? '100%' : '80%'} 
            boxSize={isSmallerScreen ? "100%" : "100%"} 
            objectFit="contain"
            borderRadius="md"
          />
        </Box>
        <Box 
            flex="2" 
            p={4} 
            textAlign={isSmallerScreen ? "center" : "center"}
        >
          <Heading>
            TEMPE
          </Heading>
          <Text 
            mb={2} 
            mt={4} 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black'
          >
            Bringing Ahwatukee's favorite coffee shop to Tempe! 
            Located off the 60 on Southern and McClintock. Drive Thru open.
          </Text>
          <Text 
            mb={2} 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black'
          >
            3415 South McClintock Drive, STE 114 Tempe, Arizona 85282, United States
          </Text>
          <Text 
            mb={4} 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black'
            fontWeight='bold'
          >
            Hours
          </Text>
          <List 
            mb={4} 
            fontFamily='Helvetica, arial, sans-serif' 
            color='black'
          >
            <ListItem>
                Mon 6:30 am – 3:00 pm
            </ListItem>
            <ListItem>
                Tue 6:30 am – 5:00 pm
            </ListItem>
            <ListItem>
                Wed 6:30 am – 5:00 pm
            </ListItem>
            <ListItem>
                Thu 6:30 am – 5:00 pm
            </ListItem>
            <ListItem>
                Fri 6:30 am – 5:00 pm
            </ListItem>
            <ListItem>
                Sat 6:30 am – 5:00 pm
            </ListItem>
            <ListItem>
                Sun 6:30 am – 5:00 pm
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  </Box>
  )
}
