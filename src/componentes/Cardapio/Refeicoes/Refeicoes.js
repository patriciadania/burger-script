import React, { useState } from 'react';
import restaurantes from "../../../objetos/api";
import BtnIncrementaDecrementa from "../../BtnIncrementaDecrementa";
import './Refeicoes.css'

const Refeicoes = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(0);

  const handleQuantidadeChange = (novaQuantidade) => {
    setQuantidade(novaQuantidade);

    // Atualiza o valor total do pedido no componente ResumoPedido
    const novoTotal = restaurantes.totalPedido + (novaQuantidade - quantidade) * produto.preco;
    restaurantes.totalPedido = novoTotal;
  };

  return (
    <div className="containerItens">
      <div className="lista-de-produtos">
        <table className='conteudo-tabela-refeicoes'>
          <tbody>
            <tr>
              <td className="dadosProdutos">{produto.nome}</td>
              <td className="dadosProdutos">R$ {produto.preco}</td>
              <div>

                
              </div>
              
              <td className="dadosProdutos">
                <BtnIncrementaDecrementa 
                quantidade={quantidade} 
                onQuantidadeChange={handleQuantidadeChange}
                 />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Refeicoes;
