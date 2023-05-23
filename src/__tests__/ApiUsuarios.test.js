/* eslint-disable jest/no-identical-title */
import fetch from 'node-fetch';
import { login,
  criarUsuario,
  listarUsuarios,
  deletarUsuario,
  editarUsuario } from "../API/Usuarios";
  import '@testing-library/jest-dom/extend-expect';


  // o teste abaixo passou
// describe('Testes para a função de login', () => {
//   beforeEach(() => {
//     jest.resetAllMocks();
//   });

//   it('realiza o login com sucesso', async () => {
//     // Configurar mocks para simular uma resposta de sucesso
//     const mockResponse = {
//       ok: true,
//       json: jest.fn().mockResolvedValue({ token: 'fakeToken' }),
//     };
//     global.fetch = jest.fn().mockResolvedValue(mockResponse);

//     // Chamar a função login com os parâmetros desejados
//     await login('test@example.com', 'password');

//     // Verificar o comportamento esperado
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//     expect(global.fetch).toHaveBeenCalledWith('https://burger-queen-api-mock-mluz.vercel.app/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email: 'test@example.com', password: 'password' }),
//     });
//   });

//   it('lança um erro ao receber uma resposta com status 400', async () => {
//     // Configurar mocks para simular uma resposta com status 400
//     const mockResponse = {
//       ok: false,
//       status: 400,
//       json: jest.fn().mockResolvedValue({ error: 'Senha incorreta ou usuário não cadastrado!' }),
//     };
//     global.fetch = jest.fn().mockResolvedValue(mockResponse);

//     // Chamar a função login com os parâmetros desejados
//     await expect(login('test@example.com', 'wrongpassword')).rejects.toThrow(
//       'Senha incorreta ou usuário não cadastrado!'
//     );

//     // Verificar o comportamento esperado
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//     expect(global.fetch).toHaveBeenCalledWith('https://burger-queen-api-mock-mluz.vercel.app/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email: 'test@example.com', password: 'wrongpassword' }),
//     });
//   });

// });


const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';

describe('API de Usuários', () => {
  const authTokenMock = 'mockAuthToken';

  beforeEach(() => {
    localStorage.clear();
  });

  describe('login', () => {
    const email = 'example@example.com';
    const password = '123456';

    it('deve fazer login com sucesso e retornar o token de autenticação', async () => {
      const loginData = {
        accessToken: authTokenMock
      };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue(loginData)
      });

      const result = await login(email, password);

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      expect(localStorage.getItem('authToken')).toBe(authTokenMock);
      expect(result).toEqual(loginData);
    });

    it('deve lançar um erro ao fazer login com senha incorreta ou usuário não cadastrado', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400
      });

      await expect(login(email, password)).rejects.toThrow('Senha incorreta ou usuário não cadastrado!');
    });
  });

  describe('criarUsuario', () => {
    const nome = 'Novo Usuário';
    const email = 'novousuario@example.com';
    const password = '123456';
    const role = 'admin';

    it('deve criar um novo usuário com sucesso', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        status: 200
      });

      await criarUsuario(nome, email, password, role);

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          email,
          password,
          role
        })
      });
    });

    it('deve lançar um erro ao criar um novo usuário', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500
      });

      await expect(criarUsuario(nome, email, password, role)).rejects.toThrow('Erro ao criar o usuário');
    });
  });

  describe('listarUsuarios', () => {
    it('deve retornar a lista de usuários com autenticação válida', async () => {
      const usuariosMock = [{ id: 1, name: 'Usuário 1' }, { id: 2, name: 'Usuário 2' }];
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue(usuariosMock)
      });
      localStorage.setItem('authToken', authTokenMock);

      const result = await listarUsuarios();

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokenMock}`
        }
      });
      expect(result).toEqual(usuariosMock);
    });

    it('deve lançar um erro ao tentar listar os usuários sem autenticação válida', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 401
      });

      await expect(listarUsuarios()).rejects.toThrow('Usuário não autenticado');
    });

    it('deve lançar um erro ao tentar listar os usuários e ocorrer um erro na API', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500
      });
      localStorage.setItem('authToken', authTokenMock);

      await expect(listarUsuarios()).rejects.toThrow('Erro ao obter usuários');
    });
  });

  describe('deletarUsuario', () => {
    const usuarioId = 1;

    it('deve deletar o usuário com autenticação válida', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        status: 200
      });
      localStorage.setItem('authToken', authTokenMock);

      await deletarUsuario(usuarioId);

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/users/${usuarioId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokenMock}`
        }
      });
    });

    it('deve lançar um erro ao tentar deletar o usuário sem autenticação válida', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 401
      });

      await expect(deletarUsuario(usuarioId)).rejects.toThrow('Usuário não autenticado');
    });

    it('deve lançar um erro ao tentar deletar o usuário e ocorrer um erro na API', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500
      });
      localStorage.setItem('authToken', authTokenMock);

      await expect(deletarUsuario(usuarioId)).rejects.toThrow('Erro ao deletar usuário');
    });
  });

  describe('editarUsuario', () => {
    const usuarioId = 1;
    const novoUsuario = { id: 1, name: 'Usuário Editado' };

    it('deve editar o usuário com autenticação válida', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue(novoUsuario)
      });
      localStorage.setItem('authToken', authTokenMock);

      const result = await editarUsuario(usuarioId, novoUsuario);

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/users/${usuarioId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokenMock}`
        },
        body: JSON.stringify(novoUsuario)
      });
      expect(result).toEqual(novoUsuario);
    });

    it('deve lançar um erro ao tentar editar o usuário sem autenticação válida', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 401
      });

      await expect(editarUsuario(usuarioId, novoUsuario)).rejects.toThrow('Usuário não autenticado');
    });

    it('deve lançar um erro ao tentar editar o usuário e ocorrer um erro na API', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500
      });
      localStorage.setItem('authToken', authTokenMock);

      await expect(editarUsuario(usuarioId, novoUsuario)).rejects.toThrow('Erro ao editar o usuário');
    });
  });
});
