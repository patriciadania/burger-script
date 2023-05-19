import React, { useState, useEffect } from 'react';
import { obterProdutos } from '../../API/Produtos';
import BtnIncrementaDecrementa from '../BtnIncrementaDecrementa/index'


const ItensCardapio = (props) => {
  const { tipoProduto } = props;
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const produtosData = await obterProdutos();
        const produtosFiltradosPorTipo = produtosData.filter((produto) => (!tipoProduto || produto.type === tipoProduto))
        const produtosAgrupadosPorCategoria = agruparPorCategoria(produtosFiltradosPorTipo);
        setCategorias(produtosAgrupadosPorCategoria);
      } catch (error) {
        console.error(error);
      }
    };

    buscarProdutos();
  }, []);

  const categorirasDisplay = [];
  for (const categoria in categorias) {
    const produtosDaCategoria = categorias[categoria];
    const produtosDiplay = produtosDaCategoria.map((produto) => (
      <ul className='lista-itens-cardapio' key={produto.id}>
        <li>{produto.name}</li>
        <li>R$ {produto.price}</li>
        <BtnIncrementaDecrementa />
      </ul>
    ));

    const categoriaDisplay = (
      <div>
        <h1>{categoria}</h1>
        <div>{produtosDiplay}</div>
      </div>
    );

    console.log(categoriaDisplay)

    categorirasDisplay.push(categoriaDisplay)
  }

  return (
    <div className='container-produtos-pedido'>
      { categorirasDisplay }
    </div>
  );
};

const agruparPorCategoria = (produtos) => {
  const categorias = {};
  produtos.forEach(produto => {
    const categoria = categorias[produto.category];

    if (!categoria) {
      categorias[produto.category] = [produto];
    } else {
      categoria.push(produto)
    }
    console.log(categorias);
  });

  return categorias;
}

export default ItensCardapio;