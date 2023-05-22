const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';
// const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2ODQ1OTAwNDMsImV4cCI6MTY4NDU5MzY0Mywic3ViIjoiMSJ9.5P5eBZjlKh7dwtx2RnrPMGE9jxv45wLtOGsdwTtRLpA';

// export const login = async (email, password) => {
//     const response = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     });

//     if(response.status === 400) {
//         console.log(response.status);
//         throw new Error('Senha incorreta ou usuário não cadastrado!');
//     } 
//     return response.json();
// }

// export const criarUsuario = async (nome, email, password, role) => {
//     const response = await fetch(`${API_URL}/users`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//             nome: nome,
//             email: email,
//              password: password, 
//              role: role })
//     });
//     if (!response.ok) {
//         throw new Error('Erro ao criar o usuário');
//       }
// }

// export const listarUsuarios = async () => {
   
//     const response = await fetch(`${API_URL}/users`, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${AUTH_TOKEN}`
//       },
//     });
  
//     if (!response.ok) {
//       throw new Error('Erro ao obter usuários');
//     }
  
//     return response.json();
//   };
  
// export const deletarUsuario = async (id) => {
//     const response = await fetch(`${API_URL}/users/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${AUTH_TOKEN}`
//       }
//     });
  
//     if (!response.ok) {
//       throw new Error('Erro ao deletar usuário');
//     }
//   };
  

//   export const editarUsuario = async (uid, novoUsuario) => {
  
//     const response = await fetch(`${API_URL}/users/${uid}`, {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${AUTH_TOKEN}`
//       },
//       body: JSON.stringify(novoUsuario)
//     });
  
//     if (!response.ok) {
//       throw new Error('Erro ao editar o usuário');
//     }
  
//     return response.json();
//   };
  

// export const getAuthToken = () => {
//   return localStorage.getItem('authToken');
// };

// export const login = async (email, password) => {
//   const response = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, password })
//   });

//   if (response.status === 400) {
//     throw new Error('Senha incorreta ou usuário não cadastrado!');
//   }

//   const data = await response.json();
//   const authToken = data.token;

//   localStorage.setItem('authToken', authToken);

//   return data;
// };

// export const listarUsuarios = async () => {
//   const authToken = getAuthToken();

//   const response = await fetch(`${API_URL}/users`, {
//     method: "GET",
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${authToken}`
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Erro ao obter usuários');
//   }

//   return response.json();
// };



const getAuthToken = () => {
  const token = localStorage.getItem('authToken');
  return token;
};

const setAuthToken = (token) => {
  if(token) {
    localStorage.setItem('authToken', token);
  }
};

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (response.status === 400) {
    throw new Error('Senha incorreta ou usuário não cadastrado!');
  }

  const data = await response.json();
  const authToken = data.accessToken;


  setAuthToken(authToken);

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
    const authToken = getAuthToken();
    console.log(authToken)

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
    console.error(error);
    throw new Error('Erro ao obter usuários');
  }
};

export const deletarUsuario = async (id) => {
  try {
    const authToken = getAuthToken();

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
    console.error(error);
    throw new Error('Erro ao deletar usuário');
  }
};

export const editarUsuario = async (uid, novoUsuario) => {
  try {
    const authToken = getAuthToken();

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
    console.log(respostaApi)
    return respostaApi;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao editar o usuário');
  }
};


