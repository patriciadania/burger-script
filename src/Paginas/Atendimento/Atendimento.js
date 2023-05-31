import { Link } from 'react-router-dom';
import './Atendimento.css'
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';
import obterNomeUsuario from '../../API/Usuarios';

export default function Atendimento() {
  const nomeUsuario = obterNomeUsuario();
  console.log(nomeUsuario)
  return (
    <>
    <Header
    msgBoasVindas={`Olá, ${nomeUsuario}`} />
    <section className='telaAtendimento'>
      <nav className='botaoSair'>
        <Link to='/' className='botaoSair'>Sair</Link>
      </nav>
      <MenuNavegacao
        to='/fazerpedido'
        texto='registrar pedido'
        imagemSrc='fazer-pedido.png'
      />
      <MenuNavegacao
        to='/aguardandoentrega'
        texto='aguardando entrega'
        imagemSrc='relogio.png'
      />
      <MenuNavegacao
      to='/pedidosentregues'
      texto='pedidos entregues'
      imagemSrc='pedido-entregue.png'
      />
      
    </section>
    <Footer 
    imagemSrc='../imagens/img-footer/1.png'
    imagemAlt='Banner atendimento'
    />
    </>
    

  );
}
