import ListaPedidos from "../../componentes/Pedidos/Pedidos";
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';
import { Link } from "react-router-dom";
import Botao from "../../componentes/Botao/Botao";

export default function PedidosProntos() {
    return (
        <section className='telaFazerPedido'>
            <nav className='botaoSair'>
                <Link to='/cozinha' className='botaoSair'>Voltar</Link>
            </nav>
            <MenuNavegacao
                texto='pronto para servir'
                imagemSrc='pronto-para-servir.png'
            />
            <ListaPedidos status="pronto para entrega"
                props={'Processamento'}
                btnStatus={
                    <Botao>
                        enviar
                    </Botao>
                }
            />
        </section>
    )

}