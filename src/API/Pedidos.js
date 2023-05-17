

const API_URL = 'http://localhost:8080';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2ODQzMjkwMjYsImV4cCI6MTY4NDMzMjYyNiwic3ViIjoiMSJ9.Tp2_2nlZeuCP0S4WP-CTQfuf2dzbEHGSfLQa1v55hSw';

export const obterPedidos = async () => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AUTH_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao obter pedidos');
  }

  return response.json();
};

  
// export const obterPedidos = async (cliente, mesa, produtos) => {
//   const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHJpQHRlc3RlLmNvbSIsImlhdCI6MTY4NDEwMzA1NSwiZXhwIjoxNjg0MTA2NjU1LCJzdWIiOiI5In0.7hVuQEHVTDN1nbRqkkFF0icnfMT1EwwApfuYJwZx1JI';

//   const response = await fetch(`${API_URL}/pedidos`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${authToken}`,
//     },
//     body: JSON.stringify({
//       client: cliente,
//       table: mesa,
//       products: produtos,
//     }),
//   });

//   const pedido = await response.json();
//   console.log(pedido);

//   return pedido;
// };
// Pedidos.js




export const adicionarPedido = async (cliente, mesa, produtos) => {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client: cliente,
        table: mesa,
      products: produtos,
      }),
    }); 
    if (!response.ok) {
      throw new Error('Erro ao adicionar pedido');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
