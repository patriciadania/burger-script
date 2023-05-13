const API_URL = 'http://localhost:8080';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHRlc3RlZG9wcm9kdXRvLmNvbSIsImlhdCI6MTY4Mzk4Njg5MCwiZXhwIjoxNjgzOTkwNDkwLCJzdWIiOiIxMCJ9.4iYQm4yDZPBfBoAwxFYXZjEZk7l0EchlTR_1TxM8hFg';

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });

  const products = await response.json();
  console.log(products);

  return products;
};
