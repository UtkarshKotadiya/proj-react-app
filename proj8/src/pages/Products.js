import './Products.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../components/ProductCategory.js';

const Products = () => {
  const [products, setProducts] = useState({ rings: [], necklaces: [], bracelets: [], watches: [] });

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get('https://project-backend-omz4.onrender.com/api/products/');
              setProducts(response.data);
          } catch (error) {
              console.error('Error fetching product data:', error);
          }
      };
      fetchProducts();
  }, []);

  return (
    <div id="main-prod-content">
      {Object.keys(products).map((category) => (
        <Category key={category} title={category.toUpperCase()} products={products[category]} />
      ))}
    </div>
  );
}

export default Products;
