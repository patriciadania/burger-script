import React from 'react';
import { Link } from 'react-router-dom';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import Botao from '../../componentes/Botao/Botao';
import { atualizarStatusPedido } from '../../API/Pedidos';

export default function PedidosProntos() {
  const enviarPedido = async (pedido) => {
    try {
      await atualizarStatusPedido(pedido.id, 'enviado');
      alert('Pedido enviado com sucesso!');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
    }
  };

  return (
    <section className="telaFazerPedido">
      <nav className="botaoSair">
        <Link to="/cozinha" className="botaoSair">
          Voltar
        </Link>
      </nav>
      <MenuNavegacao texto="pronto para servir" imagemSrc="pronto-para-servir.png" />
      <ListaPedidos
        status="pronto para entrega"
        props={'Processamento'}
        btnStatus={(pedido) => (
          <Botao onClick={() => enviarPedido(pedido)}>enviar</Botao>
        )}
      />
    </section>
  );
}
