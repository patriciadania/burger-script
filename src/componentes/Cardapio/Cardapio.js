import './Cardapio.css'
import TipoRefeicao from "./TipoRefeicao/TipoRefeicao";
import restaurantes from "../../objetos/api";
import Botao from '../Botao/Botao';
import ResumoPedido from '../ResumoPedido/ResumoPedido';


const Cardapio = () => {
  return (
    
  <div className="cardapio-resumo">
    <div>
    {restaurantes?.map(item => <TipoRefeicao restaurante={item} key={item.id} />)}
    </div>
    <div className='resumo'>
    <ResumoPedido />
    </div>
   
  </div>)
}

export default Cardapio;