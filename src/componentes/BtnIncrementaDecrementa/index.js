import React from 'react';
import './BtnIncrementaDecrementa.css';

const BtnIncrementaDecrementa = ({ quantidade, onQuantidadeChange }) => {
  const incrementa = () => {
    onQuantidadeChange(quantidade + 1);
  };

  const decrementa = () => {
    if (quantidade > 0) {
      onQuantidadeChange(quantidade - 1);
    }
  };

  return (
    <div>
        <button className="incluiExclui" onClick={incrementa}>+</button>
       
        <span className="resultIncluiExclui">{quantidade}</span>
      <button className="incluiExclui" onClick={decrementa}>-</button>
    
    </div>
  );
};

export default BtnIncrementaDecrementa;


// esse aqui é o código quebrado para ajustar

// import React, { useState } from 'react';

// const BtnIncrementaDecrementa = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       <span>{count}</span>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// };

// export default BtnIncrementaDecrementa;

