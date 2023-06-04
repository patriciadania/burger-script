/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListaSuspensa from '../componentes/ListaSuspensa/ListaSuspensa';

test('deve chamar a função aoAlterado quando o valor for alterado', () => {
  const aoAlteradoMock = jest.fn();
  const itens = ['Opção 1', 'Opção 2', 'Opção 3'];

  const { getByLabelText } = render(
    <ListaSuspensa label="Escolha uma opção" aoAlterado={aoAlteradoMock} itens={itens} valor="" />
  );

  const selectElement = getByLabelText('Escolha uma opção');

  fireEvent.change(selectElement, { target: { value: 'Opção 2' } });

  expect(aoAlteradoMock).toHaveBeenCalledWith('Opção 2');
});

test('deve renderizar as opções corretamente', () => {
  const aoAlteradoMock = jest.fn();
  const itens = ['Opção 1', 'Opção 2', 'Opção 3'];

  const { getByLabelText, getByText } = render(
    <ListaSuspensa label="Escolha uma opção" aoAlterado={aoAlteradoMock} itens={itens} valor="" />
  );

  const selectElement = getByLabelText('Escolha uma opção');

  expect(selectElement).toBeInTheDocument();

  itens.forEach((opcao) => {
    const optionElement = getByText(opcao);
    expect(optionElement).toBeInTheDocument();
  });
});