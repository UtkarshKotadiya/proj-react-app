import './Admin.css'

const Admin = () => {
    return (
        <div>
            <div id="main-admin-content">
                <div className="form-container">
                    <h2>Add/Edit Product</h2>

                    <form action="submit_product.php" method="POST" encType="multipart/form-data">
                        <label htmlFor="product-name">Product Name:</label>
                        <input type="text" id="product-name" name="product_name" placeholder="Enter product name" required />
                        
                        <label htmlFor="product-description">Description:</label>
                        <textarea id="product-description" name="description" placeholder="Enter product description" rows="4" required></textarea>
                        
                        <label htmlFor="product-type">Product Type:</label>
                        <select id="product-type" name="product_type" required>
                            <option value="">Select Product Type</option>
                            <option value="ring">Ring</option>
                            <option value="necklace">Necklace</option>
                            <option value="bracelet">Bracelet</option>
                            <option value="earrings">Earrings</option>
                        </select>
                        
                        <label htmlFor="metal">Metal:</label>
                        <select id="metal" name="metal" required>
                            <option value="">Select Metal</option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="platinum">Platinum</option>
                            <option value="rose-gold">Rose Gold</option>
                        </select>

                        <label htmlFor="karat">Karat:</label>
                        <select id="karat" name="karat" required>
                            <option value="">Select Karat</option>
                            <option value="24k">24K</option>
                            <option value="18k">18K</option>
                            <option value="14k">14K</option>
                            <option value="10k">10K</option>
                        </select>

                        <label htmlFor="color">Color:</label>
                        <select id="color" name="color" required>
                            <option value="">Select Color</option>
                            <option value="yellow">Yellow</option>
                            <option value="white">White</option>
                            <option value="rose">Rose</option>
                            <option value="green">Green</option>
                        </select>

                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" name="price" placeholder="Enter product price" step="0.01" required />
                        
                        <label htmlFor="image">Upload Image:</label>
                        <input type="file" id="image" name="image" accept="image/*" required />
                        
                        <input type="submit" value="Submit Product" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin;
