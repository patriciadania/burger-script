import './ResumoPedido.css';
import CardTerminal from '../CardTerminal/CardTerminal';
import { useState } from 'react';
import { adicionarPedido } from '../../API/Pedidos';
import Botao from '../Botao/Botao';

const ResumoPedido = ({ produtosSelecionados }) => {
  const [nomeCliente, setNomeCliente] = useState('');
  const [mesa, setMesa] = useState('');

  const enviarPedido = async () => {
    try {
      const produtos = produtosSelecionados.map((produto) => ({
        id: produto.id,
        name: produto.name,
        quantity: produto.quantity,
        total: produto.total,
      }));
      console.log(produtos)

      const novoPedido = await adicionarPedido(nomeCliente, mesa, produtos);
      console.log('Pedido registrado:', novoPedido);
    } catch (error) {
      console.error('Erro ao registrar pedido:', error);
    }
  };

  return (
    <div className="container-resumo-pedido">
      <CardTerminal>
        <h2 className="titulo-login">
          <span className="chaves">{"{"}</span>
          <span className="titulo-login"> Resumo do Pedido </span>
          <span className="chaves">{"}"}</span>
        </h2>

        <div className="infoPedido">
          <div className='linha-resumo'>
            <label className="labelResumoPedido" htmlFor="mesa">
              mesa:
            </label>
            <input
              className="inputResumoPedido"
              id="mesa"
              value={mesa}
              onChange={(e) => setMesa(e.target.value)}
            />
          </div>
          <div className='linha-resumo'>
            <label className="labelResumoPedido" htmlFor="cliente">
              cliente:
            </label>
            <input
              className="inputResumoPedido"
              id="cliente"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(e.target.value)}
            />
          </div>
          <div className="conteudo-tabela-resumo">
            <table >
              <thead>
                <tr>
                  <th>Quantidade</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {produtosSelecionados.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.quantity}</td>
                    <td>{produto.name}</td>
                    <td>R$ {produto.total}</td>
                    <td></td>
                  </tr>
                ))}
                   <tr>
                <th className='th-total'>total</th>
                <th className='th-total'></th>
                <th className='th-total'>
                  R$  
                  {produtosSelecionados.reduce((total, produto) => {
                    total += (produto.quantity*produto.price);
                    return total
                  }, 0
                  )}

                </th>
              </tr>
              </tbody>
           
            </table>

          </div>
        </div>
        <Botao onClick={enviarPedido}>Enviar</Botao>
      </CardTerminal>
    </div>
  );
};

export default ResumoPedido;


