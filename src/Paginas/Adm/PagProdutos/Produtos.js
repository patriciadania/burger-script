import FormularioProdutos from "../../../componentes/Formulario/FormularioProdutos";
import { Link } from "react-router-dom";
import ListaDeProdutos from "./ListaDeProdutos";

export default function Produtos(){
    return(
        <section className='telaFazerPedido'>
            <nav className='botaoSair'>
                <Link to='/administracao' className='botaoSair'>Voltar</Link>
            </nav>
            <FormularioProdutos />
            <ListaDeProdutos />
       
        </section>
    )
}