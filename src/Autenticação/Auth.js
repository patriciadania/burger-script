export const verificarAutenticacao = () => {
    const authToken = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');
  
    if (!authToken || !userData) {
 
      throw new Error('Usuário não autenticado');
    }
  
    const user = JSON.parse(userData);
  
    if (!user || !user.name) {
      throw new Error('Usuário inválido');
    }
  
 
    return user;
  };