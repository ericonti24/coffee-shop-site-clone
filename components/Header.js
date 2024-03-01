import { Box, Flex, Heading, Button, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ScreenSizeDetector from './IsSmallerScreen';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallerScreen = ScreenSizeDetector()
  const router = useRouter();

  const toggleMenu = () => {
    isOpen ? onClose() : onOpen();
  };

  return (
    <Box
      bg='white'
      p={4} 
      color="black"
      position='sticky'
      zIndex='999'
      borderBottom='1px solid black' // Add border bottom for small screens
      borderBottomWidth={{ base: '1px', md: '1px' }} // Adjust border width for small screens
      maxW={{ base: '90%', md: '1100px' }} // Set max width for large screens
      mx="auto" // Center align the header
      top='0'
      transition="background-color 0.3s ease-in-out"
      >
      <Flex 
        justifyContent="space-between" 
        alignItems="center"
      >
        {isSmallerScreen ? (
          <Flex alignItems="center">
            <Heading as="h1" size="lg" mr={20}>
              Coffee Shop Name
            </Heading>
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="ghost"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            />
          </Flex>
        ) : (
          <Flex direction="column" alignItems="center" flex={1}>
            <Heading as="h1" size="lg" mb={6}>
              Coffee Shop Name
            </Heading>
            <Flex justifyContent="center" flex={1}>
              <Link href="/">
                <Button variant="link" color="black" fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/' ? '1px solid black' : 'none'}  borderBottomRadius={0}>
                  HOME
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="link" color="black" fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/menu' ? '1px solid black' : 'none'}  borderBottomRadius={0}>
                  MENU
                </Button>
              </Link>
              <Link href="/media">
               <Button variant="link" color="black" fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/media' ? '1px solid black' : 'none'}  borderBottomRadius={0}>
                 MEDIA
               </Button>
             </Link>
             <Link href="/events">
               <Button variant="link" color="black" fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/events' ? '1px solid black' : 'none'}  borderBottomRadius={0}>
                 EVENTS
               </Button>
             </Link>
             <Link href="/shop">
               <Button variant="link" color="black" fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/shop' ? '1px solid black' : 'none'}  borderBottomRadius={0}>
                 SHOP
               </Button>
             </Link>
             <Link href="/beer-menu">
               <Button variant="link" color="black" fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/beer-menu' ? '1px solid black' : 'none'}  borderBottomRadius={0}>
                 BEER MENU
               </Button>
             </Link>
            </Flex>
          </Flex>
        )}
      </Flex>
      {isOpen && isSmallerScreen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={10}
          bg="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            icon={<CloseIcon />}
            variant="ghost"
            aria-label="Close navigation"
            position="absolute"
            top={6}
            right={6}
            onClick={onClose}
          />
          <Link href="/">
            <Button variant="link" color="black" mb={10} fontSize="50" onClick={onClose} borderBottom={router.pathname === '/' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
              HOME
            </Button>
          </Link>
          <Link href="/menu">
            <Button variant="link" color="black" mb={10} fontSize="50" onClick={onClose} borderBottom={router.pathname === '/menu' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
              MENU
            </Button>
          </Link>
          <Link href="/media">
             <Button variant="link" color="black" mb={10} fontSize="50" onClick={onClose} borderBottom={router.pathname === '/media' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
               MEDIA
             </Button>
           </Link>
           <Link href="/events">
             <Button variant="link" color="black" mb={10} fontSize="50" onClick={onClose} borderBottom={router.pathname === '/events' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
               EVENTS
             </Button>
           </Link>
           <Link href="/shop">
             <Button variant="link" color="black" mb={10} fontSize="50" onClick={onClose} borderBottom={router.pathname === '/shop' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
               SHOP
             </Button>
           </Link>
           <Link href="/beer-menu">
             <Button variant="link" color="black" mb={10} fontSize="50" onClick={onClose} borderBottom={router.pathname === '/beer-menu' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
               BEER MENU
             </Button>
           </Link>
        </Box>
      )}
    </Box>
  );
};

export default Header;














