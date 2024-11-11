import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import './components/Header.css';
import './components/Footer.css';


const Layout = () => {

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <Header />
      <nav id='menu-div'>
        <div id="menu-toggle" onClick={toggleMenu}>&#x2630;</div>
        <ul id="home-nav" className={isMenuVisible ? '' : 'hidden'}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/sale">SALE</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/admin">ADMIN</Link></li>
        </ul>
      </nav>
        <Outlet />
        <footer>
            &copy; 2024 Paramount Jewelers
        </footer>
    </div>
  );
}

export default Layout;
