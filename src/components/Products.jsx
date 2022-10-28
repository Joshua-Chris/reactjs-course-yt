import React from 'react';

const Products = () => {
  return (
    <>
      <div
        style={{
          width: '400px',
          border: '10px solid royalblue',
          margin: '1rem',
          padding: '1.5rem',
          fontFamily: 'cursive',
        }}
      >
        <h1>Products</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2349/2349820.png"
            alt="product"
            style={{ width: '10rem' }}
          />
          <ul>
            <li>Product id: 141</li>
            <li>Product category: gifts</li>
            <li>Product details: Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
