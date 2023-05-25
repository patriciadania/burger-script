import { Link } from 'react-router-dom';

import './Atendimento.css'

export default function Atendimento() {
  return (
    <section className='telaAtendimento'>
     <nav className='botaoSair'>
     <Link to='/' className='botaoSair'>Sair</Link>
</nav>

      <h2 className='msgBoasVindas'>olá,</h2>
      <span className='fazerPedido'>
        <Link to='/fazerpedido' className='link'> 
      fazer um novo pedido
       <img src="../imagens/icones/hamburger.png" alt="Icone de hamburger" className="icones"/> 
      </Link>
      </span>
      <span className='fazerPedido'>
        <Link to='/aguardandoentrega' className='link'>
          aguardando entrega 
          <img src="../imagens/icones/relogio.png" alt="Icone de relogio" className="icones"/>
          </Link> 
          </span>
      <span className='fazerPedido'>
      <Link to='/pedidosentregues' className='link'>
        pedidos entregues 
        <img src="../imagens/icones/check.png" alt="Icone de entregue" className="icones"/>
    </Link>
    </span>
    </section>

  );
}
