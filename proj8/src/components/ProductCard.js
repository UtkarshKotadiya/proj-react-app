// src/components/ProductCard.js
import React from 'react';
import '../pages/Products.css';


const ProductCard = ({ product }) => {
  return (
    <section>
      <img src={product.img_name} alt={product.description} />
      <h5>{product.description}</h5>
      <p>{product.details.join(', ')}</p>
      <p>${product.price}</p>
      <p>{product.brand}</p>
    </section>
  );
};

export default ProductCard;
