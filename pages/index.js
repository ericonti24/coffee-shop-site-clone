import { useRouter } from 'next/router';
import { Box} from '@chakra-ui/react';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import Hero from '@/components/Home Page/Hero';
import About from '@/components/Home Page/About';
import Locations from '@/components/Home Page/Locations';
import Experience from '@/components/Home Page/Experience';


const HomePage = () => {

  const router = useRouter();
  const isSmallerScreen = ScreenSizeDetector();

  return (
    <Box width="100%">
      <Hero />
      {/* <About />
      <Locations />
      <Experience /> */}
    </Box>
  );
};


export default HomePage;
