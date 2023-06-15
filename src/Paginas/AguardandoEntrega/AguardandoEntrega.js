import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import { atualizarStatusPedido } from '../../API/Pedidos';
import Botao from '../../componentes/Botao/Botao';
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
    WebkitOverflowScrolling: 'touch',
  },
};


export default function AguardandoEntrega() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const closeModal = () => {
    setModalIsOpen(false);
    window.location.reload();
  };


  const marcarComoEntregue = async (pedido) => {
    try {
      await atualizarStatusPedido(pedido.id, 'pedido entregue');
      setModalIsOpen(true);
      setModalMessage('Pedido entregue!');
    } catch (error) {
      console.error('Erro ao marcar pedido como entregue:', error);
    }
  };

 
  return (
    <section className="telaFazerPedido">
      <nav className="botaoSair">
        <Link to="/atendimento" className="botaoSair">
          Voltar
        </Link>
      </nav>
      <TokenExpiracao />
      <MenuNavegacao texto="aguardando entrega" imagemSrc="relogio.png" />
      <ListaPedidos
        status="pronto para entrega"
        props={'Data de envio'}
        btnStatus={(pedido) => (
          <Botao onClick={() => marcarComoEntregue(pedido)}>concluído</Botao>
        )}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles} 
      >
         <h2 className="msg-modal">{modalMessage}</h2>
        <Botao onClick={closeModal}>Fechar</Botao>
      </Modal>
    </section>
  );
}
