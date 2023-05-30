import React, { useEffect, useState } from 'react';
import { obterPedidos } from '../../API/Pedidos';
import './Pedidos.css'


const ListaPedidos = ({ status, btnStatus, props }) => {
  const [pedidos, setPedidos] = useState([]);
  console.log(pedidos)
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

  const pedidosFiltrados = pedidos.filter((pedido) => 
  pedido.status.toLowerCase() === status.toLowerCase());

  return (
    <>
      <div className='lista-de-pedidos'>
        {pedidosFiltrados.map((pedido) => (
          <ul key={pedido.id}>
            <li>ID do Pedido: {pedido.id} </li>
            <li>Atendente: {pedido.waiter}</li>
            <li>Cliente: {pedido.client} </li>
            <li>Mesa: {pedido.table}</li>
            <li>Data de Entrada: {pedido.dataEntry}</li>
            <li>Produtos:

            {pedido.products.map((item) => (
                <li key={item.product.id}>
                  {item.product.name} - Quantidade: {item.qty}
                </li>
              ))}
            </li>
            <li>Status: {pedido.status}</li>
            <li>{props}: {pedido.dateProcessed}</li>
            {btnStatus(pedido)}
            
          </ul>
        ))}
        
      </div>
    </>
  );
};

export default ListaPedidos;