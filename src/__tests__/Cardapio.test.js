/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Cardapio from '../componentes/Cardapio/Cardapio';


describe('Cardapio', () => {
  it('deve renderizar corretamente os itens do cardápio', () => {
    const handleProdutoSelecionadoMock = jest.fn();

    const { getByText } = render(<Cardapio handleProdutoSelecionado={handleProdutoSelecionadoMock} />);

    expect(getByText('Café da Manhã')).toBeInTheDocument();
    expect(getByText('Menu Principal')).toBeInTheDocument();
  });
});
