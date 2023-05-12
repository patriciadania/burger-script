import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../API/Api';

const Formulario = () => {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSalvar = async (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido =>', email, senha)
        // console.log('usuário e senha login =>', emailLogin, senhaLogin)
        const loginUsuario = await login(email, senha)
        console.log(loginUsuario)

        // TODO: Redirecionar o usuário de acordo com o role.
        if(loginUsuario.user.role === 'atendimento') { 
            console.log('redirecionando para atendimento')
            navigate('/atendimento')
        }
        if(loginUsuario.user.role === 'cozinha') { 
            console.log('redirecionando para cozinha')
            navigate('/cozinha')
        }
        if(loginUsuario.user.role === 'admin') { 
            console.log('redirecionando para administracao')
            navigate('/administracao')
        }
       
    }

    return (
        <section className="formulario">


            <form onSubmit={aoSalvar}>
                <CampoTexto
                    obrigatorio={true}
                    label="E-mail: "
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Senha: "
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}
                />

                <Botao>acessar</Botao>

            </form>
            {/* <Navegacao>
                <Botao />
            </Navegacao> */}



        </section>
    )
}
export default Formulario;