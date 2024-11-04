import React from 'react';
import './Sale.css';

const Sale = () => {
    return (
        <div>
            <div id="main-sale-content">
                <div className="columns" id="sale-div">

                    <aside id="drop-down-sale">
                        <div className="filter-container">
                            <div className="filter-dropdown">
                                <label htmlFor="product-type">Product Type</label>
                                <select id="product-type" name="product-type">
                                    <option value="">Select Product Type</option>
                                    <option value="ring">Ring</option>
                                    <option value="necklace">Necklace</option>
                                    <option value="bracelet">Bracelet</option>
                                    <option value="earrings">Earrings</option>
                                    <option value="watches">Watches</option>
                                    <option value="pendants">Pendants</option>
                                </select>
                            </div>
                            
                            <div className="filter-dropdown">
                                <label htmlFor="metal">Metal</label>
                                <select id="metal" name="metal">
                                    <option value="">Select Metal</option>
                                    <option value="gold">Gold</option>
                                    <option value="silver">Silver</option>
                                    <option value="platinum">Platinum</option>
                                    <option value="rose-gold">Rose Gold</option>
                                    <option value="diamonds">Diamond</option>
                                </select>
                            </div>
                            
                            <div className="filter-dropdown">
                                <label htmlFor="karat">Karat</label>
                                <select id="karat" name="karat">
                                    <option value="">Select Karat</option>
                                    <option value="24k">24K</option>
                                    <option value="18k">18K</option>
                                    <option value="14k">14K</option>
                                    <option value="10k">10K</option>
                                </select>
                            </div>
                            
                            <div className="filter-dropdown">
                                <label htmlFor="color">Color</label>
                                <select id="color" name="color">
                                    <option value="">Select Color</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="white">White</option>
                                    <option value="rose">Rose</option>
                                    <option value="green">Green</option>
                                </select>
                            </div>
                        </div>
                    </aside>

                    <section id="top-section">
                        <div className="sale-stuff" id="sale-products">
                            <section>
                                <img src="/proj_imgs/sale/pendant-heart.jpg" alt="Heart Pendant (Gold)" />
                                <h5> Heart Pendant (Gold) </h5>
                            </section>                   
                            <section>
                                <img src="/proj_imgs/sale/pendant-cross.jpg" alt="Cross Pendant" />
                                <h5> Cross Pendant </h5>
                            </section>                   
                            <section>
                                <img src="/proj_imgs/sale/pendant-LS.jpg" alt="Last Supper Pendant" />
                                <h5> Last Supper Pendant </h5>
                            </section>                   
                            <section>
                                <img src="/proj_imgs/sale/pendant-W.jpg" alt="World Pendant" />
                                <h5> World Pendant </h5>
                            </section>
                            <section>
                                <img src="/proj_imgs/sale/initial-ring.jpg" alt="Initial Ring (Gold)" />
                                <h5> Initial Ring (Gold) </h5>
                            </section>
                            <section>
                                <img src="/proj_imgs/sale/fancy-ring.jpg" alt="Fancy Ring (Gold)" />
                                <h5> Fancy Ring (Gold)</h5>
                            </section>
                            <section>
                                <img src="/proj_imgs/sale/nugget-ring.jpg" alt="Nugget Ring (Gold)" />
                                <h5> Nugget Ring (Gold) </h5>
                            </section>
                            <section>
                                <img src="/proj_imgs/sale/jesus-ring.jpg" alt="Jesus Ring (Gold)" />
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
