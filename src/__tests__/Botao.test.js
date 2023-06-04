/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Botao from '../componentes/Botao/Botao.js'
import React from "react";
import '@testing-library/jest-dom/extend-expect'; 



test('renderiza o componente Botao corretamente', () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Botao onClick={onClickMock}>
      Clique aqui
    </Botao>
  );

  const botao = getByText('Clique aqui');
  expect(botao).toBeInTheDocument();

  fireEvent.click(botao);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
