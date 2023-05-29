import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import { useState } from 'react';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import { adicionarProdutos } from '../../API/Produtos';

const FormularioProdutos = () => {

        const listaRefeicao = [
        ' ',
        'Café da manhã',
        'Refeição Principal',
    ]
    const categoria = [
        ' ',
        'Acompanhamento',
        'Bebida',
        'Hambúrgueres',
        'Lanches',

    ]

    const [nomeProduto, setNome] = useState('')
    const [precoProduto, setPreco] = useState('')
    const [categoriaProduto, setCategoriaProduto] = useState('')
    const [tipoRefeicao, setTipoRefeicao] = useState('');
    const [idProduto, setIdProduto] = useState('');
    const [cadastroSucesso, setCadastroSucesso] = useState(false);

    const aoSalvar = async (evento) => {
        evento.preventDefault();
      
        try {
            await adicionarProdutos(nomeProduto, precoProduto, categoriaProduto, tipoRefeicao, idProduto);
            setCadastroSucesso(true);
          } catch (error) {
            console.error(error);
          }
        };
  
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <CampoTexto
                    obrigatorio={true}
                    label="Nome do Produto: "
                    valor={nomeProduto}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Preço: "
                    valor={precoProduto}
                    aoAlterado={valor => setPreco(valor)}
                    type={Number}
                />
            
                 <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria: "
                    valor={categoriaProduto}
                    itens={categoria}
                    aoAlterado={valor => setCategoriaProduto(valor)}
                />
                 <CampoTexto
                    obrigatorio={true}
                    label="Id: "
                    valor={idProduto}
                    aoAlterado={valor => setIdProduto(valor)}
                   
            
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Tipo de Refeição: "
                    valor={tipoRefeicao}
                    itens={listaRefeicao}
                    aoAlterado={valor => setTipoRefeicao(valor)}
                />

                 <Botao>Cadastrar</Botao>

            </form>
            {cadastroSucesso && ( 
        <div className="msg-sucesso">
            Cadastro realizado com sucesso!
            </div>
        )}
        </section>
    )
}
export default FormularioProdutos;