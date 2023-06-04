/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuHamburger from '../componentes/Cardapio/MenuHamburger';
import '@testing-library/jest-dom/extend-expect'; 


it('alternar o menu ao clicar no ícone', () => {
  const conteudo = 'Conteúdo do menu';
  const tipoRefeicao = 'Tipo de Refeição';
  const imagemSrc = 'imagem.jpg';
  const imagemAlt = 'Descrição da imagem';

  const { getByText, queryByText } = render(
    <MenuHamburger
      conteudo={conteudo}
      tipoRefeicao={tipoRefeicao}
      imagemSrc={imagemSrc}
      imagemAlt={imagemAlt}
    />
  );

  const menuFechado = getByText(tipoRefeicao);
  expect(queryByText(conteudo)).not.toBeInTheDocument(); 
  fireEvent.click(menuFechado); 

  const menuAberto = getByText(tipoRefeicao);
  const conteudoMenu = getByText(conteudo);

  expect(menuFechado).not.toBeInTheDocument(); 
  expect(menuAberto).toBeInTheDocument(); 
  expect(conteudoMenu).toBeInTheDocument();

  fireEvent.click(menuAberto); 

  expect(menuFechado).toBeInTheDocument();
  expect(menuAberto).not.toBeInTheDocument(); 
  expect(queryByText(conteudo)).not.toBeInTheDocument(); 
});
