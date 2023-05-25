import './Cardapio.css'
import ItensCardapio from './ItensCardapio';
import MenuHamburger from './MenuHamburger';


const Cardapio = ({ handleProdutoSelecionado }) => {
  return (
    <section className='cardapio-resumo'>
      <div className='card-itens-cardapio'>
        <MenuHamburger tipoRefeicao={

          <h2 className='titulo-tipo-refeicao'>
            <span className="colchetes">{"["}</span>
            Café da Manhã
            <span className="colchetes">{"]"}</span>
          </h2>
        }
          conteudo={
            <ItensCardapio
              tipoProduto='café da manhã'
              handleProdutoSelecionado={handleProdutoSelecionado}
            />

          }
        />
      </div>
      <div className='card-itens-cardapio'>
      <MenuHamburger tipoRefeicao={

        <h2 className='titulo-tipo-refeicao'>
          <span className="colchetes">{"["}</span>
          Menu Principal
          <span className="colchetes">{"]"}</span>
        </h2>
      } conteudo={
      

          <ItensCardapio
            tipoProduto='menu principal'
            handleProdutoSelecionado={handleProdutoSelecionado}
          />
      
      }
      />
       </div>
    </section>
  );
};

export default Cardapio;