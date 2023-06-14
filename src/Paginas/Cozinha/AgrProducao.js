import React from 'react';
import { Link } from 'react-router-dom';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import Botao from '../../componentes/Botao/Botao';
import { atualizarStatusPedido } from '../../API/Pedidos';
import Modal from 'react-modal';
import { useState } from 'react';
import TokenExpiracao from '../../Autenticação/Auth';

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
  },
};

Modal.setAppElement('#root');

export default function AgrProducao() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const concluirPedido = async (pedido) => {
    try {
      await atualizarStatusPedido(pedido.id, 'pronto para entrega');
      setModalIsOpen(true);
  
    } catch (error) {
      console.error('Erro ao concluir pedido:', error);
    }
  };
  const closeModal = () => {
    setModalIsOpen(false);
    window.location.reload();
  };
  return (
    <section className="telaFazerPedido">
      <nav className="botaoSair">
        <Link to="/cozinha" className="botaoSair">
          Voltar
        </Link>
      </nav>
      <TokenExpiracao />
      <MenuNavegacao texto="aguardando produção" imagemSrc="preparando-pedido.png" />
      <ListaPedidos
        status="pendente"
        props={'Data de envio'}
        btnStatus={(pedido) => (
          <Botao onClick={() => concluirPedido(pedido)}>concluído</Botao>
        )}
      />
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pedido Entregue"
        style={customStyles} 
      >
        <h2>Pedido enviado com sucesso!</h2>
        <Botao onClick={closeModal}>Fechar</Botao>
      </Modal>
    </section>
  );
}
