// CriarUsuario.js
import FormularioAdmin from "../Formulario/FormularioAdmin";
import { Link } from "react-router-dom";

export default function CriarUsuario() {
  return (
    <div className="telaFazerPedido">
      <nav className="botaoSair">
        <Link to="/administracao" className="botaoSair">
          Voltar
        </Link>
      </nav>
      <span className="fazerPedido">adicionar colaborador</span>
      <FormularioAdmin />
    </div>
  );
}
