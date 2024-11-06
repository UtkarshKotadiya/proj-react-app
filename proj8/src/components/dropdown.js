// src/components/FilterDropdowns.js
import React from 'react';

const FilterDropdowns = () => {
    return (
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
    );
};

export default FilterDropdowns;
