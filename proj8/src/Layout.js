import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import './components/Header.css';
import './components/Footer.css';


const Layout = () => {
  return (
    <div>
      <Header />
      <nav id='menu-div'>
        <ul id="home-nav">
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
