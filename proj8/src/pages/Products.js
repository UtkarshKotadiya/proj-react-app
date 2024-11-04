import './Products.css';

const Products = () => {
  return (
    <div id="main-prod-content">
      <div id="rings">
        <h1>RINGS</h1>
        <div className="products" id="ring-products"></div>
      </div>

      <div id="necklaces">
        <h1>NECKLACES</h1>
        <div className="products" id="necklace-products"></div>    
      </div>

      <div id="bracelets">
        <h1>BRACELETS</h1>
        <div className="products" id="bracelet-products"></div>    
      </div>

      <div id="watches">
        <h1>WATCHES</h1>
        <div className="products" id="watch-products"></div>    
      </div>
    </div>
  );
}

export default Products;
