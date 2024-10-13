import { Box, Heading, Image, Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import buzzedgoatpic24 from '../../public/images/buzzedgoatpic24.jpeg'
import buzzedgoatpic26 from '../../public/images/buzzedgoatpic26.jpeg'
import buzzedgoatpic27 from '../../public/images/buzzedgoatpic27.jpeg'

export default function Experience() {
    const buzzedgoatpic24 = "/_next/static/media/buzzedgoatpic24.f042a258.jpeg"
    const buzzedgoatpic26 = "/_next/static/media/buzzedgoatpic26.0904a17a.jpeg"
    const buzzedgoatpic27 = "/_next/static/media/buzzedgoatpic27.2f7a9b91.jpeg"
    const isSmallerScreen = ScreenSizeDetector();
    const router = useRouter();


  return (
    <Box 
        textAlign="center" 
        width="100%" 
        px={{ base: 4, md: 12}}
        py={{ base: '0', md: '0' }}
        // border='1px solid red'
    >
        <Box mb='8' textAlign="center">
          <Heading
            // as="h2"
            // fontFamily='Helvetica, arial, sans-serif'
            // fontSize='25'
            // width="100%"
            // color='black'
            // paddingY="30px" 
            display="flex" 
            justifyContent="flex-start"
            width='100%'
            fontFamily='Helvetica, arial, sans-serif'
            size='4xl'
            color='black'
            px={{ base: 4, md: 40 }} 
            textAlign="left" 
            mb={4}
          >
            COME EXPERIENCE
          </Heading>
          
          <Flex 
            // maxWidth={isSmallerScreen ? '100%' : '70%'}
            // margin={isSmallerScreen ? '0' : '0 auto'}
            // alignItems="center" 
            // flexDirection={isSmallerScreen ? "column" : "row"} 
            // justify="center"
            flexDirection={isSmallerScreen ? "column" : "row"} // Adjust for smaller screens
            alignItems="center"
            justifyContent="space-between"
            px={{ base: 4, md: 40 }}
            py={0} 
            mb={0} 
          >
            <Box 
                flex="1" 
                textAlign="center" 
                mb={isSmallerScreen ? 4 : 0} 
                mr={isSmallerScreen ? 0 : 1}
            >
              <Link 
                href='https://www.instagram.com/p/CNsxOAJl0h8/' 
                target='_blank' 
                rel='noopener noreferrer'
            >
                <Image 
                    src={buzzedgoatpic24} 
                    boxSize={isSmallerScreen ? "100%" : "100%"} 
                    // mb={0} 
                    // width={isSmallerScreen ? '100%' : '80%'} 
                    objectFit="contain"
                    borderRadius="md"
                />
              </Link>
            </Box>
            <Box 
                flex="1" 
                textAlign="center" 
                mb={isSmallerScreen ? 4 : 0} 
                ml={isSmallerScreen ? 0 : 4}
            >
              <Link 
                href='https://www.instagram.com/p/C33DwbaP4gk/' 
                target='_blank' 
                rel='noopener noreferrer'
            >
                <Image 
                    src={buzzedgoatpic26} 
                    boxSize={isSmallerScreen ? "100%" : "100%"} 
                    // mb={0} 
                    // width={isSmallerScreen ? '100%' : '80%'} 
                    objectFit="contain"
                    borderRadius="md"
                />
              </Link>
            </Box>
            <Box 
                flex="1" 
                textAlign="center" 
                mb={isSmallerScreen ? 4 : 0} 
                ml={isSmallerScreen ? 0 : 4}
            >
              <Link 
                href='https://www.instagram.com/p/CdrGLrhvW0J/' 
                target='_blank' 
                rel='noopener noreferrer'
            >
                <Image 
                    src={buzzedgoatpic27} 
                    boxSize={isSmallerScreen ? "100%" : "100%"} 
                    // mb={0} 
                    // width={isSmallerScreen ? '100%' : '80%'} 
                    objectFit="contain"
                    borderRadius="md"
                />
              </Link>
            </Box>
          </Flex>
        </Box>
    </Box>
  )
}
