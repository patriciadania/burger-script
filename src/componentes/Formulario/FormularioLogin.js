import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../API/Usuarios';

const FormularioLogin = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('');
    const [nome] = useState('');

    const aoSalvar = async (evento) => {
        evento.preventDefault()
        setErro('');

        try {
            const loginUsuario = await login(email, senha, nome)
            console.log(loginUsuario)
            if (loginUsuario.user.role === 'Atendimento') {
                navigate('/atendimento')
            }
            if (loginUsuario.user.role === 'Cozinha') {
                navigate('/cozinha')
            }
            if (loginUsuario.user.role === 'Administração') {
                navigate('/administracao')
            }
        } catch (error) {
            setErro(error.message);
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
                        name="E-mail"
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Senha: "
                        valor={senha}
                        aoAlterado={valor => setSenha(valor)}
                        tipo="password"
                    />
                    <div className='msg-erro-login'>
                        {erro && <p>{erro}</p>}
                    </div>
                    <Botao>acessar</Botao>
                </form>
            </section>

       
    )
}
export default FormularioLogin;