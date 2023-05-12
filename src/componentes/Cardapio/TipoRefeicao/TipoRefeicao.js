

import Refeicoes from '../Refeicoes/Refeicoes';
import './TipoRefeicao.css';

const TipoRefeicao = ({ restaurante }) => {
  return (
    
    <div className='container-tipo-ref'>
     
          <h2 className='tipoRefecao'>{restaurante.tipoRefeicao}</h2>
          {restaurante.categorias.map((categoria) => {
            return (
              <div key={categoria.titulo}>
                <h1 className='categoria-titulo'>{categoria.titulo}</h1>
                {categoria.produtos.map((item) => (
                  <Refeicoes produto={item} key={item.id} />
                ))}
              </div>
            );
          })}
        </div>
  
  );
};

export default TipoRefeicao;
