import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import BrandName from '../components/BrandName';
import Footer from '../components/Footer';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <p>Navbar</p>
        <Link to="/" className="link">
          Home Page{' '}
        </Link>
        <Link to="/Resources" className="link">
          All Resources Page{' '}
        </Link>
        <Link to="/FreshHub" className="link">
          Fresh Hub{' '}
        </Link>
      </nav>
      <Outlet />
      <div className="Footer">
        <Footer />
        <BrandName />
      </div>
    </>
  );
};

export default Layout;
