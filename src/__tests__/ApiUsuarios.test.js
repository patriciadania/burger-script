import fetchMock from 'jest-fetch-mock';
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



describe('Testes para as funções de API de usuários', () => {
  beforeEach(() => {
    fetchMock.resetMocks(); // Reseta os mocks antes de cada teste
  });

  const mockAuthToken = 'mock-auth-token';

  const mockResponse = (status, body) => {
    fetchMock.mockResponseOnce(JSON.stringify(body), { status });
  };

  const setAuthTokenHeader = () => {
    fetchMock.mockResponseOnce('', {
      headers: {
        Authorization: `Bearer ${mockAuthToken}`
      }
    });
  };

  it('deve fazer login com sucesso', async () => {
    mockResponse(200, { nome: 'Usuário', email: 'usuario@example.com' });

    const usuario = await login('usuario@example.com', 'senha123');

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: 'usuario@example.com', password: 'senha123' })
    });

    expect(usuario).toEqual({ nome: 'Usuário', email: 'usuario@example.com' });
  });

  it('deve lançar um erro ao fazer login com senha incorreta ou usuário não cadastrado', async () => {
    mockResponse(400);

    await expect(login('usuario@example.com', 'senha123')).rejects.toThrow(
      'Senha incorreta ou usuário não cadastrado!'
    );
  });

  it('deve criar um novo usuário com sucesso', async () => {
    mockResponse(201);

    await criarUsuario('Usuário', 'usuario@example.com', 'senha123', 'role');

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: 'Usuário',
        email: 'usuario@example.com',
        password: 'senha123',
        role: 'role'
      })
    });
  });

  const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app'; // Substitua pela URL da sua API

it('deve criar um novo usuário com sucesso', async () => {
  mockResponse(201);

  await criarUsuario('Usuário', 'usuario@example.com', 'senha123', 'role');

  expect(fetch).toHaveBeenCalledWith(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: 'Usuário',
      email: 'usuario@example.com',
      password: 'senha123',
      role: 'role'
    })
  });
});

  it('deve lançar um erro ao criar um usuário', async () => {
    mockResponse(400);

    await expect(
      criarUsuario('Usuário', 'usuario@example.com', 'senha123', 'role')
    ).rejects.toThrow('Erro ao criar o usuário');
  });

  it('deve obter a lista de usuários com sucesso', async () => {
    setAuthTokenHeader();
    mockResponse(200, [{ nome: 'Usuário 1' }, { nome: 'Usuário 2' }]);

    const usuarios = await listarUsuarios();

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mockAuthToken}`
      }
    });

    expect(usuarios).toEqual([{ nome: 'Usuário 1' }, { nome: 'Usuário 2' }]);
  });

  it('deve lançar um erro ao obter a lista de usuários', async () => {
    setAuthTokenHeader();
    mockResponse(400);

    await expect(listarUsuarios()).rejects.toThrow('Erro ao obter usuários');
  });

  it('deve deletar um usuário com sucesso', async () => {
    setAuthTokenHeader();
    mockResponse(204);

    await deletarUsuario(1);

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/users/1`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mockAuthToken}`
      }
    });
  });

  it('deve lançar um erro ao deletar um usuário', async () => {
    setAuthTokenHeader();
    mockResponse(400);

    await expect(deletarUsuario(1)).rejects.toThrow('Erro ao deletar usuário');
  });

  it('deve editar um usuário com sucesso', async () => {
    setAuthTokenHeader();
    mockResponse(200, { nome: 'Usuário Editado' });

    const novoUsuario = { nome: 'Usuário Editado' };

    const usuarioEditado = await editarUsuario(1, novoUsuario);

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/users/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mockAuthToken}`
      },
      body: JSON.stringify(novoUsuario)
    });

    expect(usuarioEditado).toEqual({ nome: 'Usuário Editado' });
  });

  it('deve lançar um erro ao editar um usuário', async () => {
    setAuthTokenHeader();
    mockResponse(400);

    const novoUsuario = { nome: 'Usuário Editado' };

    await expect(editarUsuario(1, novoUsuario)).rejects.toThrow('Erro ao editar o usuário');
  });

  it('deve fazer login com sucesso', async () => {
    mockResponse(200, { nome: 'Usuário', email: 'usuario@example.com' });
  
    const usuario = await login('usuario@example.com', 'senha123');
  
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: 'usuario@example.com', password: 'senha123' })
    });
  
    expect(usuario).toEqual({ nome: 'Usuário', email: 'usuario@example.com' });
  });
  

  
});
