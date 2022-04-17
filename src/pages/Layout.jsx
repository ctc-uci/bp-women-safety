import { Outlet } from 'react-router-dom';
import BrandName from '../components/BrandName';
import Footer from '../components/Footer';
/*add link later*/

const Layout = () => {
  <>
    <nav>
      <p>Navbar</p>
    </nav>
    <Outlet />
    <div className="Footer">
      <Footer />
      <BrandName />
    </div>
  </>;
};

export default Layout;
