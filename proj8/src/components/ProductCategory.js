// src/components/ProductCategory.js
import ProductCard from './ProductCard';
import '../pages/Products.css';

const Category = ({ title, products }) => {
    const categoryId = title.toLowerCase();
    return (
        <div id={categoryId}>
            <h1>{title.toUpperCase()}</h1>
            <div className="products" id={`${categoryId}-products`}>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Category;
