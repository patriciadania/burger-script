/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BtnIncrementaDecrementa from '../componentes/BtnIncrementaDecrementa';
import '@testing-library/jest-dom/extend-expect';


test('incrementa o contador ao clicar no botão +', () => {
  const incrementaMock = jest.fn();
  const decrementaMock = jest.fn();

  const { getByText } = render(
    <BtnIncrementaDecrementa incrementa={incrementaMock} decrementa={decrementaMock} />
  );

  const botaoIncrementa = getByText('+');
  expect(botaoIncrementa).toBeInTheDocument();

  fireEvent.click(botaoIncrementa);
  expect(incrementaMock).toHaveBeenCalledTimes(1);
});

test('decrementa o contador ao clicar no botão -', () => {
  const incrementaMock = jest.fn();
  const decrementaMock = jest.fn();

  const { getByText } = render(
    <BtnIncrementaDecrementa incrementa={incrementaMock} decrementa={decrementaMock} />
  );

  const botaoDecrementa = getByText('-');
  expect(botaoDecrementa).toBeInTheDocument();

  fireEvent.click(botaoDecrementa);
  expect(decrementaMock).toHaveBeenCalledTimes(1);
});

test('não decrementa o contador abaixo de zero', () => {
  const incrementaMock = jest.fn();
  const decrementaMock = jest.fn();

  const { getByText } = render(
    <BtnIncrementaDecrementa incrementa={incrementaMock} decrementa={decrementaMock} />
  );

  const botaoDecrementa = getByText('-');
  expect(decrementaMock).toHaveBeenCalledTimes(1);

  fireEvent.click(botaoDecrementa);
  expect(decrementaMock).toHaveBeenCalledTimes(1); 
});

test('exibe o valor correto do contador', () => {
  const incrementaMock = jest.fn();
  const decrementaMock = jest.fn();

  const { getByText } = render(
    <BtnIncrementaDecrementa incrementa={incrementaMock} decrementa={decrementaMock} />
  );

  const contador = getByText('0');
  expect(contador).toBeInTheDocument();

 
  const botaoIncrementa = getByText('+');
  fireEvent.click(botaoIncrementa);
  expect(contador.textContent).toBe('1');

  
  const botaoDecrementa = getByText('-');
  fireEvent.click(botaoDecrementa);
  expect(contador.textContent).toBe('0');

});

