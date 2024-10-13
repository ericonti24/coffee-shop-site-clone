import { Box, Flex, Heading, Button, IconButton, useDisclosure, Image, Text, Icon } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ScreenSizeDetector from './IsSmallerScreen';
import { useState, useEffect } from 'react';
import buzzedgoatpic21 from '../public/images/buzzedgoatpic21.jpeg';
// import { MdLocalFireDepartment } from 'react-icons/md';
import { AiOutlineAlert } from "react-icons/ai";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallerScreen = ScreenSizeDetector();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const buzzedgoatpic21 = "/_next/static/media/buzzedgoatpic21.b2e09aed.jpeg";

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
      width='100%' 
      bg={isSmallerScreen ? 'black' : 'black'} 
      p={0} 
      zIndex='999' 
      top='0' 
      left='0' 
      right='0'
    >
      {/* Announcement Bar */}
      <Flex 
        justifyContent="center" 
        alignItems="center" 
        bg="white" 
        color="black" 
        py={2}
      >
        <AiOutlineAlert style={{ marginRight: '10px' }} />
        <Text fontSize={{base: "md", md: "lg"}} fontWeight="bold">
          ALL FIRST RESPONDERS GET 15% OFF
        </Text>
        <AiOutlineAlert style={{ marginLeft: '10px' }} />
      </Flex>
      {/* Header */}
      <Flex 
        justifyContent="space-between" 
        alignItems="center" 
        width="100%" 
        py={2}
      >
        {/* Logo */}
        <Flex alignItems="center" justifyContent="center">
          <Link href="/">
            <Image 
              src={buzzedgoatpic21} 
              alt="Logo" 
              boxSize={{ base: "70px", md: "90px" }} 
              ml={6} 
              borderRadius="full" 
              cursor="pointer"  // Indicates the image is clickable
            />
          </Link>
        </Flex>

        {/* Desktop Navigation */}
        {!isSmallerScreen && (
          <Flex justifyContent="center" alignItems="center" width="100%"> 
            <Link href="/menu">
              <Button 
                variant="link" 
                color="white" 
                fontSize="2xl" 
                mr={10} 
                _hover={{ textDecoration: 'none' }} 
                borderBottom={router.pathname === '/menu' ? '2px solid white' : 'none'} 
                borderBottomRadius={0}
              >
                MENU
              </Button>
            </Link>
            <Link href="/media">
              <Button 
                variant="link" 
                color="white" 
                fontSize="2xl" 
                mr={10} 
                _hover={{ textDecoration: 'none' }} 
                borderBottom={router.pathname === '/media' ? '2px solid white' : 'none'} 
                borderBottomRadius={0}
              >
                MEDIA
              </Button>
            </Link>
            <Link href="/events">
              <Button 
                variant="link" 
                color="white" 
                fontSize="2xl" 
                mr={10} 
                _hover={{ textDecoration: 'none' }} 
                borderBottom={router.pathname === '/events' ? '2px solid white' : 'none'} 
                borderBottomRadius={0}
              >
                EVENTS
              </Button>
            </Link>
            <Link href="/shop">
              <Button 
                variant="link" 
                color="white" 
                fontSize="2xl" 
                _hover={{ textDecoration: 'none' }} 
                borderBottom={router.pathname === '/shop' ? '2px solid white' : 'none'} 
                borderBottomRadius={0}
              >
                SHOP
              </Button>
            </Link>
          </Flex>
        )}

        {/* Mobile Navigation */}
        {isSmallerScreen && (
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            color='white'
            style={{ fontSize: "2rem", marginRight: '1px' }}
          />
        )}
      </Flex>

      {/* Mobile Menu Overlay */}
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
            <Button 
              variant="link" 
              fontFamily='Helvetica, arial, sans-serif' 
              color="rgb(27, 27, 27)" 
              mb={10} 
              fontSize="40" 
              onClick={onClose} 
              borderBottom={router.pathname === '/' ? '2px solid black' : 'none'} 
              borderBottomRadius={0}
            >
              HOME
            </Button>
          </Link>
          <Link href="/menu">
            <Button 
              variant="link" 
              fontFamily='Helvetica, arial, sans-serif' 
              color="rgb(27, 27, 27)" 
              mb={10} 
              fontSize="40" 
              onClick={onClose} 
              borderBottom={router.pathname === '/menu' ? '2px solid black' : 'none'} 
              borderBottomRadius={0}
            >
              MENU
            </Button>
          </Link>
          <Link href="/media">
            <Button 
              variant="link" 
              fontFamily='Helvetica, arial, sans-serif' 
              color="rgb(27, 27, 27)" 
              mb={10} 
              fontSize="40" 
              onClick={onClose} 
              borderBottom={router.pathname === '/media' ? '2px solid black' : 'none'} 
              borderBottomRadius={0}
            >
              MEDIA
            </Button>
          </Link>
          <Link href="/events">
            <Button 
              variant="link" 
              fontFamily='Helvetica, arial, sans-serif' 
              color="rgb(27, 27, 27)" 
              mb={10} 
              fontSize="40" 
              onClick={onClose} 
              borderBottom={router.pathname === '/events' ? '2px solid black' : 'none'} 
              borderBottomRadius={0}
            >
              EVENTS
            </Button>
          </Link>
          <Link href="/shop">
            <Button 
              variant="link" 
              fontFamily='Helvetica, arial, sans-serif' 
              color="rgb(27, 27, 27)" 
              mb={10} 
              fontSize="40" 
              onClick={onClose} 
              borderBottom={router.pathname === '/shop' ? '2px solid black' : 'none'} 
              borderBottomRadius={0}
            >
              SHOP
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Header;
