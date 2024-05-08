import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="counter-container">
      <button onClick={decrementCount} className="btn btn-danger">-</button>
      <span className="counter mx-4">{count}</span>
      <button onClick={incrementCount} className="btn btn-success">+</button>
    </div>
  );
}

export default Counter;
