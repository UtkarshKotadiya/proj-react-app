// src/components/StoreHistory.js
import React from 'react';
import { Link } from 'react-router-dom';

const StoreHistory = () => {
    return (
        <div className="columns" id="au-hist">
            <section id="au-top-img">
                <img 
                    src={`${process.env.PUBLIC_URL}/proj_imgs/store-pic.jpg`} 
                    height="300" 
                    width="500" 
                    alt="Store" 
                />
            </section>
            <section id="au-top-text">
                <h2>Store History</h2>
                <p>
                    Paramount Jewelers' history dates back to the early 2000s, when Mr. Frank first got into the 
                    business through a kiosk in the mall called GoldNJewels. After years of hard work and dedication, 
                    Mr. Frank opened a full-fledged store in the mall in 2009. Since then, Paramount Jewelers has 
                    been serving clients from all over with the utmost dedication and hospitality. Many of our clients 
                    exclusively shop jewelry only at Paramount Jewelers because of the outstanding customer service 
                    and the focus on building a relationship with the client rather than seeing the process as a mere 
                    business transaction.
                </p>
                <Link to="/contact" className="cta-button">Contact Us</Link>
            </section>
        </div>
    );
};

export default StoreHistory;
