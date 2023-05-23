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



jest.mock('node-fetch');
const API_URL = 'https://api.example.com';


describe('API de Usuários', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Realiza o login com sucesso', async () => {
    const email = 'test@example.com';
    const password = 'password';
    const authToken = 'abc123';

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ accessToken: authToken })
    });

    const response = await login(email, password);

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    expect(response).toEqual({ accessToken: authToken });
  });

  test('Cria um usuário com sucesso', async () => {
    const nome = 'John Doe';
    const email = 'johndoe@example.com';
    const password = 'password';
    const role = 'admin';

    fetch.mockResolvedValueOnce({
      ok: true
    });

    await criarUsuario(nome, email, password, role);

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nome,
        email,
        password,
        role
      })
    });
  });

  test('Lista os usuários com sucesso', async () => {
    const authToken = 'abc123';
    const users = [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' }
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(users)
    });

    const response = await listarUsuarios();

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });
    expect(response).toEqual(users);
  });

  test('Deleta um usuário com sucesso', async () => {
    const id = 1;
    const authToken = 'abc123';

    fetch.mockResolvedValueOnce({
      ok: true
    });

    await deletarUsuario(id);

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });
  });

  test('Edita um usuário com sucesso', async () => {
    const uid = 'abc123';
    const novoUsuario = { name: 'John Doe', email: 'johndoe@example.com' };
    const authToken = 'xyz789';

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: uid, ...novoUsuario })
    });

    const response = await editarUsuario(uid, novoUsuario);

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/users/${uid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(novoUsuario)
    });
    expect(response).toEqual({ id: uid, ...novoUsuario });
  });
});
