import React, { useState, useContext } from 'react';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import { editarDadosProduto } from '../../API/Produtos';
import './Style.css';
import { ModalContext } from '../../contextos/ModalContext';

function BtnEditarProduto({ produto, onEditar }) {
  const {
    modalAberto,
    setModalAberto,
    modalMessage,
    setModalMessage,
    fecharModal,
  } = useContext(ModalContext);

  const [editando, setEditando] = useState(false);
  const [novoDado, setNovoDado] = useState({ ...produto });

  const clickEditar = () => {
    setEditando(true);
  };

  const lidarComMudanca = (event) => {
    const { name, value } = event.target;
    setNovoDado((prevDados) => ({ ...prevDados, [name]: value }));
  };

  const handleSalvar = async () => {
    try {
      await editarDadosProduto(produto.id, novoDado);
      onEditar(produto.id, novoDado); // Passando o ID e o objeto novoDado
      setEditando(false);
      setModalAberto(true);
      setModalMessage('Alterações salvas com sucesso!');
    } catch (error) {
      console.error('Erro ao editar Produto:', error);
    }
  };

  return (
    <div>
      {editando ? (
        <>
          <section className="secao-editar-produto">
            <input type="text" name="id" value={novoDado.id} disabled />
            <input
              type="text"
              name="name"
              value={novoDado.name}
              onChange={lidarComMudanca}
            />
            <input
              type="text"
              name="price"
              value={novoDado.price}
              onChange={lidarComMudanca}
            />
            <input
              type="text"
              name="qty"
              value={novoDado.qty}
              onChange={lidarComMudanca}
            />
            <button className="btn-salva-edicao" onClick={handleSalvar}>
              Salvar
            </button>
          </section>
        </>
      ) : (
        <button className="btn-deletar-produto" onClick={clickEditar}>
          <ModeEditTwoToneIcon />
        </button>
      )}

      {modalAberto && (
        <div className="modal">
          <h2 className="msg-modal">{modalMessage}</h2>
          <button onClick={fecharModal}>OK</button>
        </div>
      )}
    </div>
  );
}

export default BtnEditarProduto;