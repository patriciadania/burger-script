import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obterPedidos} from '../../API/Pedidos';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import './AguardandoEntrega.css';

const AguardandoEntrega = () => {
  const [cliente, ] = useState('');
  const [mesa, ] = useState('');
  const [produtos, ] = useState([]);
  const [pedidos, ] = useState([]);

  useEffect(() => {
    // Coloque aqui a lógica para obter os pedidos
  }, []);

  const handleEnviar = async () => {
    try {
      const produtosDoPedido = produtos.map((produto) => ({
        product: produto,
        qty: produto.quantidade,
      }));

      const pedidoEnviado = await obterPedidos(cliente, mesa, produtosDoPedido);
      console.log('Pedido enviado:', pedidoEnviado);
    } catch (error) {
      console.error(error);
    
    }
  };

  return (
    <section className='telaAguardandoEntrega'>
      <nav>
        <Link to='/atendimento' className='botaoVoltar'>
          Voltar
        </Link>
      </nav>

      <span className='aguardandoEntrega'>
        aguardando entrega
        <img src="../imagens/icones/relogio.png" alt="Icone de relogio" className="icones" />
      </span>
      <ListaPedidos pedidos={pedidos} />

      <nav>
        <button className='botaoEnviar' onClick={handleEnviar}>
          ENTREGAR
        </button>
      </nav>
    </section>
  );
};

export default AguardandoEntrega;
