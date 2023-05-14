import React from "react";

export default function BtnDeletarUsuario({ usuario, onDelete }) {
  const executarDelecaoUsuario = async () => {
    try {
      await onDelete(usuario.id);
      console.log("Usuário deletado com sucesso");
      // Atualizar a lista de usuários após a exclusão, se necessário
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  return (
    <button className="btn-lista-usuarios" onClick={executarDelecaoUsuario}>
      Deletar
    </button>
  );
}
