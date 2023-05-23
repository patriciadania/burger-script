/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-presence-queries */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ListaDeProdutos from '../Paginas/Adm/PagProdutos/ListaDeProdutos';
import { obterProdutos } from '../API/Produtos';

jest.mock('../API/Produtos');

describe('ListaDeProdutos', () => {
  it('deve renderizar corretamente a lista de produtos', async () => {
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

    const { getByText } = render(<ListaDeProdutos tipoProduto="Lanche" />);

    await waitFor(() => {
      expect(getByText('Hambúrguer')).toBeInTheDocument();
      expect(getByText('R$ 10')).toBeInTheDocument();
      expect(getByText('Comida')).toBeInTheDocument();
      expect(getByText('Lanche')).toBeInTheDocument();
      expect(getByText('1')).toBeInTheDocument();

      expect(getByText('Batata Frita')).not.toBeInTheDocument();
      expect(getByText('R$ 5')).not.toBeInTheDocument();
      expect(getByText('Acompanhamento')).not.toBeInTheDocument();
      expect(getByText('2')).not.toBeInTheDocument();
    });
  });

  it('deve exibir uma mensagem de erro em caso de falha ao obter produtos', async () => {
    obterProdutos.mockRejectedValue(new Error('Erro ao obter produtos'));

    const { getByText } = render(<ListaDeProdutos tipoProduto="Lanche" />);

    await waitFor(() => {
      expect(getByText('Erro ao obter produtos')).toBeInTheDocument();
    });
  });
});
