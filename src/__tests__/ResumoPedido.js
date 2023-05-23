import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { adicionarPedido } from '../API/Pedidos';
import ResumoPedido from '../componentes/ResumoPedido/ResumoPedido';

jest.mock('../API/Pedidos');

describe('ResumoPedido', () => {
  test('deve enviar o pedido ao clicar no botão', async () => {
    const produtosSelecionadosMock = [
      {
        id: 1,
        name: 'Produto 1',
        quantity: 2,
        price: 10,
      },
    ];

    adicionarPedido.mockResolvedValue({ id: 1 });

    render(<ResumoPedido produtosSelecionados={produtosSelecionadosMock} />);

    const mesaInput = screen.getByLabelText('mesa:');
    const clienteInput = screen.getByLabelText('cliente:');
    const enviarButton = screen.getByText('Enviar');

    fireEvent.change(mesaInput, { target: { value: 'Mesa 1' } });
    fireEvent.change(clienteInput, { target: { value: 'Cliente 1' } });

    fireEvent.click(enviarButton);

    expect(adicionarPedido).toHaveBeenCalledWith('Cliente 1', 'Mesa 1', [
      { id: 1, quantity: 2 },
    ]);
  });
});
