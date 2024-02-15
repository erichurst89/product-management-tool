import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListingPage = () => {
  const [product, setProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/product");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProduct = product.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateProduct = () => {
    navigate("/"); 
  };

  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
  };

  return (
    <div className="listing-page-container">
      <div className="listing-box">
        <h1>Product List</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search Products"
        />
        <ul>
          {filteredProduct.map((product, index) => (
            <li key={index}>
              <h3>{product.productName}</h3>
              <p>UPC: {product.upc}</p>
              <p>Available On: {formatDate(product.availableOn)}</p>
              <p><strong>Properties: </strong>({product.properties}) </p>
            </li>
          ))}
        </ul>
        <button onClick={handleCreateProduct}>Back To Create Product Page</button>
      </div>
    </div>
  );
};

export default ListingPage;
