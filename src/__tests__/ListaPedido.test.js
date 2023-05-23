import React from 'react';
import { render, screen } from '@testing-library/react';
import { obterPedidos } from '../API/Pedidos';
import ListaPedidos from '../componentes/Pedidos/Pedidos';

jest.mock('../API/Pedidos');

describe('ListaPedidos', () => {
  test('deve renderizar corretamente os pedidos', async () => {
    const pedidosMock = [
      {
        id: 1,
        client: 'Cliente 1',
        products: [
          {
            product: {
              id: 1,
              name: 'Produto 1',
              table: 'Mesa 1',
            },
            qty: 2,
          },
        ],
        status: 'Em andamento',
        dateEntry: '2023-05-22T10:00:00.000Z',
      },
    ];

    obterPedidos.mockResolvedValue(pedidosMock);

    render(<ListaPedidos />);

    const pedidoElement = await screen.findByText('Cliente 1');
    expect(pedidoElement).toBeInTheDocument();

    expect(screen.getByText('Mesa 1')).toBeInTheDocument();
    expect(screen.getByText('Em andamento')).toBeInTheDocument();
    expect(screen.getByText('2023-05-22T10:00:00.000Z')).toBeInTheDocument();
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});

