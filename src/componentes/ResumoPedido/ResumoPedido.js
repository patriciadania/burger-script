import React, { useState, useEffect } from 'react';
import { obterProdutos } from '../../API/Produtos';
import BtnIncrementaDecrementa from '../BtnIncrementaDecrementa/index'

const ItensCardapio = ({ tipoProduto, manipularProdutoSelecionado }) => {
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
      }
    };

    buscarProdutos();
  }, [tipoProduto]);

  const incrementarContador = (produto) => {
    manipularProdutoSelecionado(produto, 'incrementar');
  };

  const decrementarContador = (produto) => {
    manipularProdutoSelecionado(produto, 'decrementar');
  };


  const categoriasDisplay = Object.entries(categorias).map(([categoria, produtosDaCategoria]) => (
    <div key={categoria}>
      <div className='produtos-do-cardapio'>
        <h3 className='titulo-categoria'>
        {categoria}
        </h3>
  
        </div>
      <div className='container-dos-produtos'>
        {produtosDaCategoria.map((produto) => (
          <ul key={produto.id} className='lista-itens-cardapio'>
            <img className='imagens-do-cardapio' src={produto.image} alt={produto.name} />
            <div className='nome-preco'>
            <li>{produto.name}</li> 
            <li className='preco'>R$ {produto.price}</li>
            </div>
           
            <BtnIncrementaDecrementa
              incrementa={() => incrementarContador({ ...produto, quantity: (produto.quantity || 0) + 1 })}
              decrementa={() => decrementarContador({ ...produto, quantity: (produto.quantity > 1) - 1 })}
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