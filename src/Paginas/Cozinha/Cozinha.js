import { Link } from "react-router-dom";
import Header from "../../componentes/Header/Header";
import MenuNavegacao from "../../componentes/MenuNavegacao/MenuNavegacao";
import Footer from "../../componentes/Footer/Footer";
import obterNomeUsuario from "../../API/Usuarios";


export default function Cozinha() {
  const nomeUsuario = obterNomeUsuario();
  return (
    <>
      <Header
         msgBoasVindas={`Olá, ${nomeUsuario}`} />
      <section className='telaAtendimento'>
        <nav className='botaoSair'>
          <Link to='/' className='botaoSair'>Sair</Link>
        </nav>
        <MenuNavegacao
          to='/aguardandoproducao'
          texto='aguardando produção'
          imagemSrc='preparando-pedido.png'
        />

        <MenuNavegacao
          to='/pedidosprontos'
          texto='pronto para servir'
          imagemSrc='pronto-para-servir.png'
        />

      </section>
      <Footer 
    imagemSrc='../imagens/img-footer/3.png'
    imagemAlt='Banner cozinha'
    />
    </>
  );
}
