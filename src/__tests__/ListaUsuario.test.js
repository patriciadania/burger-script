
import ListaDeUsuarios from '../componentes/CriaEListaUsuario/ListaUsuarios';
import { listarUsuarios, deletarUsuario, editarUsuario } from '../API/Usuarios';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';



jest.mock('../API/Usuarios', () => ({
  listarUsuarios: jest.fn(),
  editarUsuario: jest.fn(),
  deletarUsuario: jest.fn(),
}));

describe('ListaDeUsuarios', () => {
  const usuariosMock = [
    {
      id: 1,
      name: 'Usuário 1',
      email: 'usuario1@example.com',
      role: 'Role 1',
    },
    {
      id: 2,
      name: 'Usuário 2',
      email: 'usuario2@example.com',
      role: 'Role 2',
    },
  ];

  beforeEach(() => {
    listarUsuarios.mockResolvedValue(usuariosMock);
  });

  test('deve exibir a lista de usuários corretamente', async () => {
    render(<ListaDeUsuarios />);

    const cardUsuarios = await screen.findAllByTestId('card-usuario');

    expect(cardUsuarios).toHaveLength(2);

    expect(cardUsuarios[0]).toHaveTextContent('Nome: Usuário 1');
    expect(cardUsuarios[0]).toHaveTextContent('E-mail: usuario1@example.com');
    expect(cardUsuarios[0]).toHaveTextContent('Cargo: Role 1');

    expect(cardUsuarios[1]).toHaveTextContent('Nome: Usuário 2');
    expect(cardUsuarios[1]).toHaveTextContent('E-mail: usuario2@example.com');
    expect(cardUsuarios[1]).toHaveTextContent('Cargo: Role 2');
  });

  test('deve chamar a função de editar usuário corretamente', async () => {
    editarUsuario.mockResolvedValue({});
    listarUsuarios.mockResolvedValue(usuariosMock);

    render(<ListaDeUsuarios />);

    const btnEditarUsuario = await screen.findAllByText('Editar');

    fireEvent.click(btnEditarUsuario[0]);

    const nomeInput = screen.getByLabelText('Nome');
    const emailInput = screen.getByLabelText('E-mail');
    const cargoInput = screen.getByLabelText('Cargo');
    const salvarButton = screen.getByText('Salvar');

    fireEvent.change(nomeInput, { target: { value: 'Novo Nome' } });
    fireEvent.change(emailInput, { target: { value: 'novoemail@example.com' } });
    fireEvent.change(cargoInput, { target: { value: 'Novo Cargo' } });

    fireEvent.click(salvarButton);

    await waitFor(() => expect(editarUsuario).toHaveBeenCalledTimes(1));

    expect(editarUsuario).toHaveBeenCalledWith(1, {
      id: 1,
      name: 'Novo Nome',
      email: 'novoemail@example.com',
      role: 'Novo Cargo',
    });

    const cardUsuarios = await screen.findAllByTestId('card-usuario');

    expect(cardUsuarios[0]).toHaveTextContent('Nome: Novo Nome');
    expect(cardUsuarios[0]).toHaveTextContent('E-mail: novoemail@example.com');
    expect(cardUsuarios[0]).toHaveTextContent('Cargo: Novo Cargo');
  });

  test('deve chamar a função de deletar usuário corretamente', async () => {
    deletarUsuario.mockResolvedValue({});
    listarUsuarios.mockResolvedValue(usuariosMock);

    render(<ListaDeUsuarios />);

    const btnDeletarUsuario = await screen.findAllByText('Deletar');

    fireEvent.click(btnDeletarUsuario[0]);

    const confirmarButton = screen.getByText('Confirmar');

    fireEvent.click(confirmarButton);

    await waitFor(() => expect(deletarUsuario).toHaveBeenCalledTimes(1));

    expect(deletarUsuario).toHaveBeenCalledWith(1);

    const cardUsuarios = await screen.findAllByTestId('card-usuario');

    expect(cardUsuarios).toHaveLength(1);
  });
  
});
