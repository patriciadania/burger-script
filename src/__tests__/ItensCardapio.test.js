/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItensCardapio from '../componentes/Cardapio/ItensCardapio';
import { obterProdutos } from '../API/Produtos';

jest.mock('../API/Produtos');

describe('ItensCardapio', () => {
  it('deve renderizar corretamente os itens do cardápio', async () => {
    const produtosMock = [
      {
        id: 1,
        name: 'Hambúrguer',
        price: 10,
        category: 'Comida',
        type: 'Lanche',
      },
      {
        id: 2,
        name: 'Batata Frita',
        price: 5,
        category: 'Comida',
        type: 'Acompanhamento',
      },
    ];

    obterProdutos.mockResolvedValue(produtosMock);

    const handleProdutoSelecionadoMock = jest.fn();

    const { getByText, getByTestId } = render(
      <ItensCardapio tipoProduto="Lanche" handleProdutoSelecionado={handleProdutoSelecionadoMock} />
    );

    expect(getByText('Comida')).toBeInTheDocument();
    expect(getByText('Lanche')).toBeInTheDocument();

    const hambúrguerName = getByText('Hambúrguer');
    const hambúrguerPrice = getByText('R$ 10');
    const hambúrguerIncrementButton = getByTestId('increment-button-1');
    const hambúrguerDecrementButton = getByTestId('decrement-button-1');

    expect(hambúrguerName).toBeInTheDocument();
    expect(hambúrguerPrice).toBeInTheDocument();
    expect(hambúrguerIncrementButton).toBeInTheDocument();
    expect(hambúrguerDecrementButton).toBeInTheDocument();

    fireEvent.click(hambúrguerIncrementButton);
    fireEvent.click(hambúrguerIncrementButton);
    fireEvent.click(hambúrguerDecrementButton);

    expect(handleProdutoSelecionadoMock).toHaveBeenCalledTimes(2);
    expect(handleProdutoSelecionadoMock).toHaveBeenCalledWith({
      id: 1,
      name: 'Hambúrguer',
      price: 10,
      category: 'Comida',
      type: 'Lanche',
      quantity: 1,
    });

    expect(getByText('Batata Frita')).not.toBeInTheDocument();
    expect(getByText('R$ 5')).not.toBeInTheDocument();
  });

});
