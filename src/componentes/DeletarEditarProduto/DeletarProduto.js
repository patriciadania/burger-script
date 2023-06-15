import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal';
import './Style.css';

export default function DeletarProduto({ produto, onDelete }) {
  const [modalOpen, setModalOpen] = useState(false);

  const abrirModal = () => {
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  const executarDelecaoProduto = async () => {
    console.log(executarDelecaoProduto)
    try {
      await onDelete(produto.id);
      alert("Produto deletado com sucesso");
      abrirModal();
    } catch (error) {
      console.error("Erro ao deletar produto", error);
    }
  };

  return (
    <>
      <button className="deletar-btn" onClick={abrirModal}>
        <DeleteIcon />
      </button>

      <Modal
        isOpen={modalOpen}
        onRequestClose={fecharModal}
        className="modal"
      
      >
        <h2>Você tem certeza que deseja excluir o produto?</h2>
        <div className="modal-buttons">
          <button onClick={executarDelecaoProduto}>Sim</button>
          <button onClick={fecharModal}>Não</button>
        </div>
      </Modal>
    </>
  );
}