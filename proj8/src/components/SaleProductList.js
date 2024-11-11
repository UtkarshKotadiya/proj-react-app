import axios from 'axios';
import { useState, useEffect } from 'react';
import '../pages/Sale.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://project-backend-omz4.onrender.com/api/saleproducts/");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section id="top-section">
            <div className="sale-stuff" id="sale-products">
                {products.map((product, index) => (
                    <section key={index}>
                        <img 
                            src={`${process.env.PUBLIC_URL}/${product.src}`} 
                            alt={product.alt} 
                        />
                        <h5>{product.title}</h5>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default ProductList;
