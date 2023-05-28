import { Link } from "react-router-dom";
import Header from "../../componentes/Header/Header";
import MenuNagevacao from "../../componentes/MenuNagegacao/MenuNavegacao";
import Footer from "../../componentes/Footer/Footer";


export default function Cozinha() {
  return (
    <>
      <Header
        msgBoasVindas='Olá, você está na seção da cozinha' />
      <section className='telaAtendimento'>
        <nav className='botaoSair'>
          <Link to='/' className='botaoSair'>Sair</Link>
        </nav>
        <MenuNagevacao
          to='/'
          texto='aguardando produção'
          imagemSrc='preparando-pedido.png'
        />

        <MenuNagevacao
          to='/'
          texto='pronto para servir'
          imagemSrc='pronto-para-servir.png'
        />

        <MenuNagevacao
          to='/PedidosEntregues'
          texto='lista de pedidos'
          imagemSrc='lista.png'
        />

      </section>
      <Footer 
    imagemSrc='../imagens/img-footer/4.png'
    imagemAlt='Banner cozinha'
    />
    </>
  );
}
