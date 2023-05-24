
// import './CardTerminal.css';

// const CardTerminal = ({ children }) => {
//   return (
//     <div className="card">
//       <div className="tools">
//         <div className="circle">
//           <span className="red box"></span>
//         </div>
//         <div className="circle">
//           <span className="yellow box"></span>
//         </div>
//         <div className="circle">
//           <span className="green box"></span>
//         </div>
//       </div>
//       <div className="card__content">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default CardTerminal;

// esse card deu certo e ficou centralizado

import React from 'react';
import './CardTerminal.css';

const CardTerminal = ({ children }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="tools">
          <div className="circulos">
            <span className="c"></span>
            <span className="c"></span>
            <span className="c"></span>
          </div>
        </div>
        <div className="card__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardTerminal;
