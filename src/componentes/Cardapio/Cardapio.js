import  './Cardapio.module.css'
import TipoRefeicao from "./TipoRefeicao/TipoRefeicao";
import restaurantes from "../../objetos/api";

const Cardapio = () => {
  return (<section className="conteudoCardapio">
    {restaurantes?.map(item => <TipoRefeicao restaurante={item} key={item.id} />)}
  </section>)
}

export default Cardapio;