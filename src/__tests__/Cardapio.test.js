import React from 'react';
import { render, screen } from '@testing-library/react';
import Cardapio from '../componentes/Cardapio/Cardapio';
import ItensCardapio from '../componentes/Cardapio/ItensCardapio';

describe('Cardapio', () => {
  test('renderiza corretamente', () => {
    render(<Cardapio />);
    
    // Verificar se o componente renderizou corretamente
    expect(screen.getByText('Café da Manhã')).toBeInTheDocument();
    expect(screen.getByText('Menu Principal')).toBeInTheDocument();
  });
});

describe('ItensCardapio', () => {
  test('renderiza corretamente', () => {
    render(<ItensCardapio tipoProduto="café da manhã" />);
    
    // Verificar se o componente renderizou corretamente
    expect(screen.getByText('Nome do Produto')).toBeInTheDocument();
    expect(screen.getByText('R$ 10')).toBeInTheDocument();
  });

  test('executa função de incremento corretamente', () => {
    // Mock da função handleProdutoSelecionado
    const handleProdutoSelecionadoMock = jest.fn();

    render(<ItensCardapio tipoProduto="café da manhã" handleProdutoSelecionado={handleProdutoSelecionadoMock} />);
    
    // Simular um clique no botão de incremento
    screen.getByText('Incrementar').click();

    // Verificar se a função handleProdutoSelecionado foi chamada corretamente
    expect(handleProdutoSelecionadoMock).toHaveBeenCalledTimes(1);
    expect(handleProdutoSelecionadoMock).toHaveBeenCalledWith({ name: 'Nome do Produto', quantity: 1 });
  });
});

