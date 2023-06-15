import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import Botao from '../../componentes/Botao/Botao';
import { atualizarStatusPedido } from '../../API/Pedidos';
import Modal from 'react-modal';
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

export default function PedidosProntos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const enviarPedido = async (pedido) => {
    try {
      await atualizarStatusPedido(pedido.id, 'enviado');
      setModalIsOpen(true);
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
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
      <MenuNavegacao texto="pronto para servir" imagemSrc="pronto-para-servir.png" />
      <ListaPedidos
        status="pronto para entrega"
        props={'Processamento'}
        btnStatus={(pedido) => (
          <Botao onClick={() => enviarPedido(pedido)}>enviar</Botao>
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
