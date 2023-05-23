import React, { useState, useEffect } from 'react';
import { obterProdutos } from '../../../API/Produtos';
import './Produto.css';

const ListaDeProdutos = (props) => {
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
    <div className='tabela-produtos'>
      <h1 className='titulo-lista-produtos'>Lista de Produtos</h1>
      <div className="loader"></div>
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
          {produtos
            .filter((produto) => (!tipoProduto || produto.type === tipoProduto))
            .map((produto) => (
              <tr key={produto.id}>
                <td className="nome-produto">{produto.name}</td>
                <td className='valor-produto'>R$ {produto.price}</td>
                <td className='categoria-produto'>{produto.category}</td>
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
