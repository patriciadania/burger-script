//import Botao from '../../componentes/Botao/Botao'
//import FormularioPedido from '../componentes/ResumoPedido/ResumoPedido'

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
            {/* <FormularioPedido/>  */}
        </section>


    )
};