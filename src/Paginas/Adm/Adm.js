
import { Link } from 'react-router-dom';
import Header from '../../componentes/Header/Header';
import MenuNagevacao from '../../componentes/MenuNagegacao/MenuNavegacao';
import Footer from '../../componentes/Footer/Footer';

export default function Administracao() {
  return (
    <>
      <Header
        msgBoasVindas='Olá, você está na seção de admnistração'
      />
      <section className='telaAtendimento'>
        <nav className='botaoSair'>
          <Link to='/' className='botaoSair'>Sair</Link>
        </nav>
        <MenuNagevacao
          to='/colaboradores'
          texto='colaboradores'
          imagemSrc='colaboradores.png'
        />
        <MenuNagevacao
          to='/produtos'
          texto='produtos'
          imagemSrc='lista-de-produtos.png'
        />
      </section>
      <Footer 
      imagemSrc='../imagens/img-footer/2.png'
      imagemAlt='Banner administração'
      />
    </>
  );
}
