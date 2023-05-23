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
        quantity: produto.quantity,
      }));

      const novoPedido = await adicionarPedido(nomeCliente, mesa, produtos);
      console.log('Pedido registrado:', novoPedido);

      // Limpar campos ou redirecionar para outra página, se necessário
    } catch (error) {
      console.error('Erro ao registrar pedido:', error);
      // Lidar com o erro de acordo com a sua lógica de tratamento de erros
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
          <label className="labelResumoPedido" htmlFor="mesa">
            mesa:
          </label>
          <input
            className="inputResumoPedido"
            id="mesa"
            value={mesa}
            onChange={(e) => setMesa(e.target.value)}
          />
          <br />
          <label className="labelResumoPedido" htmlFor="cliente">
            cliente:
          </label>
          <input
            className="inputResumoPedido"
            id="cliente"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
          />

          <table className="conteudo-tabela-resumo">
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
        <Botao onClick={enviarPedido}>Enviar</Botao>
      </CardTerminal>
    </div>
  );
};

export default ResumoPedido;
