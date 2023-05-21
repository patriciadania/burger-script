import React, { useState, useEffect } from 'react';
import { obterProdutos } from '../../API/Produtos';
import BtnIncrementaDecrementa from '../BtnIncrementaDecrementa/index'

const ItensCardapio = ({ tipoProduto, handleProdutoSelecionado }) => {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const produtosData = await obterProdutos();
        const produtosFiltradosPorTipo = produtosData.filter(
          (produto) => !tipoProduto || produto.type === tipoProduto
        );
        setProdutos(produtosFiltradosPorTipo);
        const produtosAgrupadosPorCategoria = agruparPorCategoria(produtosFiltradosPorTipo);
        setCategorias(produtosAgrupadosPorCategoria);
      } catch (error) {
        console.error(error);
      }
    };

    buscarProdutos();
  }, [tipoProduto]);

  const handleIncrement = (produto) => {
    handleProdutoSelecionado(produto);
  };

  const handleDecrement = (produto) => {
    if (produto.quantity > 0) {
      handleProdutoSelecionado({ ...produto, quantity: produto.quantity - 1 });
    }
  };

  const categoriasDisplay = Object.entries(categorias).map(([categoria, produtosDaCategoria]) => (
    <div key={categoria}>
      <h1>{categoria}</h1>
      <div>
        {produtosDaCategoria.map((produto) => (
          <ul className='lista-itens-cardapio' key={produto.id}>
            <li>{produto.name}</li>
            <li>R$ {produto.price}</li>
            <BtnIncrementaDecrementa
              increment={() => handleIncrement({ ...produto, quantity: (produto.quantity || 0) + 1 })}
              decrement={() => handleDecrement(produto)}
            />
          </ul>
        ))}
      </div>
    </div>
  ));

  return <div className='container-produtos-pedido'>{categoriasDisplay}</div>;
};

const agruparPorCategoria = (produtos) => {
  const categorias = {};
  produtos.forEach((produto) => {
    const categoria = categorias[produto.category];

    if (!categoria) {
      categorias[produto.category] = [produto];
    } else {
      categoria.push(produto);
    }
  });

  return categorias;
};

export default ItensCardapio;
