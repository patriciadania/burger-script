import React from 'react';
import { render, screen } from '@testing-library/react';
import CriarUsuario from '../componentes/CriaEListaUsuario/CriarUsuario';
import '@testing-library/jest-dom/extend-expect'; 

describe('CriarUsuario', () => {
  it('deve renderizar corretamente o título e o formulário', () => {
    render(<CriarUsuario />);

    const titulo = screen.getByText('adicionar colaborador');
    const formulario = screen.getByTestId('formulario-admin');

    expect(titulo).toBeInTheDocument(); 
    expect(formulario).toBeInTheDocument(); 
  });

  it('deve renderizar o botão Voltar', () => {
    render(<CriarUsuario />);

    const botaoVoltar = screen.getByRole('link', { name: 'Voltar' });

    expect(botaoVoltar).toBeInTheDocument(); 
    expect(botaoVoltar.getAttribute('href')).toBe('/administracao');
  });
  
});
