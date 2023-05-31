const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';

const getAuthToken = () => {
  const token = localStorage.getItem('authToken');
  return token;
};

export const obterPedidos = async () => {
  const authToken = getAuthToken();
  const response = await fetch(`${API_URL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao obter pedidos');
  }

  return response.json();
};

export const adicionarPedido = async (cliente, mesa,produtos, atendente) => {
  const authToken = getAuthToken();
  try {
    const pedido = {
      waiter: atendente,
      client: cliente,
      table: mesa,
      products: produtos.map((produto) => ({
        qty: produto.quantity,
        client: produto.client,
        product: {
          id: produto.id,
          name: produto.name,
          type: produto.type,
          price: produto.price,
          table: produto.table,
        },
      })),
      status: 'pendente',
      dateEntry: new Date().toISOString(),
      id: Math.floor(Math.random() * 1000),
    };

    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
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

export const atualizarStatusPedido = async (pedidoId, novoStatus) => {
  const authToken = getAuthToken();
  try {
    const response = await fetch(`${API_URL}/orders/${pedidoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        status: novoStatus,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao atualizar o status do pedido');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
