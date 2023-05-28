import './PedidosEntregues.css'
import { Link } from "react-router-dom";
import ListaPedidos from '../../componentes/Pedidos/Pedidos';
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao';

export default function PedidosEntregues() {
    return (
        <section className='telaPedidosEntregues'>
            <nav>
                        <Link to='/atendimento' className='botaoVoltar'>Voltar</Link>
            </nav>
            <MenuNavegacao
      to='/pedidosentregues'
      texto='pedidos entregues'
      imagemSrc='pedido-entregue.png'
      />
        <ListaPedidos />
            <nav>
                        <Link to='/' className='botaoEnviar'>ENTREGUE</Link>
            </nav>
    </section>
        )


}


