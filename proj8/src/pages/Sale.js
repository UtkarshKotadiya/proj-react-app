// src/pages/Sale.js
import React from 'react';
import './Sale.css';
import FilterDropdowns from '../components/dropdown.js';


const Sale = () => {
    return (
        <div>
            <div id="main-sale-content">
                <div className="columns" id="sale-div">

                    <FilterDropdowns />

                    <section id="top-section">
                        <div className="sale-stuff" id="sale-products">
                            <section>
                                <img src={`${process.env.PUBLIC_URL}/proj_imgs/sale/pendant-heart.jpg`} alt="Heart Pendant (Gold)" />
                                <h5> Heart Pendant (Gold) </h5>
                            </section>                   
                            <section>
                                <img src={`${process.env.PUBLIC_URL}/proj_imgs/sale/pendant-cross.jpg`} alt="Cross Pendant" />
                                <h5> Cross Pendant </h5>
                            </section>                   
                            <section>
                                <img src={`${process.env.PUBLIC_URL}/proj_imgs/sale/pendant-LS.jpg`} alt="Last Supper Pendant" />
                                <h5> Last Supper Pendant </h5>
                            </section>                   
                            <section>
                                <img src={`${process.env.PUBLIC_URL}/proj_imgs/sale/pendant-W.jpg`} alt="World Pendant" />
                                <h5> World Pendant </h5>
                            </section>
                            <section>
                                <img src={`${process.env.PUBLIC_URL}/proj_imgs/sale/initial-ring.jpg`} alt="Initial Ring (Gold)" />
                                <h5> Initial Ring (Gold) </h5>
                            </section>
                            <section>
                                <img src={`${process.env.PUBLIC_URL}/proj_imgs/sale/fancy-ring.jpg`} alt="Fancy Ring (Gold)" />
                                <h5> Fancy Ring (Gold)</h5>
                            </section>
                            <section>
                                <img src={`${process.env.PUBLIC_URL}/proj_imgs/sale/nugget-ring.jpg`} alt="Nugget Ring (Gold)" />
                                <h5> Nugget Ring (Gold) </h5>
                            </section>
                            <section>
                                <img src={`${process.env.PUBLIC_URL}/proj_imgs/sale/jesus-ring.jpg`} alt="Jesus Ring (Gold)" />
                                <h5> Jesus Ring (Gold) </h5>
                            </section>
                        </div>
                    </section>           
                </div>
            </div>
        </div>
    );
}

export default Sale;
