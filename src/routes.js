
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Paginas/Login/Login"
import Atendimento from "./Paginas/Atendimento/Atendimento"
import Cozinha from "./Paginas/Cozinha/Cozinha";
import Administracao from "./Paginas/Adm/Adm";
import FazerPedido from "./Paginas/FazerPedido/FazerPedido";
import AguardandoEntrega from "./Paginas/AguardandoEntrega/AguardandoEntrega";
import PedidosEntregues from "./Paginas/PedidosEntregues/PedidosEntregues";

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

    </Routes>
    </BrowserRouter>
    
  )
}

export default AppRoutes;