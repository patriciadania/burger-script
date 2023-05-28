
import './Colaboradores.css'
import { Link } from 'react-router-dom'
import MenuNavegacao from '../../../componentes/MenuNavegacao/MenuNavegacao'

export default function Colaboradores() {
    return (
        <section className='telaFazerPedido'>
            <nav className='botaoSair'>
                <Link to='/administracao' className='botaoSair'>Voltar</Link>
            </nav>
            <MenuNavegacao
                to='/addcolaborador'
                texto='adicionar colaborador'
                imagemSrc='adicionar-colaborador.png'
            />

            <MenuNavegacao
                to='/listacolaboradores'
                texto='listar colaboradores'
                imagemSrc='lista.png'
            />
        </section>


    )
}

