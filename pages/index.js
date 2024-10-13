import { useRouter } from 'next/router';
import ScreenSizeDetector from '@/components/IsSmallerScreen';
import Hero from '@/components/Home Page/Hero';
import About from '@/components/Home Page/About';
import Locations from '@/components/Home Page/Locations';
import Experience from '@/components/Home Page/Experience';


const HomePage = () => {

  const router = useRouter();
  const isSmallerScreen = ScreenSizeDetector();

  return (
    <>
      <Hero />
      <About />
      <Locations />
      <Experience />
    </>
  );
};


export default HomePage;
