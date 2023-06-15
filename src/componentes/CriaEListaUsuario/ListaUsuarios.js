import { useEffect, useState } from "react";
import './ListaUsuarios.css'
import { Link } from "react-router-dom";
import { listarUsuarios, editarUsuario, deletarUsuario } from "../../API/Usuarios";
import BtnEditarUsuario from "../EditarDeletarUsuario/BtnEditarUsuario";
import BtnDeletarUsuario from "../EditarDeletarUsuario/BtnDeletarUsuario";
import MenuNavegacao from "../MenuNavegacao/MenuNavegacao";
import Modal from 'react-modal';
import TokenExpiracao from "../../Autenticação/Auth";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
    WebkitOverflowScrolling: 'touch',
  },
};

export default function ListaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoUsuarioId, setEditandoUsuarioId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [deletarUsuarioId, setDeletarUsuarioId] = useState(null);

  const closeModal = () => {
    setModalIsOpen(false);
    window.location.reload();
  };

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
      setModalIsOpen(true);
      setModalMessage("Dados alterados com sucesso");
      setEditandoUsuarioId(null);
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
    }
  };

  const confirmDelete = (usuarioId) => {
    setDeletarUsuarioId(usuarioId);
    setModalIsOpen(true);
  };

  const deletarUsuarioConfirmado = async () => {
    try {
      await deletarUsuario(deletarUsuarioId);
      setModalMessage("Usuário deletado com sucesso");
      closeModal();
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
      <TokenExpiracao />
      <MenuNavegacao
        texto='listar colaboradores'
        imagemSrc='lista.png'
      />
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
                  onDelete={() => confirmDelete(usuario.id)}
                />
              </>
            )}
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="msg-modal">{modalMessage}</h2>
        {deletarUsuarioId && (
          <div>
            <p>Deseja realmente deletar o usuário?</p>
            <button className="modal-btn" onClick={deletarUsuarioConfirmado}>
              Deletar
            </button>
            <button className="modal-btn" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        )}
        {!deletarUsuarioId && (
          <button className="modal-btn" onClick={closeModal}>
            Fechar
          </button>
        )}
      </Modal>
    </div>
  );
}
