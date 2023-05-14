import React, { useState, useEffect } from 'react';
import { obterProdutos } from '../../../API/Produtos';
import './Produto.css'



// const ListaDeProdutos = () => {
//   const [produtos, setProdutos] = useState([]);

//   useEffect(() => {
//     const buscarProdutos = async () => {
//       try {
//         const produtosData = await obterProdutos();
//         setProdutos(produtosData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     buscarProdutos();
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Produtos</h1>
//       <ul>
//         {Array.isArray(produtos) && produtos.length > 0 ? (
//           produtos.map((produto) => (
            // <table key={produto.id}>
            //     <thead>
            //             <tr>
            //                 <th>Nome do Produto:</th>
            //                 <th>Valor R$</th>
            //                 <th>Categoria</th>
            //                 <th>Tipo de Refeição</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             <tr>
            //             <td>{produto.name}</td>
            //             </tr>
            //             <tr>
            //             <td>R$ {produto.price}</td>
            //             </tr>
            //             <tr>
            //             <td>{produto.title}</td>
            //             </tr>
            //             <tr>
            //             <td>{produto.type}</td>
            //             </tr>
                       
            //         </tbody>
            // </table>
//             <li key={produto.id}>
//               <span>{produto.name}</span> -
//                <span>R$ {produto.price}</span> 
//                <span>{produto.title}</span> 
//                <span>{produto.type}</span>
//             </li>
//           ))
//         ) : (
//           <li>Nenhum produto encontrado</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default ListaDeProdutos;
const ListaDeProdutos = () => {
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
      <div className='tabela-produtos'>
        <h1 className='titulo-lista-produtos'>Lista de Produtos</h1>
        <div class="loader"></div>
        <table>
          <thead>
            <tr>
              <th className="nome-produto">Nome do Produto:</th>
              <th className='valor-produto'>Valor R$</th>
              <th className='categoria-produto'>Categoria</th>
              <th className='tipo-refeicao'>Tipo de Refeição</th>
              <th className='tipo-refeicao'>Id:</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td className="nome-produto">{produto.name}</td>
                <td className='valor-produto'>R$ {produto.price}</td>
                <td className='categoria-produto'>{produto.title}</td>
                <td className='tipo-refeicao'>{produto.type}</td>
                <td className='tipo-refeicao'>{produto.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ListaDeProdutos;