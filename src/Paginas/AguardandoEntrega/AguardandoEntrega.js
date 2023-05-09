import Botao from '../../componentes/Botao/Botao'
import './AguardandoEntrega.css'
import { Link } from 'react-router-dom'

export default function AguardandoEntrega() {
    return (

        <section className='telaAguardandoEntrega'>
            <nav className='botaoVoltar'>
                <ul>
                    <li>
                     <Link to='/atendimento'>Voltar</Link>
                    </li>
                </ul>
            </nav>
            <span className='aguardandoEntrega'>
                aguardando entrega 
             <img src="../imagens/icones/relogio.png" alt="Icone de relogio" className="icones"/>
             </span>  
                   {/* <FormularioPedido/> */}
             </section>
          
        
)};