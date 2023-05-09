import Refeicoes from '../Refeicoes/Refeicoes';
import './TipoRefeicao.css'
const TipoRefeicao = ({ restaurante }) => {
  return (
    <section className='container'>
      <div className='column'>
        <h2 className='tipoRefecao'>{restaurante.tipoRefeicao}</h2>
        </div>
        <div className='column'>
        {restaurante.categorias.map((categoria) => {
          return (
            <div key={categoria.titulo}>
              <h1 className='categoria'>{categoria.titulo}</h1>
              {categoria.produtos.map((item) => (
                <Refeicoes produto={item} key={item.id} />
              ))}
            </div>
          );
        })}
        </div>
    </section>
  );
};

export default TipoRefeicao;
