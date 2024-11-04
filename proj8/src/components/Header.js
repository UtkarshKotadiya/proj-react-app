// src/components/Header.js
import './Header.css';

function Header() {
  return (
    <header>
      <div className="columns" id="header-div">
        <div id="header-logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/proj_imgs/top-logo.png`} alt="Logo" width="500" height="200" /> 
          </Link>
        </div>
        <div className="columns" id="top-right-menu">
          <img src={`${process.env.PUBLIC_URL}/proj_imgs/login_logo.png`} alt="Login" height="50" width="50" />
          <img src={`${process.env.PUBLIC_URL}/proj_imgs/cart.png`} alt="Cart" height="50" width="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;


