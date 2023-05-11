const API_URL ='http://localhost:8080';

export const createUser = (email, password, role) => fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify({email, password, role})
})