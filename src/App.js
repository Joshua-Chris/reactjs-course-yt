import React from 'react';
import { useState } from 'react';
import Order from './components/Order';
// import Order from './components/Order';

const App = () => {
  // Default value for shipping
  const [shipping, setShipping] = useState(10);

  // Products in our cart
  const [products, setProducts] = useState([
    {
      id: 41020,
      name: 'Apple Watch Series 7',
      desc: 'Midnight Aluminum Case . 41m',
      img: 'https://cdn-icons-png.flaticon.com/512/3845/3845840.png',
      price: 399.0,
      qty: 1,
    },
    {
      id: 41021,
      name: 'Wireless mouse',
      desc: 'wireless m-xyz grade-7',
      img: 'https://cdn-icons-png.flaticon.com/512/5886/5886203.png',
      price: 99.0,
      qty: 1,
    },
    {
      id: 41022,
      name: 'Power Adapter',
      desc: 'USB-C . 20W',
      img: 'https://cdn-icons-png.flaticon.com/512/5751/5751975.png',
      price: 19.0,
      qty: 1,
    },
  ]);

  // Total price of all products in our cart
  const subTotal = products.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.price;
  }, 0);

  // Grand Price (subtotal + shipping)
  const totalPrice = subTotal + shipping;

  // Our Order App
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-600 text-white">
      <div className="w-[90%] md:w-[40%] h-fit bg-gray-700 rounded-xl">
        <div className="pt-4 px-4 pb-1">
          <h1 className="text-4xl">Order</h1>
          <h2 className="text-[22px] border-b-8 border-b-gray-600 pb-2">
            Summary
          </h2>
        </div>
        <div className="bg-gray-500 px-4">
          {products.map((product) => {
            return (
              <Order
                id={product.id}
                name={product.name}
                desc={product.desc}
                img={product.img}
                price={product.price}
                qty={product.qty}
              />
            );
          })}
        </div>
        <div>
          <p className="flex justify-between text-lg py-2 px-4 font-bold">
            <span>Subtotal</span> <span>${subTotal}</span>
          </p>
          <p className="flex justify-between text-lg py-2 px-4 font-bold">
            <span>Shipping</span> <span>${shipping}</span>
          </p>
          <p className="flex justify-between text-lg py-2 px-4 font-bold bg-blue-600 rounded-b-xl">
            <span>Total</span> <span>${totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
