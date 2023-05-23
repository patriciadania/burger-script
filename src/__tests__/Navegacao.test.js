import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navegacao from '../componentes/Navegacao/Navegacao';
import '@testing-library/jest-dom/extend-expect';


describe('Navegacao', () => {
  test('deve renderizar corretamente', () => {
    render(
      <Router>
        <Navegacao />
      </Router>
    );

    const linkElement = screen.getByRole('link', { name: /acessar/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/atendimento');
    expect(linkElement).toHaveClass('link');
  });
});