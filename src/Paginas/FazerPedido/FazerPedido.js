import Cardapio from '../../componentes/Cardapio/Cardapio'
import './FazerPedido.css'
import { Link } from 'react-router-dom'
export default function FazerPedido() {
    return (
        <section className='telaFazerPedido'>
            <nav>
                <Link to='/atendimento' className='botaoVoltar'>Voltar</Link>
            </nav>
            <span className='resumoDoPedido'>Fazer um novo pedido<img src="../imagens/icones/hamburger.png" alt="Icone de hamburger" className="icones" /></span>
            <div style={{width: '50%', margin: '0'}}>
  <Cardapio />
</div>
        </section>
 

    )
}