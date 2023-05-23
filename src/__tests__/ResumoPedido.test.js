import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { adicionarPedido } from '../API/Pedidos';
import ResumoPedido from '../componentes/ResumoPedido/ResumoPedido';

jest.mock('../API/Pedidos', () => ({
  adicionarPedido: jest.fn(),
}));

describe('ResumoPedido', () => {
  test('deve enviar o pedido ao clicar no botão', async () => {
    const produtosSelecionados = [
      { id: 1, quantity: 2, name: 'Produto 1', price: 10 },
    ];
    render(<ResumoPedido produtosSelecionados={produtosSelecionados} />);
    
    const mesaInput = screen.getByLabelText('mesa:');
    const clienteInput = screen.getByLabelText('cliente:');
    const enviarButton = screen.getByText('Enviar');
    
    // Simule a interação do usuário preenchendo os campos
    fireEvent.change(mesaInput, { target: { value: 'Mesa 1' } });
    fireEvent.change(clienteInput, { target: { value: 'João' } });
    
    // Simule o clique no botão de enviar
    fireEvent.click(enviarButton);
    
    // Verifique se a função de adicionarPedido foi chamada corretamente
    expect(adicionarPedido).toHaveBeenCalledWith('João', 'Mesa 1', [
      { id: 1, quantity: 2 },
    ]);
    
    // Você também pode verificar se uma mensagem de sucesso é exibida ou realizar outras verificações necessárias
  });
});
