const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';
//const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1aWdpQGJzLmNvbSIsImlhdCI6MTY4NDk3MDI5NywiZXhwIjoxNjg0OTczODk3LCJzdWIiOiI0In0.43YKJiAHPM7c167ABMDwhktbt-RGXfGAQ07SqY4suOI';


const getAuthToken = () => {
  const token = localStorage.getItem('authToken');
  return token;
};

export const adicionarProdutos = async (nomeProduto, precoProduto, tipoProduto, categoriaProduto, idProduto) => {
  try {
    const authToken = getAuthToken();
    console.log(authToken)
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
    console.log(products);
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obterProdutos = async () => {
  try {
    const authToken = getAuthToken();
    console.log(authToken)
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
    console.error(error);
    throw error;
  }
};
// export const adicionarProdutos = async (nomeProduto, precoProduto, tipoProduto, categoriaProduto, idProduto) => {
//   try {
//     const response = await fetch(`${API_URL}/products`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//       },
//       body: JSON.stringify({
//         name: nomeProduto,
//         price: precoProduto,
//         type: tipoProduto,
//         category: categoriaProduto,
//         id: idProduto,
//       }),
//     });
//     const products = await response.json();
//     console.log(products);
//     return products;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const obterProdutos = async () => {
//   try {
//     const response = await fetch(`${API_URL}/products`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//       },
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
