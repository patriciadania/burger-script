import React from 'react';
import { Link } from 'react-router-dom';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import Botao from '../../componentes/Botao/Botao';
import { atualizarStatusPedido } from '../../API/Pedidos';

export default function AgrProducao() {
  const concluirPedido = async (pedido) => {
    try {
      await atualizarStatusPedido(pedido.id, 'pronto para entrega');
      alert('Pedido concluído com sucesso!');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao concluir pedido:', error);
    }
  };

  return (
    <section className="telaFazerPedido">
      <nav className="botaoSair">
        <Link to="/cozinha" className="botaoSair">
          Voltar
        </Link>
      </nav>
      <MenuNavegacao texto="aguardando produção" imagemSrc="preparando-pedido.png" />
      <ListaPedidos
        status="pendente"
        props={'Data de envio'}
        btnStatus={(pedido) => (
          <Botao onClick={() => concluirPedido(pedido)}>concluído</Botao>
        )}
      />
    </section>
  );
}
