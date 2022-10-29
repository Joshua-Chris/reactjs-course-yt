import React from 'react';
// import Order from './components/Order';

const App = () => {
  // Default value for shipping

  // Products in our cart

  // Total price of all products in our cart

  // Grand Price (subtotal + shipping)

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
          <p>Components go here</p>
        </div>
        <div>
          <p className="flex justify-between text-lg py-2 px-4 font-bold">
            <span>Subtotal</span> <span>{`$`}</span>
          </p>
          <p className="flex justify-between text-lg py-2 px-4 font-bold">
            <span>Shipping</span> <span>{`$`}</span>
          </p>
          <p className="flex justify-between text-lg py-2 px-4 font-bold bg-blue-600 rounded-b-xl">
            <span>Total</span> <span>{`$`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
