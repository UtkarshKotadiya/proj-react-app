// src/pages/Sale.js
import React from 'react';
import './Sale.css';
import FilterDropdowns from '../components/dropdown.js';
import ProductList from '../components/SaleProductList.js';


const Sale = () => {
    return (
        <div>
            <div id="main-sale-content">
                <div className="columns" id="sale-div">

                    <FilterDropdowns />
                    <ProductList />
                    
                </div>
            </div>
        </div>
    );
}

export default Sale;
