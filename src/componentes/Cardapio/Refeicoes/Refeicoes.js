import restaurantes from "../../../objetos/api";
import './Refeicoes.css'
const Refeicoes = ({produto}) => {
    return (
     
        <div className="containerItens">
            <p>{produto.nome}</p>
          <p> R$ {produto.preco}</p>
          <p>{restaurantes.quantidade}</p>
            </div>
        
    );
  };
  
  export default Refeicoes;