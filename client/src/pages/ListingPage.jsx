import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateProduct = () => {
    navigate("/"); 
  };

  return (
    <div className="listing-page-container">
      <div className="listing-box">
        <h1>Products</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search Products"
        />
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              <h3>{product.productName}</h3>
              <p>UPC: {product.upc}</p>
              <p>Available On: {product.availableOn}</p>
              <h4>Properties:</h4>
              <ul>
                {product.properties.map((property, propIndex) => (
                  <li key={propIndex}>
                    {property.name}: {property.value}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <button onClick={handleCreateProduct}>Back To Create Product Page</button>
      </div>
    </div>
  );
};

export default ListingPage;
