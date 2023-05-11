import './Cardapio.css'
import TipoRefeicao from "./TipoRefeicao/TipoRefeicao";
import restaurantes from "../../objetos/api";
import Botao from '../Botao/Botao';


const Cardapio = () => {
  return (<div className="table-container">
    {restaurantes?.map(item => <TipoRefeicao restaurante={item} key={item.id} />)}
    <div className='table-cell'>
      <div className='infoPedido'>
      
        <h1>resumo do pedido</h1>
        <div class="loader"></div>
        <p>mesa:</p>
        <p>cliente:</p>
        <p>atendente:</p>
      </div>
    </div>
  <Botao>enviar pedido</Botao>
  </div>)
}

export default Cardapio;