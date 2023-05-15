

import ListaPedidos from '../../componentes/Pedidos/Pedidos'
import './AguardandoEntrega.css'
import { Link } from 'react-router-dom'

export default function AguardandoEntrega() {
    return (

        <section className='telaAguardandoEntrega'>
            <nav>
                        <Link to='/atendimento' className='botaoVoltar'>Voltar</Link>
            </nav>

            <span className='aguardandoEntrega'>
                aguardando entrega
                <img src="../imagens/icones/relogio.png" alt="Icone de relogio" className="icones" />
            </span>
            <ListaPedidos />
            <nav>
                        <Link to='/' className='botaoEnviar'>ENTREGAR</Link>
            </nav>
        </section>


    )
};