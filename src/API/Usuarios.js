const API_URL = 'http://localhost:8080';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2ODQ0MTYxNjIsImV4cCI6MTY4NDQxOTc2Miwic3ViIjoiMSJ9.VM0ja3N6K0GYbgXEa4LIACq3OiYwZMFfhI5TgL0DTm8';

export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if(response.status === 400) {
        console.log(response.status);
        throw new Error('Senha incorreta ou usuário não cadastrado!');
    } 
    return response.json();
}

export const criarUsuario = async (nome, email, password, role) => {
    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            nome: nome,
            email: email,
             password: password, 
             role: role })
    });
    if (!response.ok) {
        throw new Error('Erro ao criar o usuário');
      }
}

export const listarUsuarios = async () => {
   
    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`
      },
    });
  
    if (!response.ok) {
      throw new Error('Erro ao obter usuários');
    }
  
    return response.json();
  };
  
export const deletarUsuario = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`
      }
    });
  
    if (!response.ok) {
      throw new Error('Erro ao deletar usuário');
    }
  };
  

  export const editarUsuario = async (uid, novoUsuario) => {
  
    const response = await fetch(`${API_URL}/users/${uid}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`
      },
      body: JSON.stringify(novoUsuario)
    });
  
    if (!response.ok) {
      throw new Error('Erro ao editar o usuário');
    }
  
    return response.json();
  };
  