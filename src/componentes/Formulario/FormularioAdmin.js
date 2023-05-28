
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import { useState } from 'react';
import { criarUsuario } from '../../API/Usuarios';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';

const FormularioAdmin = () => {
  const listaDeCargos = [' ', 'Administração', 'Atendimento', 'Cozinha'];

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const aoSalvar = async (evento) => {
    evento.preventDefault();

    try {
      await criarUsuario(nome, email, senha, cargo);
      setCadastroSucesso(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="formulario" data-testid="formulario-admin">
      <form onSubmit={aoSalvar}>
        <CampoTexto
          obrigatorio={true}
          label="Nome: "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="E-mail: "
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Senha: "
          valor={senha}
          aoAlterado={(valor) => setSenha(valor)}
          tipo="password"
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Cargo: "
          valor={cargo}
          itens={listaDeCargos}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <Botao>Cadastrar</Botao>
      </form>

      {cadastroSucesso && (
        <div className="msg-sucesso">
          Cadastro realizado com sucesso!
        </div>
      )}
    </section>
  );
};

export default FormularioAdmin;
