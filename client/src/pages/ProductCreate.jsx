import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductCreatePage = () => {
  const [productName, setProductName] = useState('');
  const [upc, setUpc] = useState('');
  const [availableOn, setAvailableOn] = useState('');
  const [properties, setProperties] = useState([{ name: '', value: '' }]);
  
  const handleAddProperty = () => {
    setProperties([...properties, { name: '', value: '' }]);
  };
  
  const handlePropertyChange = (index, key, value) => {
    const updatedProperties = [...properties];
    updatedProperties[index][key] = value;
    setProperties(updatedProperties);
  };

  const navigate = useNavigate();

  const handleClick = async e => {
    e.preventDefault();
    try {
      const formattedProperties = properties.map(property => {
        return `${property.name}: ${property.value}`;
      });

      const data = {
        productName: productName,
        upc: upc,
        availableOn: availableOn,
        properties: formattedProperties 
      };

      await axios.post("http://localhost:5000/product", data);
      navigate("/"); 
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearchClick = () => {
    navigate("/listing");
  }

  return (
    <div className="product-create-container">
      <h1>Product Create Page</h1>
      <label>Product Name:</label>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <br />
      <label>UPC:</label>
      <input type="text" value={upc} onChange={(e) => setUpc(e.target.value)} />
      <br />
      <label>Available On (yyyy-mm-dd):</label>
      <input type="text" value={availableOn} onChange={(e) => setAvailableOn(e.target.value)} />
      <br />
      <h2>Properties</h2>
      {properties.map((property, index) => (
        <div key={index}>
          <input
            type="text"
            value={property.name}
            onChange={(e) => handlePropertyChange(index, 'name', e.target.value)}
            placeholder="Property Name"
          />
          <input
            type="text"
            value={property.value}
            onChange={(e) => handlePropertyChange(index, 'value', e.target.value)}
            placeholder="Property Value"
          />
        </div>
      ))}
      <button onClick={handleAddProperty} className="add-property-button">Add Property</button>
      <br />
      <button onClick={handleClick} className="save-button">Save</button>
      <button onClick={handleSearchClick} className="search-button">Search Products</button>
      
    </div>
  );
};

export default ProductCreatePage;



