import React from 'react';
import './BtnIncrementaDecrementa.css';
import { useState } from 'react';


const BtnIncrementaDecrementa = ({ incrementa, decrementa }) => {



  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
    incrementa();
  };

  const decrementarContador = () => {
    if (count > 0) {
      setCount(count - 1);

      decrementa();

    }
  };

  return (
    <div className="btn-incrementa-decrementa">
      <button className="incluiExclui" onClick={incrementarContador}>
        +
      </button>
      <span className="resultIncluiExclui">{count}</span>
      <button className="incluiExclui" onClick={decrementarContador}>
        -
      </button>
    </div>
  );
};

export default BtnIncrementaDecrementa;


