import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CriarUsuario } from '../API/Usuarios';
import FormularioAdmin from '../componentes/Formulario/FormularioAdmin';

describe('CriarUsuario', () => {
  test('renderiza corretamente', () => {
    render(<CriarUsuario />);
    
    expect(screen.getByText('Voltar')).toBeInTheDocument();
    expect(screen.getByText('adicionar colaborador')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome:')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail:')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha:')).toBeInTheDocument();
    expect(screen.getByLabelText('Cargo:')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar')).toBeInTheDocument();
  });
});

describe('FormularioAdmin', () => {
  test('renderiza corretamente', () => {
    render(<FormularioAdmin />);
    
    expect(screen.getByLabelText('Nome:')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail:')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha:')).toBeInTheDocument();
    expect(screen.getByLabelText('Cargo:')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar')).toBeInTheDocument();
  });

  test('executa função aoSalvar corretamente', () => {
    const criarUsuarioMock = jest.fn();

    render(<FormularioAdmin criarUsuario={criarUsuarioMock} />);
    
    fireEvent.change(screen.getByLabelText('Nome:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('E-mail:'), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(screen.getByLabelText('Senha:'), { target: { value: 'password' } });
    fireEvent.change(screen.getByLabelText('Cargo:'), { target: { value: 'Administração' } });

    fireEvent.click(screen.getByText('Cadastrar'));

    expect(criarUsuarioMock).toHaveBeenCalledTimes(1);
    expect(criarUsuarioMock).toHaveBeenCalledWith('John Doe', 'johndoe@example.com', 'password', 'Administração');
  });
});
