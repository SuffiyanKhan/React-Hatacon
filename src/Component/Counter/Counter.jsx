import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../Context/Context';

function Counter(price) {
  const {setincrement } = useGlobalState()
  const [count, setCount] = useState(1);
useEffect(()=>{
    setincrement(count)
},[count])
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    setincrement(count)
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
      setincrement(count)
    }
  };
  console.log(price)

  return (
    <div className="counter-container">
      <button onClick={decrementCount} className="btn btn-danger">-</button>
      <span className="counter mx-4">{count}</span>
      <button onClick={incrementCount} className="btn btn-success">+</button>
    </div>
  );
}

export default Counter;
