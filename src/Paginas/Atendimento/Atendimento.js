
import { Link } from 'react-router-dom';

import './Atendimento.css'
import MenuNagevacao from '../../componentes/MenuNagegacao/MenuNavegacao';
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';

export default function Atendimento() {
  return (
    <>
    <Header
    msgBoasVindas='Olá, você está na seção de atendimento' />
    <section className='telaAtendimento'>
      <nav className='botaoSair'>
        <Link to='/' className='botaoSair'>Sair</Link>
      </nav>


      <MenuNagevacao
        to='/fazerpedido'
        texto='registrar pedido'
        imagemSrc='fazer-pedido.png'
      />
      <MenuNagevacao
        to='/aguardandoentrega'
        texto='aguardando entrega'
        imagemSrc='relogio.png'
      />
      <MenuNagevacao
      to='/pedidosentregues'
      texto='pedidos entregues'
      imagemSrc='pedido-entregue.png'
      />
      
    </section>
    <Footer 
    imagemSrc='../imagens/img-footer/3.png'
    imagemAlt='Banner atendimento'
    />
    </>
    

  );
}
