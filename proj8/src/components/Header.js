// src/components/Header.js
import './Header.css';

function Header() {
  return (
    <header>
      <div className="columns" id="header-div">
        <div id="header-logo">
          <a href="/"> 
            <img src="/proj_imgs/top-logo.png" alt="Logo" width="500" height="200" /> 
          </a>
        </div>
        <div className="columns" id="top-right-menu">
          <img src="/proj_imgs/login_logo.png" alt="Login" height="50" width="50" />
          <img src="/proj_imgs/cart.png" alt="Cart" height="50" width="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;