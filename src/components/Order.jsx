import React from 'react';

const Order = (props) => {
  return (
    <>
      <div className="w-full h-fit py-2 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="w-1/6 border-2 border-gray-400 rounded-xl py-1 bg-gray-300">
            <img src={props.img} alt="Order" style={{ width: '5rem' }} />
          </div>
          <div className="flex w-5/6 justify-between">
            <p className="flex flex-col">
              <span className="font-bold">{props.name}</span>
              <span className="text-gray-200">{props.desc}</span>
            </p>
            <p className="flex flex-col text-right">
              <span className="font-bold">{props.price}</span>
              <span className="text-gray-200">Qty: {props.qty}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
