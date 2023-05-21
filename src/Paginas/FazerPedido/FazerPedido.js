import Cardapio from '../../componentes/Cardapio/Cardapio'
import ResumoPedido from '../../componentes/ResumoPedido/ResumoPedido'
import { useState } from 'react'
import './FazerPedido.css'
import { Link } from 'react-router-dom'

const FazerPedido = () => {
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  
    const handleProdutoSelecionado = (produto) => {
      setProdutosSelecionados([...produtosSelecionados, produto]);
    };
  
    return (
        <section className='telaFazerPedido'>
            <nav className='botaoSair'>
                <Link to='/atendimento' className='botaoSair'>Voltar</Link>
            </nav>
            <span className='fazerPedido'>Fazer um novo pedido<img src="../imagens/icones/hamburger.png" alt="Icone de hamburger" className="icones" /></span>
      <div className='fazer-pedido'>
       
        <Cardapio handleProdutoSelecionado={handleProdutoSelecionado} />
        <ResumoPedido produtosSelecionados={produtosSelecionados} />
      </div>
      </section>
    );
  };
  
  export default FazerPedido;