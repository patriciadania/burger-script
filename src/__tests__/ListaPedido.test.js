import React from 'react';
import { render, screen } from '@testing-library/react';
import ListaPedidos from '../componentes/Pedidos/Pedidos';
import '@testing-library/jest-dom/extend-expect'; 

describe('ListaPedidos', () => {
  it('deve renderizar corretamente os pedidos', async () => {
    render(<ListaPedidos />);

    const pedidoElement = await screen.findByText('Cliente 1');

    expect(pedidoElement).toBeInTheDocument(); 
    expect(screen.getByText('Mesa 1')).toBeInTheDocument(); 
    expect(screen.getByText('Em andamento')).toBeInTheDocument();
  });
});