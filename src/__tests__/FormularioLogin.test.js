
// import { render, screen, fireEvent } from "@testing-library/react";
// import FormularioLogin from "../componentes/Formulario/FormularioLogin";
// import { login } from "../API/Usuarios";
// import { useNavigate } from "react-router-dom";

// jest.mock("../API/Usuarios");
// jest.mock("react-router-dom", () => ({
//   useNavigate: jest.fn(),
// }));

// describe("FormularioLogin", () => {
//   it("verifica se o formulário é renderizado corretamente", () => {
//     render(<FormularioLogin />);
//     const emailInput = screen.getByLabelText(/E-mail/i);

//     const senhaInput = screen.getByLabelText(/Senha/i);
//     const botaoAcessar = screen.getByRole("button", { name: "acessar" });

//     expect(emailInput).toBeInTheDocument();
//     expect(senhaInput).toBeInTheDocument();
//     expect(botaoAcessar).toBeInTheDocument();
//   });

//   it("verifica se o formulário exibe mensagem de erro ao falhar o login", async () => {
//     const navigateMock = jest.fn();
//     useNavigate.mockReturnValue(navigateMock);
//     const loginMock = jest.fn(() => {
//       throw new Error("Erro de login");
//     });
//     login.mockImplementation(loginMock);

//     render(<FormularioLogin />);
//     const emailInput = screen.getByLabelText("E-mail: ");
//     const senhaInput = screen.getByLabelText("Senha: ");
//     const botaoAcessar = screen.getByRole("button", { name: "acessar" });

//     fireEvent.change(emailInput, { target: { value: "test@example.com" } });
//     fireEvent.change(senhaInput, { target: { value: "password" } });
//     fireEvent.click(botaoAcessar);

//     expect(loginMock).toHaveBeenCalledTimes(1);
//     expect(loginMock).toHaveBeenCalledWith("test@example.com", "password");
//     expect(screen.getByText("Erro de login")).toBeInTheDocument();
//   });

//   it("verifica se o redirecionamento ocorre corretamente após o login", async () => {
//     const navigateMock = jest.fn();
//     useNavigate.mockReturnValue(navigateMock);
//     const loginMock = jest.fn(() => {
//       return {
//         user: {
//           role: "Atendimento",
//         },
//       };
//     });
//     login.mockImplementation(loginMock);

//     render(<FormularioLogin />);
//     const emailInput = screen.getByLabelText("E-mail: ");
//     const senhaInput = screen.getByLabelText("Senha: ");
//     const botaoAcessar = screen.getByRole("button", { name: "acessar" });

//     fireEvent.change(emailInput, { target: { value: "test@example.com" } });
//     fireEvent.change(senhaInput, { target: { value: "password" } });
//     fireEvent.click(botaoAcessar);

//     expect(loginMock).toHaveBeenCalledTimes(1);
//     expect(loginMock).toHaveBeenCalledWith("test@example.com", "password");
//     expect(navigateMock).toHaveBeenCalledTimes(1);
//     expect(navigateMock).toHaveBeenCalledWith("/atendimento");
//   });
//});