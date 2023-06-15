import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { differenceInMinutes } from 'date-fns';
import Modal from 'react-modal';
import Botao from '../componentes/Botao/Botao';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    background: 'var(--azul-escuro)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    maxWidth: '300px',
  },
};

Modal.setAppElement('#root');

export const verificarAutenticacao = () => {
  const authToken = localStorage.getItem('authToken');
  const userData = localStorage.getItem('user');

  if (!authToken || !userData) {
    throw new Error('Usuário não autenticado');
  }

  const user = JSON.parse(userData);

  if (!user || !user.name) {
    throw new Error('Usuário inválido');
  }

  const decodedToken = jwtDecode(authToken);
  const expiracaoDoToken = decodedToken.exp * 1000;

  if (expiracaoDoToken < Date.now()) {
    throw new Error('Token expirado');
  }

  return user;
};

function TokenExpiracao() {
  const [tempoRestante, setTempoRestante] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      const expiracaoDoToken = decodedToken.exp * 1000;
      const dataExpiracao = new Date(expiracaoDoToken);

      const atualizarTempoRestante = () => {
        const dataAtual = new Date();
        const diferencaEmMinutos = differenceInMinutes(
          dataExpiracao,
          dataAtual
        );
        const horas = Math.floor(diferencaEmMinutos / 60);
        const minutos = diferencaEmMinutos % 60;
        let tempoRestanteFormatado = '';

        if (horas > 0) {
          tempoRestanteFormatado = `Fazer um novo login em ${horas}h ${minutos}min!`;
        } else {
          tempoRestanteFormatado = `Fazer um novo login em ${minutos}min!`;
        }
        setTempoRestante(tempoRestanteFormatado);
      };

      atualizarTempoRestante();

      const intervalId = setInterval(atualizarTempoRestante, 1000 * 60);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  useEffect(() => {
    if (tempoRestante === 'Token expirado') {
      setModalAberto(true);
    }
  }, [tempoRestante]);

  const fecharModal = () => {
    setModalAberto(false);
    navigate('/');
  };

  return (
    <>
      <div className="exp-token">
        <h4>{tempoRestante}</h4>
      </div>
      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        contentLabel="Token Expirado"
        style={customStyles}
      >
        <h2 className="msg-modal">O token expirou!</h2>
        <p>Por favor, faça login novamente.</p>
        <div className="btn-modal">
          <Botao onClick={fecharModal}>OK</Botao>
        </div>
      </Modal>
    </>
  );
}

export default TokenExpiracao;