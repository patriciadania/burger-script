
import './Colaboradores.css'
import { Link } from 'react-router-dom'
export default function Colaboradores() {
    return (
        <section className='telaFazerPedido'>
            <nav className='botaoSair'>
                <Link to='/administracao' className='botaoSair'>Voltar</Link>
            </nav>
            <span className='fazerPedido'>
                colaboradores
                <img src="../imagens/icones/colaboradores.png" alt="Icone de colaboradores" className="icones" />
            </span>

            <span className='fazerPedido'>
                <Link to='/addcolaborador' className="link">
                    adicionar colaborador
                </Link>
            </span>

            <span className='fazerPedido'>
                <Link to='/listacolaboradores' className="link">
                    listar colaboradores
                </Link>
            </span>

        </section>


    )
}

