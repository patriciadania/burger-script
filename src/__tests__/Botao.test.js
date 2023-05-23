import { render, screen } from "@testing-library/react";
import Botao from '../componentes/Botao/Botao.js'
import React from "react";
import '@testing-library/jest-dom/extend-expect'; 

describe("Botao", () => {
  it("se está renderizando corretamente", () => {
    render(<Botao>acessar</Botao>);
    const elementoBotao = screen.getByRole('button');
    expect(elementoBotao).toBeInTheDocument();
  });
});