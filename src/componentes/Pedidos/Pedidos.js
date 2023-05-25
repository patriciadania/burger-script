import React, { useEffect, useState } from 'react';
import { obterPedidos } from '../../API/Pedidos';
import './Pedidos.css'

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    carregarPedidos();
  }, []);

  const carregarPedidos = async () => {
    try {
      const pedidos = await obterPedidos();
      setPedidos(pedidos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='lista-de-pedidos'>
  <h2 className='titulo-lista-pedidos'>Lista de Pedidos</h2>
  <table>
    <thead>
      <tr>
        <th>ID do Pedido:</th>
        <th>Atendente:</th>
        <th>Cliente:</th>
        <th>Mesa:</th>
        <th>Status:</th>
        <th>Data de Entrada:</th>
        <th>Produto:</th>
        <th>Quantidade:</th>
      </tr>
    </thead>
    <tbody>
      {pedidos.map((pedido) => (
        <tr key={pedido.id}>
          <td>{pedido.id}</td>
          <td>{pedido.waiter}</td>
          <td>{pedido.client}</td>
          <td>{pedido.table}</td>
          <td>{pedido.status}</td>
          <td>{pedido.dateEntry}</td>
          <td>
            <ul>
              {pedido.products.map((item) => (
                <li key={item.product.id}>
                  {item.product.name}
                </li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {pedido.products.map((item) => (
                <li key={item.product.id}>
                  {item.qty}
                </li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  );
};

export default ListaPedidos;
