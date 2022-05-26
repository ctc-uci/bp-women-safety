import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import BrandName from '../components/BrandName';
import Footer from '../components/Footer';
import './Layout.css';
import WomxnCenter from './WomxnCenter';
import {Route, Routes} from "react-router-dom";

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
        <Link to="/About" className="link">
          About Page {' '}
        </Link>
        <Link to="/womxncenter" >
          Womxn Center{' '}
        </Link>
      < Link to="/safetyEscorts">
         Safety Escorts{' '}
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
