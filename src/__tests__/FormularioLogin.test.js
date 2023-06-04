/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */


import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { login } from '../API/Usuarios';
import FormularioLogin from '../componentes/Formulario/FormularioLogin';
import { useNavigate } from 'react-router-dom';


jest.mock('../API/Usuarios', () => ({
  login: jest.fn(),
}));


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));


describe('FormularioLogin', () => {
  test('Realiza o login e navega para a página de destino de acordo com o role', async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    login.mockResolvedValueOnce({
      user: { role: 'Atendimento' },
    });

    const { getByLabelText, getByText } = render(<FormularioLogin />);

    const emailInput = getByLabelText('E-mail:');
    const senhaInput = getByLabelText('Senha:');
    const acessarButton = getByText('acessar');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(senhaInput, { target: { value: 'password' } });

    fireEvent.click(acessarButton);

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith('test@example.com', 'password');
      expect(navigate).toHaveBeenCalledWith('/atendimento');
    });
  });
});