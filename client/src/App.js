import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling



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

  const handleSave = () => {
    // Implement save logic here, including validations
    console.log('Product name:', productName);
    console.log('UPC:', upc);
    console.log('Available On:', availableOn);
    console.log('Properties:', properties);
  };

  return (
    <div className="product-create-container">
      <h1>Product Create Page</h1>
      <label>Product Name:</label>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <br />
      <label>UPC:</label>
      <input type="text" value={upc} onChange={(e) => setUpc(e.target.value)} />
      <br />
      <label>Available On (mm/dd/yyyy):</label>
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
      <button onClick={handleAddProperty}>Add Property</button>
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};
export default ProductCreatePage;