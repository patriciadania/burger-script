import { render, screen } from "@testing-library/react";
import Botao from '../Botao/Botao';
import React from "react";

import '../Botao/Botao.css';
jest.mock('../Botao/Botao.css', () => ({})); // Adicione essa linha

describe("Botao", () => {
  it("se está renderizando corretamente", () => {
    render(<Botao />);
    expect(screen.getAllByText("botao")).toBeInTheDocument();
  });
});
