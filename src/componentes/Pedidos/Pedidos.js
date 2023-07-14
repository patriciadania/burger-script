import React, { useEffect, useState } from 'react';
import { obterPedidos } from '../../API/Pedidos';
import './Pedidos.css';

const ListaPedidos = ({ status, btnStatus, props }) => {
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
  


  const pedidosFiltrados = pedidos
    .filter((pedido) => pedido.status.toLowerCase() === status.toLowerCase()
    );

  return (
    <>
      <div className="lista-de-pedidos">
        {pedidosFiltrados.map((pedido) => (
          <ul key={pedido.id}>
            <li>
              <strong>ID do Pedido:</strong> {pedido.id}
            </li>
            <li>
              <strong>Atendente:</strong> {pedido.waiter}
            </li>
            <li>
              <strong>Cliente:</strong> {pedido.client}
            </li>
            <li>
              <strong>Mesa:</strong> {pedido.table}
            </li>
            <li>
              <strong>Data de Entrada:</strong> {pedido.dateEntry}
            </li>
            <li>
              <strong>Produtos:</strong>
              <div>
                {pedido.products.map((item) => (
                  <div key={item.product.id}>
                    {item.product.name} - Quantidade: {item.qty}
                  </div>
                ))}
              </div>
            </li>
            <li>
              <strong>Status:</strong> {pedido.status}
            </li>
            <li>
                {props} {pedido.dateProcessed}
              </li>
            
            {btnStatus(pedido)}
          </ul>
        ))}
      </div>
    </>
  );
};

export default ListaPedidos;
