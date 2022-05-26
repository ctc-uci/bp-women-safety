import { Outlet } from 'react-router-dom';
import BrandName from '../components/BrandName';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Layout.css';

const Layout = () => {
  return (
  <>
    <Navbar />
    <Outlet />
    <div className="Footer">
      <Footer />
      <BrandName />
    </div>
  </>);
};

export default Layout;
