//import Order from './models/Order';

// const API_URL = 'http://localhost:8080';

// const getOrders = async () => {
//   const orders = await Order.find();
//   return orders;
// }

// export const obterPedidos = async () => {
//   const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZGlkb3NAdGVzdGUuY29tIiwiaWF0IjoxNjg0MTU4MzkyLCJleHAiOjE2ODQxNjE5OTIsInN1YiI6IjEwIn0.Ha9tqRmAHucCqwVvlZT2wrzYEutR6tO3BucwU5MmlYQ';
//   try {
//     const response = await fetch(`${API_URL}/orders`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${authToken}`,
//       },
//     });
//     const data = await response.json();
//     const orders = await getOrders(); // chamada da função getOrders
//     return { ...data, orders };
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };



  const API_URL = 'http://localhost:8080';

export const obterPedidos = async () => {
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHNzaWRveGNzQHRlc3RlLmNvbSIsImlhdCI6MTY4NDE2Njg2NCwiZXhwIjoxNjg0MTcwNDY0LCJzdWIiOiIxMiJ9.wuVRyGt7YrW5j2zDzCsXzClE2cmzpNtfr6R7oU5bnP4';
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
