const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';

const pegarAuthToken = () => {
  const token = localStorage.getItem('authToken');
  return token;
};

export const adicionarProdutos = async (nomeProduto, precoProduto, tipoProduto, categoriaProduto, idProduto) => {
  try {
    const authToken = pegarAuthToken();
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        name: nomeProduto,
        price: precoProduto,
        type: tipoProduto,
        category: categoriaProduto,
        id: idProduto,
      }),
    });
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obterProdutos = async () => {
  try {
    const authToken = pegarAuthToken();
    const response = await fetch(`${API_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


export const deletarProduto = async (id) => {
  try {
    const authToken = pegarAuthToken();

    if (!authToken) {
      throw new Error('Usuário não autenticado');
    }

    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar produto');
    }
  } catch (error) {
    throw new Error('Erro ao deletar produto');
  }
};