
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Paginas/Login/Login"
import Atendimento from "./Paginas/Atendimento/Atendimento"
import Cozinha from "./Paginas/Cozinha/Cozinha";
import Administracao from "./Paginas/Adm/Adm";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/atendimento" element={<Atendimento />} />
      <Route path="/cozinha" element={<Cozinha />} />
      <Route path="/administracao" element={<Administracao />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default AppRoutes;