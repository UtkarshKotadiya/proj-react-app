// src/pages/About.js
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div id="au-main-content">

      <div className="columns" id="au-hist"> 
        <section id="au-top-img">
          <img src={`${process.env.PUBLIC_URL}/proj_imgs/store-pic.jpg`} height="300" width="500" alt="Store" />
        </section>
        <section id="au-top-text">
          <h2>Store History</h2>
          <p>
            Paramount Jewelers' history dates back to the early 2000s, when Mr. Frank first got into the business 
            through a kiosk in the mall called GoldNJewels. After years of hard work and dedication, Mr. Frank 
            opened a full-fledged store in the mall in 2009. Since then, Paramount Jewelers has been serving clients 
            from all over with the utmost dedication and hospitality. Many of our clients exclusively shop jewelry 
            only at Paramount Jewelers because of the outstanding customer service and the focus on building a 
            relationship with the client rather than seeing the process as a mere business transaction.
          </p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </section>
      </div>

      <div id="au-ppl-div">
        <h1>Jewelers</h1>
        <div id="au-ppl" className="columns">
          <section className="jeweler-info">
            <img src={`${process.env.PUBLIC_URL}/proj_imgs/j1.jpg`} alt="Mr. Frank" />
            <div className="bio">
              <h3>Faisal "Frank" Bashir</h3>
              <p>
                Mr. Frank founded Paramount Jewelers and has been in the jewelry business for over two decades. 
                He started with a small kiosk and grew his business into a renowned jewelry store known 
                for its customer service and quality craftsmanship.
              </p>
            </div>
          </section>
          <section className="jeweler-info">
            <img src={`${process.env.PUBLIC_URL}/proj_imgs/j2.jpg`} alt="Umar" />
            <div className="bio">
              <h3>Umar Bashir</h3>
              <p>
                Umar is a skilled jeweler with a passion for creating unique and customized pieces. 
                He has been working with Paramount Jewelers for over 5 years and is known for 
                his attention to detail and dedication to customer satisfaction.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
