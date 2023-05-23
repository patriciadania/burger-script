/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BtnIncrementaDecrementa from '../componentes/BtnIncrementaDecrementa';
import '@testing-library/jest-dom/extend-expect';

test('Incrementa corretamente ao clicar no botão de incremento', () => {
  const incrementMock = jest.fn();
  const { getByText } = render(
    <BtnIncrementaDecrementa increment={incrementMock} />
  );

  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);

  expect(incrementMock).toHaveBeenCalledTimes(1);
});

test('Decrementa corretamente ao clicar no botão de decremento', () => {
  const incrementMock = jest.fn();
  const { getByText } = render(
    <BtnIncrementaDecrementa increment={incrementMock} />
  );

  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);

  expect(incrementMock).not.toHaveBeenCalled();
});

test('Não decrementa abaixo de zero', () => {
  const incrementMock = jest.fn();
  const { getByText } = render(
    <BtnIncrementaDecrementa increment={incrementMock} />
  );

  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);

  expect(incrementMock).not.toHaveBeenCalled();
});
