import Cardapio from '../../componentes/Cardapio/Cardapio'
import ResumoPedido from '../../componentes/ResumoPedido/ResumoPedido'
import { useState } from 'react'
import './FazerPedido.css'
import { Link } from 'react-router-dom'
import MenuNavegacao from '../../componentes/MenuNavegacao/MenuNavegacao'

const FazerPedido = () => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  const manipularProdutoSelecionado = (produto, operacao) => {
    const produtoSelecionado = produtosSelecionados.find(produtoSelecionado => produtoSelecionado.id === produto.id);
    console.log(operacao)

    if (operacao === 'incrementar') {
      if (produtoSelecionado) {
        produtoSelecionado.quantity++;
        produtoSelecionado.total = produtoSelecionado.quantity * produtoSelecionado.price;
      } else {
        produto.total = produto.quantity * produto.price;
        produtosSelecionados.push(produto)
      }
    } else if (operacao === 'decrementar') {
      if (produtoSelecionado) {
        if (produtoSelecionado.quantity > 1) {
          produtoSelecionado.quantity--;
          produtoSelecionado.total = produtoSelecionado.quantity * produtoSelecionado.price;
        } else {
          const indexProdutoSelecionado = produtosSelecionados.indexOf(produtoSelecionado)
          console.log(indexProdutoSelecionado);
          produtosSelecionados.splice(indexProdutoSelecionado, 1);
          console.log(produtosSelecionados)
        }
      }
    }


    setProdutosSelecionados([...produtosSelecionados]);
  };

  return (
    <section className='telaFazerPedido'>
      <nav className='botaoSair'>
        <Link to='/atendimento' className='botaoSair'>Voltar</Link>
      </nav>
      <MenuNavegacao
        to='/fazerpedido'
        texto='registrar pedido'
        imagemSrc='fazer-pedido.png'
      />
      <Cardapio manipularProdutoSelecionado={manipularProdutoSelecionado} />
      <ResumoPedido produtosSelecionados={produtosSelecionados} />

    </section>
  );
};

export default FazerPedido;