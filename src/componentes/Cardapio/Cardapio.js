import './Cardapio.css'
import TipoRefeicao from "./TipoRefeicao/TipoRefeicao";
import restaurantes from "../../objetos/api";
import Botao from '../Botao/Botao';
import ResumoPedido from '../ResumoPedido/ResumoPedido';


const Cardapio = () => {
  return (<div className="table-container">
    {restaurantes?.map(item => <TipoRefeicao restaurante={item} key={item.id} />)}
    <div className='table-cell'>
    <ResumoPedido />
    </div>
   
    <Botao>enviar pedido</Botao>
  </div>)
}

export default Cardapio;