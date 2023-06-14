import { verificarAutenticacao } from "./Autenticação/Auth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, roles }) => {
    try {
      const user = verificarAutenticacao();
  
      if (roles && !roles.includes(user.role)) {
        return <Navigate to="/" />;
      }
  
      return children
    } catch (error) {
      return <Navigate to="/" />;
    }
  }