import { Outlet } from 'react-router-dom';
import BrandName from '../components/BrandName';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
  <>
    <nav>
      <p>Navbar</p>
      <Link to="" className="link">Home Page  </Link>
      <Link to="/Resources" className="link">All Resources Page  </Link>
    </nav>
    <Outlet />
    <div className="Footer">
      <Footer />
      <BrandName />
    </div>
  </>);
};

export default Layout;
