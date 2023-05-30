import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import { atualizarStatusPedido, obterPedidos } from '../../API/Pedidos';
import Botao from '../../componentes/Botao/Botao';

export default function AguardandoEntrega() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    carregarPedidos();
  }, []);

  const carregarPedidos = async () => {
    try {
      const pedidos = await obterPedidos();
      const pedidosProntoParaEntrega = pedidos.filter(
        (pedido) => pedido.status === 'pronto para entrega'
      );
      setPedidos(pedidosProntoParaEntrega);
    } catch (error) {
      console.error(error);
    }
  };

  const marcarComoEntregue = async (pedido) => {
    try {
      await atualizarStatusPedido(pedido.id, 'entregue');
      alert('Pedido entregue com sucesso!');
      window.location.reload();
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
      <MenuNavegacao texto="aguardando entrega" imagemSrc="relogio.png" />
      <ListaPedidos
        status="pronto para entrega"
        props={'Data de envio'}
        btnStatus={(pedido) => (
          <Botao onClick={() =>marcarComoEntregue(pedido)}>concluído</Botao>
        )}
      />
    </section>
  );
}
