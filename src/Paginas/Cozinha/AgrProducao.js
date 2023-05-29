import ListaPedidos from "../../componentes/Pedidos/Pedidos";
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import { Link } from "react-router-dom";
import Botao from "../../componentes/Botao/Botao";

export default function AgrProducao() {
    return (
        <section className='telaFazerPedido'>
            <nav className='botaoSair'>
                        <Link to='/cozinha' className='botaoSair'>Voltar</Link>
            </nav>
            <MenuNavegacao
     texto='aguardando produção'
     imagemSrc='preparando-pedido.png'
      />
        <ListaPedidos status="pendente"
        props={'Data de envio'}
         btnStatus={
            <Botao>
              concluído
            </Botao>
          }
        />
    </section>
        )

}