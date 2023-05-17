import './Cardapio.css'
// import TipoRefeicao from "./TipoRefeicao/TipoRefeicao";
// import restaurantes from "../../objetos/api";
// //import Botao from '../Botao/Botao';
// import ResumoPedido from '../ResumoPedido/ResumoPedido';


// const Cardapio = () => {
//   return (
    
//   <div className="cardapio-resumo">
//     <div>
//     {restaurantes?.map(item => <TipoRefeicao restaurante={item} key={item.id} />)}
//     </div>
//     <div className='resumo'>
//     <ResumoPedido />
//     </div>
   
//   </div>)
// }

// export default Cardapio;


// tentanto exibir produtos
// import { useState } from 'react';
// import ListaDeProdutos from '../../Paginas/Adm/PagProdutos/ListaDeProdutos';

// const Cardapio = () => {
//   const [produtosSelecionados, setProdutosSelecionados] = useState([]);

//   const handleProdutoSelecionado = (produtoId) => {
//     if (produtosSelecionados.includes(produtoId)) {
//       setProdutosSelecionados(produtosSelecionados.filter((id) => id !== produtoId));
//     } else {
//       setProdutosSelecionados([...produtosSelecionados, produtoId]);
//     }
//   };

//   const handleSubmitPedido = () => {
//     // Aqui você pode fazer algo com os produtos selecionados,
//     // como enviar uma requisição para a API para fazer o pedido.
//     console.log('Produtos selecionados:', produtosSelecionados);
//   };

//   return (
//     <div>
//       <h1>Cardápio</h1>
//       <ListaDeProdutos
//         produtosSelecionados={produtosSelecionados}
//         handleProdutoSelecionado={handleProdutoSelecionado}
//       />
//       <button onClick={handleSubmitPedido} disabled={produtosSelecionados.length === 0}>
//         Fazer Pedido
//       </button>
//     </div>
//   );
// };

// export default Cardapio;

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
    <div>
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


