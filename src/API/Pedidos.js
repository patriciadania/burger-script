import Order from './models/Order';

const API_URL = 'http://localhost:8080';

const getOrders = async () => {
  const orders = await Order.find();
  return orders;
}

export const obterPedidos = async () => {
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2RzZHNkdW9AdGVzdGUuY29tIiwiaWF0IjoxNjg0MDk1NDM3LCJleHAiOjE2ODQwOTkwMzcsInN1YiI6IjMifQ.41ZSV6SCMS881yaiHzrlW5VPa8hQ8Y4hAmkdB5Tpbmo';
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    const orders = await getOrders(); // chamada da função getOrders
    return { ...data, orders };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
