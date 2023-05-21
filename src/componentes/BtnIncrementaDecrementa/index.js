import React from 'react';
import './BtnIncrementaDecrementa.css';
import { useState } from 'react';

const BtnIncrementaDecrementa = ({ increment }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    increment();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="btn-incrementa-decrementa">
      <button className="incluiExclui" onClick={handleIncrement}>
        +
      </button>
      <span className="resultIncluiExclui">{count}</span>
      <button className="incluiExclui" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default BtnIncrementaDecrementa;