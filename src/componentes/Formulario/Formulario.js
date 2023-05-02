import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';

const Formulario = () => {
    const cargo = [
        ' ',
        'Administração',
        'Atendimento',
        'Cozinha',

    ]
    return (
        <body className="body-login">
        <section className="formulario">
            <form>
                <h2>
                <span className="chaves">{"{"}</span>
 <span className="titulo-login"> Login </span>
<span className="chaves">{"}"}</span>
                </h2>
                <CampoTexto label="E-mail: " placeholder="nome@dominio.com" />
                <CampoTexto label="Senha: " placeholder="••••••" />
                <ListaSuspensa label="Cargo: " itens={cargo} />
                <Botao>
                    Login
                </Botao>
            </form>
        </section>
        </body>
    )
}
export default Formulario;