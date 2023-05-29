import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obterPedidos } from '../../API/Pedidos';
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import './AguardandoEntrega.css';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import Botao from '../../componentes/Botao/Botao';

// const AguardandoEntrega = () => {
//   const [cliente, ] = useState('');
//   const [mesa, ] = useState('');
//   const [produtos, ] = useState([]);
//   const [pedidos, ] = useState([]);

//   useEffect(() => {
//     // Coloque aqui a lógica para obter os pedidos
//   }, []);

//   const handleEnviar = async () => {
//     try {
//       const produtosDoPedido = produtos.map((produto) => ({
//         product: produto,
//         qty: produto.quantidade,
//       }));

//       const pedidoEnviado = await obterPedidos(cliente, mesa, produtosDoPedido);
//       console.log('Pedido enviado:', pedidoEnviado);
//     } catch (error) {
//       console.error(error);

//     }
//   };

//   return (
//     <section className='telaAguardandoEntrega'>
//       <nav>
//         <Link to='/atendimento' className='botaoVoltar'>
//           Voltar
//         </Link>
//       </nav>

//       <MenuNavegacao
//           texto='aguardando produção'
//           imagemSrc='preparando-pedido.png'
//         />
//       <ListaPedidos pedidos={pedidos} />

//       <nav>
//         <button className='botaoEnviar' onClick={handleEnviar}>
//           ENTREGAR
//         </button>
//       </nav>
//     </section>
//   );
// };

// export default AguardandoEntrega;



const AguardandoEntrega = () => {
  const [cliente,] = useState('');
  const [mesa,] = useState('');
  const [produtos,] = useState([]);
  //const [pedidos, ] = useState([]);

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
    <section className='telaFazerPedido'>
      <nav className='botaoSair'>
        <Link to='/atendimento' className='botaoSair'>
          Voltar
        </Link>
      </nav>

      <MenuNavegacao
        texto='aguardando entrega'
        imagemSrc='relogio.png'
      />
      <ListaPedidos status="pronto para entrega"
      props={'Data de envio'}
        btnStatus={
          <Botao onClick={handleEnviar} >
            enviar
          </Botao>
        }
      />

    </section>

  );

};

export default AguardandoEntrega;