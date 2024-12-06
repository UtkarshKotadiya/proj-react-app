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

  // Handle Add or Edit Sale Product
const handleSaveSaleProduct = async (_id) => {
  try {
    if (newSaleProduct._id) {
      // Update existing product
      const response = await axios.put(
        `https://project-backend-omz4.onrender.com/api/saleproducts/${newSaleProduct._id}`
      );
      alert("Sale product updated successfully!");
      setSaleProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === newSaleProduct._id ? response.data : product
        )
      );
    } else {
      // Add new product
      const response = await axios.post(
        "https://project-backend-omz4.onrender.com/api/saleproducts/",
        newSaleProduct
      );
      alert("Sale product added successfully!");
      setSaleProducts((prevProducts) => [...prevProducts, response.data]);
    }
    setNewSaleProduct({ title: "", alt: "", src: "" });
    setShowAddDialog(false);
  } catch (error) {
    console.error("Error saving sale product:", error);
    alert("Failed to save sale product.");
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
              <button onClick={() => {
                setNewSaleProduct(product);
                setShowAddDialog(true);
              }}>
                Edit
              </button>
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
              handleSaveSaleProduct();
            }}
          >
            <label>
              Title:
              <input
                type="text"
                value={newSaleProduct.title}
                onChange={(e) => setNewSaleProduct({ ...newSaleProduct, title: e.target.value })}
                required
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                value={newSaleProduct.alt}
                onChange={(e) => setNewSaleProduct({ ...newSaleProduct, alt: e.target.value })}
                required
              />
            </label>
            <label>
              Image Path:
              <input
                type="text"
                value={newSaleProduct.src}
                onChange={(e) => setNewSaleProduct({ ...newSaleProduct, src: e.target.value })}
                required
              />
            </label>
            <button type="submit">Save</button>
            <button
              type="button"
              onClick={() => {
                setShowAddDialog(false);
                setNewSaleProduct({ title: '', alt: '', src: '' });
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
