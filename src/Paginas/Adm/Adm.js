
import { Link } from 'react-router-dom';
import Header from '../../componentes/Header/Header';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import Footer from '../../componentes/Footer/Footer';

export default function Administracao() {
  return (
    <>
      <Header
        msgBoasVindas='Olá, você está na seção de administração'
      />
      <section className='telaAtendimento'>
        <nav className='botaoSair'>
          <Link to='/' className='botaoSair'>Sair</Link>
        </nav>
        <MenuNavegacao
          to='/colaboradores'
          texto='colaboradores'
          imagemSrc='colaboradores.png'
        />
        <MenuNavegacao
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
