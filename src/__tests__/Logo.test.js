import { render, screen } from "@testing-library/react";
import Logo from '../componentes/Logo/Logo.js';
import '@testing-library/jest-dom/extend-expect'; 

describe('Logo', () => {
    test('verifica se a tag "section" renderiza corretamente', () => {
      render(<Logo />);
      const imgElement = screen.getByRole('img');
      expect(imgElement).toBeInTheDocument();
    });
  });
  