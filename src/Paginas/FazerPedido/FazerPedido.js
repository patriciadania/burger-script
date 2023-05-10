import Cardapio from '../../componentes/Cardapio/Cardapio'
import './FazerPedido.css'
import { Link } from 'react-router-dom'
export default function FazerPedido() {
    return (
        <section className='telaFazerPedido'>

            <nav>

                <Link to='/atendimento' className='botaoVoltar'>Voltar</Link>

            </nav>

            <span className='resumoDoPedido'>Resumo do Pedido<img src="../imagens/icones/hamburger.png" alt="Icone de hamburger" className="icones" /></span>

           
            <Cardapio />


        </section>

    )
}