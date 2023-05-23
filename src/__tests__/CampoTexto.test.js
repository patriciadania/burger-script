import { render, screen, fireEvent } from "@testing-library/react";
import CampoTexto from '../componentes/CampoTexto/CampoTexto.js';
import '@testing-library/jest-dom/extend-expect'; 

describe("CampoTexto", () => {
    it("se está renderizando corretamente o componente", () => {
      const aoAlteradoMock = jest.fn();
  
      render(<CampoTexto aoAlterado={aoAlteradoMock}>nome</CampoTexto>);
      const elementoCampo = screen.getByRole('textbox');
  
      fireEvent.input(elementoCampo, { target: { value: 'valor de teste' } });
  
      expect(aoAlteradoMock).toHaveBeenCalledTimes(1);
      expect(aoAlteradoMock).toHaveBeenCalledWith('valor de teste');
    });
  });
  