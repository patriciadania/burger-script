import { useEffect, useState } from "react";
import './ListaUsuarios.css'
import { Link } from "react-router-dom";
import { listarUsuarios, editarUsuario, deletarUsuario} from "../../API/Usuarios";
import BtnEditarUsuario from "../EditarDeletarUsuario/BtnEditarUsuario";
import BtnDeletarUsuario from "../EditarDeletarUsuario/BtnDeletarUsuario";

export default function ListaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoUsuarioId, setEditandoUsuarioId] = useState(null);

  useEffect(() => {
    const obterUsuarios = async () => {
      try {
        const usuariosData = await listarUsuarios();
        setUsuarios(usuariosData);
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    };

    obterUsuarios();
  }, []);

  const btnEditandoUsuario = (usuarioId) => {
    setEditandoUsuarioId(usuarioId);
  };

  const salvarUsuario = async (novoUsuario) => {
    try {
      const usuarioAtualizado = { ...novoUsuario };
      delete usuarioAtualizado.editando;
  
      await editarUsuario(usuarioAtualizado.id, usuarioAtualizado);
      console.log("Usuário salvo com sucesso");
      setEditandoUsuarioId(null);
      // Atualizar a lista de usuários após salvar, se necessário
      // obterUsuarios();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
    }
  };
  

  const onDeleteUsuario = async (id) => {
    try {
      await deletarUsuario(id);
      alert("Usuário deletado com sucesso");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  return (
    <div className="telaFazerPedido">
      <nav className="botaoSair">
        <Link to="/administracao" className="botaoSair">
          Voltar
        </Link>
      </nav>
      <span className="fazerPedido">Listar colaboradores</span>
      <div className="listaUsuarios">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="cardUsuario">
            {editandoUsuarioId === usuario.id ? (
              <BtnEditarUsuario
                usuario={usuario}
                aoSalvar={salvarUsuario}
                onCancel={() => setEditandoUsuarioId(null)}
              />
            ) : (
              <>
                <p className="dados-usuario">Nome: {usuario.name}</p>
                <p className="dados-usuario">E-mail: {usuario.email}</p>
                <p className="dados-usuario">Cargo: {usuario.role}</p>
                <button
                  className="btn-lista-usuarios"
                  onClick={() => btnEditandoUsuario(usuario.id)}
                >
                  Editar
                </button>
                <BtnDeletarUsuario
                  usuario={usuario}
                  onDelete={() => onDeleteUsuario(usuario.id)}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}