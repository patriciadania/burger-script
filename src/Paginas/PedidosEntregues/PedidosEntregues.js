import './PedidosEntregues.css'
import { Link } from "react-router-dom";

export default function PedidosEntregues() {
    return (
        <section className='telaPedidosEntregues'>
            <nav>
                        <Link to='/atendimento' className='botaoVoltar'>Voltar</Link>
            </nav>
        <span className='pedidosEntregues'>pedidos entregues <img src="../imagens/icones/check.png" alt="Icone de entregue" className="icones"/></span>
    </section>
        )


}