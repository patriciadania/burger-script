import Cardapio from '../../componentes/Cardapio/Cardapio'
import ResumoPedido from '../../componentes/ResumoPedido/ResumoPedido'
import { useState } from 'react'
import './FazerPedido.css'
import { Link } from 'react-router-dom'

const FazerPedido = () => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  const handleProdutoSelecionado = (produto) => {
    const produtoSelecionado = produtosSelecionados.find(produtoSelecionado => produtoSelecionado.id === produto.id);
    console.log(produtoSelecionado)
    if (produtoSelecionado) {
      produtoSelecionado.quantity++;
      produtoSelecionado.total = produtoSelecionado.quantity * produtoSelecionado.price;
    } else {
      produto.total = produto.quantity * produto.price;
      produtosSelecionados.push(produto)
    }

    setProdutosSelecionados([...produtosSelecionados]);
  };

  return (
    <section className='telaFazerPedido'>
      <nav className='botaoSair'>
        <Link to='/atendimento' className='botaoSair'>Voltar</Link>
      </nav>
      <span className='fazerPedido'>Fazer um novo pedido<img src="../imagens/icones/hamburger.png" alt="Icone de hamburger" className="icones" /></span>
      
        <Cardapio handleProdutoSelecionado={handleProdutoSelecionado} />
        <ResumoPedido produtosSelecionados={produtosSelecionados} />
     
    </section>
  );
};

export default FazerPedido;