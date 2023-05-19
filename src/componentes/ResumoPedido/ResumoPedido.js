
import './ResumoPedido.css'
import CardTerminal from '../CardTerminal/CardTerminal';
// import { useState } from 'react';
// import { adicionarPedido } from '../../API/Pedidos';

const ResumoPedido = ({ produtosSelecionados }) => {
    return (
      <div className='container-resumo-pedido'>
        <CardTerminal>
          <h2 className="titulo-login">
            <span className="chaves">{"{"}</span>
            <span className="titulo-login"> Resumo do Pedido </span>
            <span className="chaves">{"}"}</span>
          </h2>
  
          <div className='infoPedido'>
            <label className='labelResumoPedido'>mesa:</label>
            <input className='inputResumoPedido' />
            <br></br>
            <label className='labelResumoPedido'>cliente:</label>
            <input className='inputResumoPedido' />
            <label className='labelResumoPedido'>atendente:</label>
          <input className='inputResumoPedido' />

          <table className='conteudo-tabela-resumo'>
            <thead>
              <tr>
                <th>Quantidade</th>
                <th>Descrição</th>
                <th>Valor R$</th>
              </tr>
            </thead>
            <tbody>
              {produtosSelecionados.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.quantity}</td>
                  <td>{produto.name}</td>
                  <td>R$ {produto.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardTerminal>
    </div>
  );
};

export default ResumoPedido;