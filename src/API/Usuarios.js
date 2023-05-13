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
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUB0ZXN0ZS5jb20iLCJpYXQiOjE2ODQwMDc1NDMsImV4cCI6MTY4NDAxMTE0Mywic3ViIjoiMzEifQ.N5uoBg5PwQTx_Rc7gPZguQisaoI2RB0BD4qTfv2QGRQ';
  
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
  