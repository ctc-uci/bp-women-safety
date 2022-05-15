import { Outlet } from 'react-router-dom';
import BrandName from '../components/BrandName';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import About from "./About.jsx";
import './Layout.css';
/*add link later*/

const Layout = () => {
  return (
  <>
    <nav>
      <p>Navbar</p>
      <Link to="" className="link">Home Page</Link>
      <Link to="/About" element={<About/>} className="link">About Page</Link>
    </nav>
    <Outlet />
    <div className="Footer">
      <Footer />
      <BrandName />
    </div>
  </>);
};

export default Layout;
