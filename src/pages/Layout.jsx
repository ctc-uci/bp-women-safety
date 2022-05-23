/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
// import { Outlet } from 'react-router-dom';
// import BrandName from '../components/BrandName';
// import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
import './Layout.css';
import IntroSection from '../components/IntroSection/IntroSection';

const Layout = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      {/* <nav>
        <p>Navbar</p>
        <Link to="" className="link">Home Page  </Link>
        <Link to="/Resources" className="link">All Resources Page  </Link>
      </nav> */}
      <IntroSection />
      {/* <Outlet />
      <div className="Footer">
        <Footer />
        <BrandName />
      </div> */}
    </>
  );
};

export default Layout;
