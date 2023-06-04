import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { adicionarPedido } from '../API/Pedidos';
import ResumoPedido from '../componentes/ResumoPedido/ResumoPedido';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../API/Pedidos', () => ({
  adicionarPedido: jest.fn(),
}));

describe('ResumoPedido', () => {
  const produtosSelecionadosMock = [
    {
      id: 1,
      name: 'Produto 1',
      quantity: 2,
      total: 20,
    },
    {
      id: 2,
      name: 'Produto 2',
      quantity: 1,
      total: 15,
    },
  ];

  beforeEach(() => {
    adicionarPedido.mockResolvedValue({});
  });

  test('deve enviar o pedido corretamente', async () => {
    render(<ResumoPedido produtosSelecionados={produtosSelecionadosMock} />);

    const mesaInput = screen.getByLabelText('mesa');
    const clienteInput = screen.getByLabelText('cliente');
    const enviarButton = screen.getByText('Enviar');

    fireEvent.change(mesaInput, { target: { value: 'Mesa 1' } });
    fireEvent.change(clienteInput, { target: { value: 'Cliente 1' } });

    fireEvent.click(enviarButton);

    await waitFor(() => expect(adicionarPedido).toHaveBeenCalledTimes(1));

    expect(adicionarPedido).toHaveBeenCalledWith(
      'Cliente 1',
      'Mesa 1',
      [
        {
          id: 1,
          waiter: '',
          name: 'Produto 1',
          quantity: 2,
          total: 20,
        },
        {
          id: 2,
          waiter: '',
          name: 'Produto 2',
          quantity: 1,
          total: 15,
        },
      ],
      ''
    );

    expect(screen.getByText('Pedido enviado com sucesso!')).toBeInTheDocument();
    expect(mesaInput).toHaveValue('');
    expect(clienteInput).toHaveValue('');
  });

  test('deve exibir mensagem de alerta ao enviar pedido sem preencher todos os campos', async () => {
    render(<ResumoPedido produtosSelecionados={produtosSelecionadosMock} />);

    const enviarButton = screen.getByText('Enviar');

    fireEvent.click(enviarButton);

    await waitFor(() => expect(adicionarPedido).not.toHaveBeenCalled());

    expect(screen.getByText('Preencha todos os campos do pedido antes de enviar.')).toBeInTheDocument();
  });
  
});
