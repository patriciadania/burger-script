const API_URL = 'http://localhost:8080';

export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if(response.status !== 200) {
        // TODO: Tratar cenário de erro no login (ex senha incorreta)
        console.log(response.status);
    }

    return response.json();
}