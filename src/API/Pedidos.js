const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2ODQ0OTU4MTIsImV4cCI6MTY4NDQ5OTQxMiwic3ViIjoiMSJ9.W0hJ77GHu0YvwPCqCX1B8PAs8LBxkF7n4DSzmjML_kc';

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

export const adicionarPedido = async (cliente, mesa, produtos) => {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`,
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
