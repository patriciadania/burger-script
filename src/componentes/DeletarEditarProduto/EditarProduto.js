import React, { useState } from 'react';
import Modal from 'react-modal';
import EditIcon from '@mui/icons-material/Edit';


const EditarProduto = ({ produto, onEdit }) => {
  const [nome, setNome] = useState(produto.nome);
  const [valor, setValor] = useState(produto.valor);
  const [quantidade, setQuantidade] = useState(produto.quantidade);
  const [modalAberto, setModalAberto] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  const handleEditarProduto = () => {
    const produtoEditado = {
      ...produto,
      nome: nome,
      valor: valor,
      quantidade: quantidade
    };
    onEdit(produtoEditado);
    fecharModal();
  };

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div className="editar-deletar-produto">

    <button className="editar-btn" onClick={abrirModal}>
      <EditIcon />
    </button>

   
      <button onClick={abrirModal}className='editar-btn' >Editar</button>
      <Modal isOpen={modalAberto} onRequestClose={fecharModal} className='modal'>
        <h2>Editar Produto</h2>
        <form >
          <label>
            Nome:
            <input type="text" value={nome}  onChange={handleNomeChange} />
          </label>
          <label>
            Valor:
            <input type="number" value={valor}onChange={handleValorChange} />
          </label>
          <label>
            Quantidade:
            <input type="number" value={quantidade}  onChange={handleQuantidadeChange} />
          </label>
          <button onClick={handleEditarProduto}>Salvar</button>
          <button onClick={fecharModal}>Cancelar</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditarProduto;
