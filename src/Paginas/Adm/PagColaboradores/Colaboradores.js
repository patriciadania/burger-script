
import './Colaboradores.css'
import { Link } from 'react-router-dom'
import MenuNagevacao from '../../../componentes/MenuNagegacao/MenuNavegacao'

export default function Colaboradores() {
    return (
        <section className='telaFazerPedido'>
            <nav className='botaoSair'>
                <Link to='/administracao' className='botaoSair'>Voltar</Link>
            </nav>
            <MenuNagevacao
                to='/addcolaborador'
                texto='adicionar colaborador'
                imagemSrc='adicionar-colaborador.png'
            />

            <MenuNagevacao
                to='/listacolaboradores'
                texto='listar colaboradores'
                imagemSrc='lista.png'
            />
        </section>


    )
}

