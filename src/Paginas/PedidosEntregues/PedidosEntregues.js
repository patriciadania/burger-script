import './PedidosEntregues.css'
import { Link } from "react-router-dom";
import ResumoPedido from '../../componentes/ResumoPedido/ResumoPedido';

export default function PedidosEntregues() {
    return (
        <section className='telaPedidosEntregues'>
            <nav>
                        <Link to='/atendimento' className='botaoVoltar'>Voltar</Link>
            </nav>
        <span className='pedidosEntregues'>pedidos entregues <img src="../imagens/icones/check.png" alt="Icone de entregue" className="icones"/></span>
        <ResumoPedido/>
            <nav>
                        <Link to='/' className='botaoEnviar'>ENTREGUE</Link>
            </nav>
    </section>
        )


}