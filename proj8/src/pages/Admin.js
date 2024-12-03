import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from 'axios';

const Admin = () => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newSaleProduct, setNewSaleProduct] = useState({});

  useEffect(() => {
    // Fetch sale products
    const fetchSaleProducts = async () => {
      try {
        const response = await axios.get('https://project-backend-omz4.onrender.com/api/saleproducts/');
        setSaleProducts(response.data);
      } catch (error) {
        console.error('Error fetching sale products:', error);
      }
    };

    fetchSaleProducts();
  }, []);

  // Handle Add Sale Product
  const handleAddSaleProduct = async () => {
    try {
      const response = await axios.post('https://project-backend-omz4.onrender.com/api/saleproducts', newSaleProduct);
      alert('Sale product added successfully!');
      setSaleProducts((prevProducts) => [...prevProducts, response.data]); // Update state without reloading
      setShowAddDialog(false);
    } catch (error) {
      console.error('Error adding sale product:', error);
      alert('Failed to add sale product.');
    }
  };

  // Handle Delete Sale Product
  const handleDeleteSaleProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this sale product?')) {
      try {
        await axios.delete(`https://project-backend-omz4.onrender.com/api/saleproducts/${id}`);
        alert('Sale product deleted successfully!');
        setSaleProducts((prevProducts) => prevProducts.filter((product) => product._id !== id)); // Update state without reloading
      } catch (error) {
        console.error('Error deleting sale product:', error);
        alert('Failed to delete sale product.');
      }
    }
  };

  return (
    <div id="admin-panel">
      <h1>Admin Panel</h1>

      <section>
        <h2>Sale Products</h2>
        <ul>
          {saleProducts.map((product) => (
            <li key={product._id}>
              {product.title} - {product.alt}{' '}
              <button onClick={() => handleDeleteSaleProduct(product._id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => setShowAddDialog(true)}>Add Sale Product</button>
      </section>

      {showAddDialog && (
        <div className="add-dialog">
          <h3>Add Sale Product</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddSaleProduct();
            }}
          >
            <label>
              Title:
              <input
                type="text"
                onChange={(e) => setNewSaleProduct({ ...newSaleProduct, title: e.target.value })}
                required
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                onChange={(e) => setNewSaleProduct({ ...newSaleProduct, alt: e.target.value })}
                required
              />
            </label>
            <label>
              Image Path:
              <input
                type="text"
                onChange={(e) => setNewSaleProduct({ ...newSaleProduct, src: e.target.value })}
                required
              />
            </label>
            <button type="submit">Add Sale Product</button>
            <button
              type="button"
              onClick={() => {
                setShowAddDialog(false);
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
