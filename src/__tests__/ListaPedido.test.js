import React from 'react';
import { render, screen } from '@testing-library/react';
import ListaPedidos from '../componentes/Pedidos/Pedidos';
import '@testing-library/jest-dom/extend-expect'; 

it('renderiza corretamente a lista de pedidos filtrada por status', () => {
  render(
    <ListaPedidos
      status="Em andamento"
      btnStatus={() => {}}
      props="Data de Processamento"
    />
  );

 
  const pedido1 = screen.getByText('ID do Pedido: 1');
  const pedido2 = screen.queryByText('ID do Pedido: 2');
  expect(pedido1).toBeInTheDocument();
  expect(pedido2).not.toBeInTheDocument();

  const produto1 = screen.getByText('Produto 1 - Quantidade: 2');
  const produto2 = screen.getByText('Produto 2 - Quantidade: 1');
  expect(produto1).toBeInTheDocument();
  expect(produto2).toBeInTheDocument();

 
  const atendente = screen.getByText('Atendente: John');
  const cliente = screen.getByText('Cliente: Alice');
  const mesa = screen.getByText('Mesa: 2');
  const dataEntrada = screen.getByText('Data de Entrada: 2023-06-01');
  const status = screen.getByText('Status: Em andamento');
  const dataProcessamento = screen.getByText('Data de Processamento: 2023-06-01');
  expect(atendente).toBeInTheDocument();
  expect(cliente).toBeInTheDocument();
  expect(mesa).toBeInTheDocument();
  expect(dataEntrada).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(dataProcessamento).toBeInTheDocument();
});