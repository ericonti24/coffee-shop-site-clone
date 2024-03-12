import Header from './Header';
import Footer from './Footer';
import ScreenSizeDetector from './IsSmallerScreen';

const Layout = ({ children }) => {
  const isSmallerScreen = ScreenSizeDetector()
  return (
    <div className='navbar' style={{height: isSmallerScreen ? '500%' : '300hv', display: 'flex', flexDirection: 'column', width: '100%'}}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
