
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


function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/atendimento" element={<Atendimento />} />
      <Route path="/cozinha" element={<Cozinha />} />
      <Route path="/administracao" element={<Administracao />} />
      <Route path="/fazerpedido" element={<FazerPedido />} />
      <Route path= "/aguardandoentrega" element={<AguardandoEntrega/>}/>
      <Route path= "/pedidosentregues" element={<PedidosEntregues/>}/>
      <Route path="/colaboradores" element={<Colaboradores /> } />
      <Route path="/addcolaborador" element={<CriarUsuario /> } />
      <Route path="/listacolaboradores" element={<ListaDeColaboradores /> } />
      <Route path="/produtos" element={<Produtos /> } />

    </Routes>
    </BrowserRouter>
    
  )
}
// alo brasil
export default AppRoutes;