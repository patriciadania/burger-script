const API_URL = 'http://localhost:8080';

export const adicionarProdutos = async (nomeProduto, precoProduto, tipoProduto, titleProduto, idProduto) => {
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHJpQHRlc3RlLmNvbSIsImlhdCI6MTY4NDEwMzA1NSwiZXhwIjoxNjg0MTA2NjU1LCJzdWIiOiI5In0.7hVuQEHVTDN1nbRqkkFF0icnfMT1EwwApfuYJwZx1JI'
  const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({ 
          name: nomeProduto,
          price: precoProduto,
           type: tipoProduto, 
           title: titleProduto,
          id: idProduto })
  });
  const products = await response.json();
  console.log(products);

  return products;
}

export const obterProdutos = async () => {
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHJpQHRlc3RlLmNvbSIsImlhdCI6MTY4NDEwMzA1NSwiZXhwIjoxNjg0MTA2NjU1LCJzdWIiOiI5In0.7hVuQEHVTDN1nbRqkkFF0icnfMT1EwwApfuYJwZx1JI'
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};