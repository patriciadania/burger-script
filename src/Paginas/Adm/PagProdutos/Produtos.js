import FormularioProdutos from "../../../componentes/Formulario/FormularioProdutos";
import { Link } from "react-router-dom";
import ListaDeProdutos from "./ListaDeProdutos";
import MenuNavegacao from "../../../componentes/MenuNavegacao/MenuNavegacao";
import TokenExpiracao from "../../../Autenticação/Auth";

export default function Produtos() {
    return (
        <section className='telaFazerPedido'>
            <nav className='botaoSair'>
                <Link to='/administracao' className='botaoSair'>Voltar</Link>
            </nav>
            <TokenExpiracao />
            <MenuNavegacao
                texto='produtos'
                imagemSrc='lista-de-produtos.png'
            />
            <FormularioProdutos />
            <ListaDeProdutos />

        </section>
    )
}