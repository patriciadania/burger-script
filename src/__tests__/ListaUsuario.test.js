import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListaDeUsuarios from '../componentes/CriaEListaUsuario/ListaUsuarios';
import { listarUsuarios, deletarUsuario } from '../API/Usuarios';
import '@testing-library/jest-dom/extend-expect';



jest.mock("../API/Usuarios");

describe('ListaDeUsuarios', () => {
    beforeEach(() => {
      listarUsuarios.mockResolvedValue([
        { id: 1, name: 'Usuário 1', email: 'usuario1@example.com', role: 'admin' },
        { id: 2, name: 'Usuário 2', email: 'usuario2@example.com', role: 'user' },
      ]);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('deve renderizar corretamente a lista de usuários', async () => {
      render(<ListaDeUsuarios />);
  
      const usuario1 = await screen.findByText('Usuário 1');
      expect(usuario1).toBeInTheDocument();
  
      const usuario2 = await screen.findByText('Usuário 2');
      expect(usuario2).toBeInTheDocument();
    });
  
    it('deve deletar um usuário ao clicar no botão de deletar', async () => {
      deletarUsuario.mockResolvedValue();
  
      render(<ListaDeUsuarios />);
  
      const usuario1 = await screen.findByText('Usuário 1');
      expect(usuario1).toBeInTheDocument();
  
      const botaoDeletarUsuario = screen.getByTestId('botao-deletar-1');
      fireEvent.click(botaoDeletarUsuario);
  
      expect(deletarUsuario).toHaveBeenCalledWith(1);
  
      const alertaDeletarUsuario = await screen.findByText('Usuário deletado com sucesso');
      expect(alertaDeletarUsuario).toBeInTheDocument();
  
      const usuario1AposDelecao = screen.queryByText('Usuário 1');
      expect(usuario1AposDelecao).not.toBeInTheDocument();
    });
  });