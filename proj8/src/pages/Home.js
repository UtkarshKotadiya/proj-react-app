import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div id="main-home-content">
      <section id="home-page-img">
        <img src="/proj_imgs/HP1.5.png" alt="Left Main" id="left-main-img" />
        <img src="/proj_imgs/HP1.png" alt="Right Main" id="right-main-img" />
      </section>

      <div id="home-page-content">
        <h1> Featured Products </h1>
        <div className="columns" id="ft-imgs">
          <section>
            <Link to="/products">
              <img src="/proj_imgs/HP2.jpg" alt="Bracelets" height="200" width="300" />
            </Link>
            <h3>bracelets</h3>
          </section>
          <section>
            <Link to="/products">
              <img src="/proj_imgs/HP3.jpg" alt="Necklaces" height="200" width="300" />
            </Link>
            <h3>necklaces</h3>
          </section>
          <section>
            <Link to="/products">
              <img src="/proj_imgs/HP4.jpg" alt="Watches" height="200" width="300" />
            </Link>
            <h3>watches</h3>
          </section>
          <section>
            <Link to="/products">
              <img src="/proj_imgs/HP5.jpg" alt="Rings" height="200" width="300" />
            </Link>
            <h3>rings</h3>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
