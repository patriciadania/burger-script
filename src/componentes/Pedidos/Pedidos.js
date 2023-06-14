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
  

  const ordenarPorDataHora = (a, b) => {
    const dataA = new Date(a.dateEntry);
    const dataB = new Date(b.dateEntry);

    if (dataA < dataB) {
      return -1;
    } else if (dataA > dataB) {
      return 1;
    } else {
      return 0;
    }
  };

  const formatarData = (data) => {
    if (!data) {
      return "Indisponível";
    }

    const date = new Date(data);
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
  };

  const pedidosFiltrados = pedidos
    .filter((pedido) => pedido.status.toLowerCase() === status.toLowerCase())
    .sort(ordenarPorDataHora)
    .reverse();

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
              <strong>Data de Entrada:</strong> {formatarData(pedido.dateEntry)}
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
              {props}: {pedido.dateProcessed ? formatarData(pedido.dateProcessed) : 'Em processamento'}
            </li>
            {btnStatus(pedido)}
          </ul>
        ))}
      </div>
    </>
  );
};

export default ListaPedidos;
