
const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2ODQ1OTAwNDMsImV4cCI6MTY4NDU5MzY0Mywic3ViIjoiMSJ9.5P5eBZjlKh7dwtx2RnrPMGE9jxv45wLtOGsdwTtRLpA';


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
    const pedido = {
      client: cliente,
      table: mesa,
      products: produtos.map((produto) => ({
        qty: produto.quantity,
        product: {
          id: produto.id,
          name: produto.name,
          type: produto.type,
          price: produto.price,
          table: mesa,
        },
      })),
      status: '',
      dateEntry: new Date().toISOString(),
      id: Math.floor(Math.random() * 1000), // Gere um ID aleatório para o pedido
    };

    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(pedido),
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
