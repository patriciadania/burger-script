import React from 'react';
import { Link } from 'react-router-dom';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import TokenExpiracao from '../../Autenticação/Auth';

export default function PedidosEntregues() {
 
  return (
    <section className="telaFazerPedido">
      <nav className="botaoSair">
        <Link to="/atendimento" className="botaoSair">
          Voltar
        </Link>
      </nav>
      <TokenExpiracao />
      <MenuNavegacao
        to="/pedidosentregues"
        texto="pedidos entregues"
        imagemSrc="pedido-entregue.png"
      />
      <ListaPedidos
        status="pedido entregue"
        props={'Data de entrega'}
        btnStatus={(pedido) => (
          <button style={{ cursor: 'default', color: 'black' }} disabled>
          <strong>PEDIDO ENTREGUE</strong>
        </button>
        )}
      />
      
    </section>
  );
}
