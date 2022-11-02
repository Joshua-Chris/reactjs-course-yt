import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const btnClick = () => {
    setCount((click) => click + 1);
    console.log('Button was clicked');
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log('The form was submitted successfully');
  };
  return (
    <>
      <div className="w-screen h-screen bg-[#090d12] flex flex-col justify-center items-center text-white text-2xl">
        <h1>Event listeners</h1>

        <div className="w-[50%] p-4 border-2 border-gray-500 text-xl">
          <div className="flex gap-4">
            <button
              onClick={btnClick}
              className="bg-blue-700 p-2 px-4 rounded-xl"
            >
              Click me
            </button>
            <p>No. of clicks: {count}</p>
          </div>
          <div>
            <form onSubmit={formSubmit}>
              <input
                onChange={(e) => console.log(e.target.value)}
                type="text"
                className="text-black"
              />
              <button type="submit" className="bg-blue-700 p-2 px-4 rounded-xl">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
