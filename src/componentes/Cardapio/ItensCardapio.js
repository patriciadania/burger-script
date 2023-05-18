// import React, { useState, useEffect } from 'react';
// import { obterProdutos } from '../../API/Produtos';
// import BtnIncrementaDecrementa from '../BtnIncrementaDecrementa/index'


// const ItensCardapio = (props) => {
//   const { tipoProduto } = props; 
//     const [produtos, setProdutos] = useState([]);

//     useEffect(() => {
//       const buscarProdutos = async () => {
//         try {
//           const produtosData = await obterProdutos();
//           setProdutos(produtosData);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       buscarProdutos();
//     }, []);

//     return (
//       <div className='tabela-produtos'>
//         <table>
//           <thead>
//             <tr>
//               <th>Nome do Produto:</th>
//               <th>Valor R$</th>
//               <th>Categoria</th>

//             </tr>
//           </thead>
//           <tbody>
//             {produtos
//             .filter((produto) => (!tipoProduto || produto.type === tipoProduto))
//             .map((produto) => (
//               <tr key={produto.id}>
//                 <td >{produto.name}</td>
//                 <td >R$ {produto.price}</td>
//                 <td>{produto.category}</td>
//             <BtnIncrementaDecrementa />
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   export default ItensCardapio;

import React, { useState, useEffect } from 'react';
import { obterProdutos } from '../../API/Produtos';
import BtnIncrementaDecrementa from '../BtnIncrementaDecrementa/index'


const ItensCardapio = (props) => {
  const { tipoProduto } = props;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const produtosData = await obterProdutos();
        setProdutos(produtosData);
      } catch (error) {
        console.error(error);
      }
    };

    buscarProdutos();
  }, []);

  return (
    <>
      <div className='container-produtos-pedido'>

        <p>Nome do Produto:</p>
        <p>Valor R$</p>
        <p>Categoria</p>


        {produtos
          .filter((produto) => (!tipoProduto || produto.type === tipoProduto))
          .map((produto) => (
            <ul className='lista-itens-cardapio' key={produto.id}>
              <li>{produto.name}</li>
              <li>R$ {produto.price}</li>
              <li>{produto.category}</li>
              <BtnIncrementaDecrementa />
            </ul>
          ))}

      </div>
    </>
  );
};

export default ItensCardapio;