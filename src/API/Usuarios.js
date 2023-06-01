const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';

const pegarAuthToken = () => {
  const token = localStorage.getItem('authToken');
  return token;
};

const setAuthToken = (token, user) => {
  if (token && user) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
};


export const login = async (email, password, name) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  });
  if (response.status === 400) {
    throw new Error('Senha incorreta ou usuário não cadastrado!');
  }

  const data = await response.json();
  const authToken = data.accessToken;
  const user = data.user;
  console.log(user)


  setAuthToken(authToken, user);
  return data;

};


export const criarUsuario = async (nome, email, password, role) => {
      const response = await fetch(`${API_URL}/users`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              name: nome,
              email: email,
               password: password, 
               role: role })
      });
      if (!response.ok) {
          throw new Error('Erro ao criar o usuário');
        }
  }

export const listarUsuarios = async () => {
  try {
    const authToken = pegarAuthToken();

    if (!authToken) {
      throw new Error('Usuário não autenticado');
    }

    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao obter usuários');
    }

    return response.json();
  } catch (error) {
    throw new Error('Erro ao obter usuários');
  }
};

export const deletarUsuario = async (id) => {
  try {
    const authToken = pegarAuthToken();

    if (!authToken) {
      throw new Error('Usuário não autenticado');
    }

    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar usuário');
    }
  } catch (error) {
    throw new Error('Erro ao deletar usuário');
  }
};

export const editarUsuario = async (uid, novoUsuario) => {
  try {
    const authToken = pegarAuthToken();

    if (!authToken) {
      throw new Error('Usuário não autenticado');
    }

    const response = await fetch(`${API_URL}/users/${uid}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(novoUsuario)
    });

    if (!response.ok) {
      throw new Error('Erro ao editar o usuário');
    }
    const respostaApi = await response.json();
    return respostaApi;
  } catch (error) {
    throw new Error('Erro ao editar o usuário');
  }
};


const obterNomeUsuario = () => {
  const authToken = localStorage.getItem('authToken');
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;

  if (authToken && user && user.name) {
    return user.name; // Retorna o nome do usuário
  }

  return null; // Retorna null caso o token, usuário ou nome do usuário não estejam disponíveis no localStorage
};
export default obterNomeUsuario;