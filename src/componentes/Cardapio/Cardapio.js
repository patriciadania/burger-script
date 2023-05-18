import './Cardapio.css'
import { useState } from 'react';
import ItensCardapio from './ItensCardapio';

const Cardapio = () => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);


  const handleProdutoSelecionado = (produtoId) => {
    if (produtosSelecionados.includes(produtoId)) {
      setProdutosSelecionados(produtosSelecionados.filter((id) => id !== produtoId));
    } else {
      setProdutosSelecionados([...produtosSelecionados, produtoId]);
    }
  };

  const handleSubmitPedido = () => {
    console.log('Produtos selecionados:', produtosSelecionados);
  };

  return (
    <div className='cardapio-resumo'>
      <h2>Café da Manhã</h2>
      <ItensCardapio
        tipoProduto='café da manhã'
        handleProdutoSelecionado={handleProdutoSelecionado}
      />
      <h2>Menu Principal</h2>
      <ItensCardapio
        tipoProduto='menu principal'
        handleProdutoSelecionado={handleProdutoSelecionado}
      />
      <button onClick={handleSubmitPedido} disabled={produtosSelecionados.length === 0}>
        Fazer Pedido
      </button>
    </div>
  );
};

export default Cardapio;


