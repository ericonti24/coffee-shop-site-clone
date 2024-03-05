import { Box, Flex, Heading, Button, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ScreenSizeDetector from './IsSmallerScreen';
import { useState, useEffect } from 'react';


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallerScreen = ScreenSizeDetector()
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMenu = () => {
    isOpen ? onClose() : onOpen();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      bg={isScrolled ? 'black' : 'white'} 
      p={2} 
      color={isScrolled ? 'white' : 'black'}
      position='sticky'
      zIndex='999'
      maxW={{ base: isScrolled ? '100%' : '90%', md: isScrolled ? '100%' : '100%' }}
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
            <Link href="/">
              <Heading as="h1" size="lg" mr={20} fontFamily='Helvetica, arial, sans-serif'>
                Coffee Shop Name
              </Heading>
            </Link>
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="ghost"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
              color={isScrolled ? 'white' : 'black'} // Adjust button color
            />
          </Flex>
        ) : (
          <Flex direction="column" alignItems="center" flex={1} fontFamily='Helvetica, arial, sans-serif'>
            <Heading as="h1" size="lg" mb={4} >
              Coffee Shop Name
            </Heading>
            <Flex justifyContent="center" flex={1}>
              <Link href="/">
                <Button variant="link" color={isScrolled ? 'white' : 'black'} fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/' ? (isScrolled ? '1px solid white' : '1px solid black') : 'none'}  borderBottomRadius={0}>
                  HOME
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="link" color={isScrolled ? 'white' : 'black'} fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/menu' ? (isScrolled ? '1px solid white' : '1px solid black') : 'none'}  borderBottomRadius={0}>
                  MENU
                </Button>
              </Link>
              <Link href="/media">
               <Button variant="link" color={isScrolled ? 'white' : 'black'} fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/media' ? (isScrolled ? '1px solid white' : '1px solid black') : 'none'}  borderBottomRadius={0}>
                 MEDIA
               </Button>
             </Link>
             <Link href="/events">
               <Button variant="link" color={isScrolled ? 'white' : 'black'} fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/events' ? (isScrolled ? '1px solid white' : '1px solid black') : 'none'}  borderBottomRadius={0}>
                 EVENTS
               </Button>
             </Link>
             <Link href="/shop">
               <Button variant="link" color={isScrolled ? 'white' : 'black'} fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/shop' ? (isScrolled ? '1px solid white' : '1px solid black') : 'none'}  borderBottomRadius={0}>
                 SHOP
               </Button>
             </Link>
             <Link href="/beer-menu">
               <Button variant="link" color={isScrolled ? 'white' : 'black'} fontSize="lg" mr={8} _hover={{ textDecoration: 'none' }} borderBottom={router.pathname === '/beer-menu' ? '1px solid black' : 'none'}  borderBottomRadius={0}>
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
            <Button variant="link" fontFamily='Helvetica, arial, sans-serif' color="rgb(27, 27, 27)" mb={10} fontSize="40" onClick={onClose} borderBottom={router.pathname === '/' ? '2px solid black' : 'none'}  borderBottomRadius={0} >
              HOME
            </Button>
          </Link>
          <Link href="/menu">
            <Button variant="link" fontFamily='Helvetica, arial, sans-serif' color="rgb(27, 27, 27)" mb={10} fontSize="40" onClick={onClose} borderBottom={router.pathname === '/menu' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
              MENU
            </Button>
          </Link>
          <Link href="/media">
             <Button variant="link" fontFamily='Helvetica, arial, sans-serif' color="rgb(27, 27, 27)" mb={10} fontSize="40" onClick={onClose} borderBottom={router.pathname === '/media' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
               MEDIA
             </Button>
           </Link>
           <Link href="/events">
             <Button variant="link" fontFamily='Helvetica, arial, sans-serif' color="rgb(27, 27, 27)" mb={10} fontSize="40" onClick={onClose} borderBottom={router.pathname === '/events' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
               EVENTS
             </Button>
           </Link>
           <Link href="/shop">
             <Button variant="link" fontFamily='Helvetica, arial, sans-serif' color="rgb(27, 27, 27)" mb={10} fontSize="40" onClick={onClose} borderBottom={router.pathname === '/shop' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
               SHOP
             </Button>
           </Link>
           <Link href="/beer-menu">
             <Button variant="link" fontFamily='Helvetica, arial, sans-serif' color="rgb(27, 27, 27)" mb={10} fontSize="40" onClick={onClose} borderBottom={router.pathname === '/beer-menu' ? '2px solid black' : 'none'}  borderBottomRadius={0}>
               BEER MENU
             </Button>
           </Link>
        </Box>
      )}
    </Box>
  );
};

export default Header;













