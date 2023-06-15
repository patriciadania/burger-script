import React, { useState, useEffect } from 'react';
import { obterProdutos, deletarProduto, editarProduto } from '../../../API/Produtos';
import './Produto.css';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeletarProduto from '../../../componentes/DeletarEditarProduto/DeletarProduto';
import Modal from 'react-modal';

const ListaDeProdutos = (props) => {
  const { tipoProduto } = props;
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [nomeEditado, setNomeEditado] = useState('');
  const [precoEditado, setPrecoEditado] = useState('');
  const [quantidadeEditada, setQuantidadeEditada] = useState('');

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const produtosData = await obterProdutos();
        setProdutos(produtosData);
      } catch (error) {
        console.error(error);
      }
    };
    buscarProdutos();
  }, []);

  const onDelete = async (id) => {
    try {
      await deletarProduto(id);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar Produto:", error);
    }
  };

  const abrirModalEdicao = (produto) => {
    setProdutoSelecionado(produto);
    setNomeEditado(produto.name);
    setPrecoEditado(produto.price);
    setQuantidadeEditada(produto.qty);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setProdutoSelecionado(null);
    setNomeEditado('');
    setPrecoEditado('');
    setQuantidadeEditada('');
    setModalAberto(false);
  };

  const onEdit = async (id) => {
    try {
      await editarProduto(id, nomeEditado, precoEditado, quantidadeEditada);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao editar Produto:", error);
    }
    fecharModal();
  };

  return (
    <div className='tabela-produtos'>
      <h1 className='titulo-tabela-produtos'>Lista de Produtos</h1>
      <dl className='tabela-produtos-admin'>
        <div className='tabela-produtos-cabecalho'>
          <dt className='tabela-produtos-id'>ID</dt>
          <dt className='tabela-produtos-esquerda'>Nome do Produto</dt>
          <dt className='tabela-produtos-direita'>Valor</dt>
          <dt className='tabela-produtos-direita'>Quantidade</dt>
          <dt>Ações</dt>
        </div>

        {produtos
          .filter((produto) => (!tipoProduto || produto.type === tipoProduto))
          .map((produto) => (
            <dd key={produto.id} className='tabela-produtos-itens'>
              <span className='tabela-produtos-id'>{produto.id}</span>
              <span className='tabela-produtos-esquerda'>{produto.name}</span>
              <span className='tabela-produtos-direita'>R$ {produto.price}</span>
              <span>{produto.qty}</span>
              <span className='icone-deletar-editar'>
                <EditTwoToneIcon className='icone-editar' onClick={() => abrirModalEdicao(produto)} />
                <DeletarProduto className='icone-deletar'produto={produto} onDelete={() => onDelete(produto.id)} />
              </span>
            </dd>
          ))}
      </dl>

      <Modal isOpen={modalAberto} onRequestClose={fecharModal} className="modal">
        {produtoSelecionado && (
          <div>
            <h2>Editar Produto</h2>
            <form>
              <label>
                Nome:
                <input type="text" value={nomeEditado} onChange={(e) => setNomeEditado(e.target.value)} />
              </label>
              <label>
                Preço:
                <input type="text" value={precoEditado} onChange={(e) => setPrecoEditado(e.target.value)} />
              </label>
              <label>
                Quantidade:
                <input type="text" value={quantidadeEditada} onChange={(e) => setQuantidadeEditada(e.target.value)} />
              </label>
              <div className="modal-buttons">
                <button className="edita-produto" onClick={() => onEdit(produtoSelecionado.id)}>Salvar</button>
                <button className="deletar-produto" onClick={fecharModal}>Cancelar</button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ListaDeProdutos;
