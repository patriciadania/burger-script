/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListaSuspensa from '../componentes/ListaSuspensa/ListaSuspensa';

describe('ListaSuspensa', () => {
  const mockLabel = 'Selecione uma opção';
  const mockItens = ['Opção 1', 'Opção 2', 'Opção 3'];

  test('deve renderizar corretamente', () => {
    const { getByRole } = render(
      <ListaSuspensa
        label={mockLabel}
        itens={mockItens}
        aoAlterado={() => {}}
        required={false}
        valor=""
      />
    );

    const selectElement = getByRole('combobox', { name: mockLabel });
    expect(selectElement).toBeInTheDocument();

    // Verifica se as opções foram renderizadas corretamente
    mockItens.forEach((item) => {
      const optionElement = getByRole('option', { name: item });
      expect(optionElement).toBeInTheDocument();
    });
  });
  

  test('deve chamar a função aoAlterado ao selecionar uma opção', () => {
    const mockAoAlterado = jest.fn();
    const { getByRole } = render(
      <ListaSuspensa
        label={mockLabel}
        itens={mockItens}
        aoAlterado={mockAoAlterado}
        required={false}
        valor=""
      />
    );

    const selectElement = getByRole('combobox', { name: mockLabel });

    // Seleciona a primeira opção
    fireEvent.change(selectElement, { target: { value: mockItens[0] } });

    expect(mockAoAlterado).toHaveBeenCalledTimes(1);
    expect(mockAoAlterado).toHaveBeenCalledWith(mockItens[0]);
  });
});

