/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import CardTerminal from '../componentes/CardTerminal/CardTerminal';
import '@testing-library/jest-dom/extend-expect';


describe('CardTerminal', () => {
  test('renderiza corretamente', () => {
    const { getByText } = render(<CardTerminal>Conteúdo do card</CardTerminal>);
    const cardContent = getByText('Conteúdo do card');
    expect(cardContent).toBeInTheDocument();
  });
});

