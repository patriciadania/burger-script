import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Formulario = () => {
    const cargos = [
        ' ',
        'Administração',
        'Atendimento',
        'Cozinha',

    ]
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cargo, setCargo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido =>', email, senha, cargo)
    }
    return (
        <section className="formulario">

            <h2>
                <span className="chaves">{"{"}</span>
                <span className="titulo-login"> Login </span>
                <span className="chaves">{"}"}</span>
            </h2>

            <form onSubmit={aoSalvar}>
                <CampoTexto
                    obrigatorio={true}
                    label="E-mail: "
                    //placeholder="nome@dominio.com" 
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Senha: "
                    //placeholder="••••••" 
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}
                />
                {/* <ListaSuspensa
                    obrigatorio={true}
                    label="Cargo: "
                    itens={cargos}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                /> */}
        
            </form>
            <Botao>
                Acessar
                </Botao>
        </section>
    )
}
export default Formulario;