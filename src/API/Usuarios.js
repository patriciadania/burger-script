const API_URL = 'http://localhost:8080';


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
    const API_URL = 'http://localhost:8080';
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RzZGFuZG9vQHRlc3RlLmNvbSIsImlhdCI6MTY4NDA4ODAxOSwiZXhwIjoxNjg0MDkxNjE5LCJzdWIiOiIxMiJ9.h_oQaBhB-OuvjPuMIPqoLhbCpzcaySXzoV7wn8LfYQM'
  
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
  };


//   export const obterNomeUsuario = async () => {
//     const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUB0ZXN0ZS5jb20iLCJpYXQiOjE2ODQwMDc1NDMsImV4cCI6MTY4NDAxMTE0Mywic3ViIjoiMzEifQ.N5uoBg5PwQTx_Rc7gPZguQisaoI2RB0BD4qTfv2QGRQ';
  
//     const response = await fetch(`${API_URL}/users`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${authToken}`,
//       },
//     });
  
//     if (!response.ok) {
//       throw new Error('Erro ao obter o nome do usuário');
//     }
  
//     const usuario = await response.json();
//     console.log(usuario)
//     return usuario.nome;
//   };
  
export const deletarUsuario = async (id) => {
    const API_URL = 'http://localhost:8080';
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RzZGFuZG9vQHRlc3RlLmNvbSIsImlhdCI6MTY4NDA4ODAxOSwiZXhwIjoxNjg0MDkxNjE5LCJzdWIiOiIxMiJ9.h_oQaBhB-OuvjPuMIPqoLhbCpzcaySXzoV7wn8LfYQM'
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
  };
  

  export const editarUsuario = async (uid, novoUsuario) => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RzZGFuZG9vQHRlc3RlLmNvbSIsImlhdCI6MTY4NDA4ODAxOSwiZXhwIjoxNjg0MDkxNjE5LCJzdWIiOiIxMiJ9.h_oQaBhB-OuvjPuMIPqoLhbCpzcaySXzoV7wn8LfYQM'
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
  
    return response.json();
  };
  