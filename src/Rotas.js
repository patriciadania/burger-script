
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Paginas/Login/Login"
import Atendimento from "./Paginas/Atendimento/Atendimento"
import Cozinha from "./Paginas/Cozinha/Cozinha";
import Administracao from "./Paginas/Adm/Adm";
import FazerPedido from "./Paginas/FazerPedido/FazerPedido";
import AguardandoEntrega from "./Paginas/AguardandoEntrega/AguardandoEntrega";
import PedidosEntregues from "./Paginas/PedidosEntregues/PedidosEntregues";
import Colaboradores from "./Paginas/Adm/PagColaboradores/Colaboradores";
import CriarUsuario from "./componentes/CriaEListaUsuario/CriarUsuario";
import ListaDeColaboradores from "./componentes/CriaEListaUsuario/ListaUsuarios";
import Produtos from "./Paginas/Adm/PagProdutos/Produtos";
import AgrProducao from "./Paginas/Cozinha/AgrProducao";
import PedidosProntos from "./Paginas/Cozinha/PedidosProntos";
import { PrivateRoute } from "./RotasPrivadas";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/atendimento" element={
          <PrivateRoute roles={["Atendimento"]}>
            <Atendimento />
          </PrivateRoute>
        } />
        <Route path="/cozinha" element={
          <PrivateRoute roles={["Cozinha"]}>
            <Cozinha />
          </PrivateRoute>
        } />
        <Route path="/administracao" element={
          <PrivateRoute roles={["Administração"]}>
            <Administracao />
          </PrivateRoute>
        } />
        <Route path="/fazerpedido" element={
          <PrivateRoute roles={["Atendimento"]}>
            <FazerPedido />
          </PrivateRoute>
        } />
        <Route path="/aguardandoentrega" element={
          <PrivateRoute roles={["Atendimento"]}>
            <AguardandoEntrega />
          </PrivateRoute>
        } />
        <Route path="/pedidosentregues" element={
          <PrivateRoute roles={["Atendimento"]}>
            <PedidosEntregues />
          </PrivateRoute>
        } />
        <Route path="/colaboradores" element={
          <PrivateRoute roles={["Administração"]}>
            <Colaboradores />
          </PrivateRoute>} 
          />
        <Route path="/addcolaborador" element={
          <PrivateRoute roles={["Administração"]}>
            <CriarUsuario />
          </PrivateRoute>} />
        <Route path="/listacolaboradores" element={
          <PrivateRoute roles={["Administração"]}>
            <ListaDeColaboradores />
          </PrivateRoute>} 
          />
        <Route path="/produtos" element={
          <PrivateRoute roles={["Administração"]}>
            <Produtos />
          </PrivateRoute>} 
          />
        <Route path="/aguardandoproducao" element={
          <PrivateRoute roles={["Cozinha"]}>
            <AgrProducao />
          </PrivateRoute>}
           />
        <Route path="/pedidosprontos" element={
          <PrivateRoute roles={["Cozinha"]}>
            <PedidosProntos />
          </PrivateRoute>}
           />

      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes;