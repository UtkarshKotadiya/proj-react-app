import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from 'axios';

const Admin = () => {
  const [products, setProducts] = useState({ rings: [], necklaces: [], bracelets: [], watches: [] });
  const [saleProducts, setSaleProducts] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({});
  const [newSaleProduct, setNewSaleProduct] = useState({});
  const [isAddingSaleProduct, setIsAddingSaleProduct] = useState(false);

  useEffect(() => {
    // Fetch main products
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://project-backend-omz4.onrender.com/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Fetch sale products
    const fetchSaleProducts = async () => {
      try {
        const response = await axios.get('https://project-backend-omz4.onrender.com/api/saleproducts/');
        setSaleProducts(response.data);
      } catch (error) {
        console.error('Error fetching sale products:', error);
      }
    };

    fetchProducts();
    fetchSaleProducts();
  }, []);

  // Handle Add Product or Sale Product
  const handleAddProduct = async () => {
    const apiEndpoint = isAddingSaleProduct
      ? 'https://project-backend-omz4.onrender.com/api/saleproducts'
      : 'https://project-backend-omz4.onrender.com/api/products';
    const dataToAdd = isAddingSaleProduct ? newSaleProduct : newProduct;

    try {
      await axios.post(apiEndpoint, dataToAdd);
      alert('Product added successfully!');
      setShowAddDialog(false);
      window.location.reload(); // Refresh to update the UI
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product.');
    }
  };

  // Handle Delete Product or Sale Product
  const handleDelete = async (id, isSaleProduct) => {
    const apiEndpoint = isSaleProduct
      ? `https://project-backend-omz4.onrender.com/api/saleproducts/${id}`
      : `https://project-backend-omz4.onrender.com/api/products/${id}`;

    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(apiEndpoint);
        alert('Product deleted successfully!');
        window.location.reload(); // Refresh to update the UI
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product.');
      }
    }
  };

  return (
    <div id="admin-panel">
      <h1>Admin Panel</h1>

      <section>
        <h2>Main Products</h2>
        {Object.keys(products).map((category) => (
          <div key={category} className="category-section">
            <h3>{category.toUpperCase()}</h3>
            <ul>
              {products[category].map((product) => (
                <li key={product._id}>
                  {product.title} - {product.description}{' '}
                  <button onClick={() => handleDelete(product._id, false)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={() => {
            setShowAddDialog(true);
            setIsAddingSaleProduct(false);
          }}
        >
          Add Main Product
        </button>
      </section>

      <section>
        <h2>Sale Products</h2>
        <ul>
          {saleProducts.map((product) => (
            <li key={product._id}>
              {product.title} - {product.alt}{' '}
              <button onClick={() => handleDelete(product._id, true)}>Delete</button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setShowAddDialog(true);
            setIsAddingSaleProduct(true);
          }}
        >
          Add Sale Product
        </button>
      </section>

      {showAddDialog && (
        <div className="add-dialog">
          <h3>{isAddingSaleProduct ? 'Add Sale Product' : 'Add Main Product'}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddProduct();
            }}
          >
            <label>
              Title:
              <input
                type="text"
                onChange={(e) =>
                  isAddingSaleProduct
                    ? setNewSaleProduct({ ...newSaleProduct, title: e.target.value })
                    : setNewProduct({ ...newProduct, title: e.target.value })
                }
                required
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                onChange={(e) =>
                  isAddingSaleProduct
                    ? setNewSaleProduct({ ...newSaleProduct, alt: e.target.value })
                    : setNewProduct({ ...newProduct, description: e.target.value })
                }
                required
              />
            </label>
            <label>
              Image Path:
              <input
                type="text"
                onChange={(e) =>
                  isAddingSaleProduct
                    ? setNewSaleProduct({ ...newSaleProduct, src: e.target.value })
                    : setNewProduct({ ...newProduct, img_name: e.target.value })
                }
                required
              />
            </label>
            <button type="submit">Add Product</button>
            <button
              type="button"
              onClick={() => {
                setShowAddDialog(false);
                setNewProduct({});
                setNewSaleProduct({});
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
