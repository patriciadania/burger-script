
import './ListaUsuarios.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarUsuarios } from "../../API/Usuarios";

export default function ListaDeUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
  
    useEffect(() => {
      const obterUsuarios = async () => {
        try {
          const usuariosData = await listarUsuarios();
          setUsuarios(usuariosData);
        } catch (error) {
          console.error('Erro ao obter usuários:', error);
        }
      };
  
      obterUsuarios();
    }, []);
  
    return (
      <div className="telaFazerPedido">
        <nav className="botaoSair">
          <Link to="/administracao" className="botaoSair">
            Voltar
          </Link>
        </nav>
        <span className="fazerPedido">Listar colaboradores</span>
        <div className="listaUsuarios">
          {usuarios.map((usuario) => (
            <div key={usuario.id} className="cardUsuario">
              <p className='dados-usuario'>Nome: {usuario.nome}</p>
              <p className='dados-usuario'>E-mail: {usuario.email}</p>
              <p className='dados-usuario'>Cargo: {usuario.role}</p>
              <button className='btn-lista-usuarios'>editar</button>  
              <button className='btn-lista-usuarios'>excluir</button>
            </div>
            
          ))}
        </div>
      </div>
    );
  }


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { listarUsuarios } from "../../API/Usuarios";
// import "./ListaUsuarios.css"; // Importe o arquivo CSS para estilização

// export default function ListaDeUsuarios() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [filtroCargo, setFiltroCargo] = useState("");
//   const [ordenarPor, setOrdenarPor] = useState("NomeA-Z");

//   useEffect(() => {
//     const obterUsuarios = async () => {
//       try {
//         const usuariosData = await listarUsuarios();
//         setUsuarios(usuariosData);
//       } catch (error) {
//         console.error('Erro ao obter usuários:', error);
//       }
//     };

//     obterUsuarios();
//   }, []);

//   const filtrarPorCargo = (cargo) => {
//     setFiltroCargo(cargo);
//   };

//   const usuariosFiltrados = usuarios.filter((usuario) => {
//     if (filtroCargo === "") {
//       return true;
//     } else {
//       return usuario.role === filtroCargo;
//     }
//   });

//   const usuariosOrdenados = usuariosFiltrados.sort((a, b) => {
//     const nomeA = a.nome ? a.nome.toLowerCase() : "";
//     const nomeB = b.nome ? b.nome.toLowerCase() : "";
  
//     if (ordenarPor === "NomeA-Z") {
//       return nomeA.localeCompare(nomeB);
//     } else if (ordenarPor === "NomeZ-A") {
//       return nomeB.localeCompare(nomeA);
//     } else if (ordenarPor === "Cargo") {
//       return a.role.localeCompare(b.role);
//     } else {
//       return 0;
//     }
//   });
  

//   return (
//     <div className="telaFazerPedido">
//       <nav className="botaoSair">
//         <Link to="/administracao" className="botaoSair">
//           Voltar
//         </Link>
//       </nav>
//       <span className="fazerPedido">Listar colaboradores</span>
//       <div className="filtroOrdenacao">
//         <select
//           value={filtroCargo}
//           onChange={(e) => filtrarPorCargo(e.target.value)}
//         >
//           <option value="">Todos</option>
//           <option value="Administração">Administração</option>
//           <option value="Atendimento">Atendimento</option>
//           <option value="Cozinha">Cozinha</option>
//         </select>
//         <select
//           value={ordenarPor}
//           onChange={(e) => setOrdenarPor(e.target.value)}
//         >
//           <option value="NomeA-Z">Nome (A-Z)</option>
//           <option value="NomeZ-A">Nome (Z-A)</option>
//           <option value="Cargo">Cargo</option>
//         </select>
//       </div>
//       <div className="listaUsuarios">
//         {usuariosOrdenados.map((usuario) => (
//           <div key={usuario.id} className="cardUsuario">
//             <div className="cardContent">
//               <p>Nome: {usuario.nome}</p>
//               <p>Email: {usuario.email}</p>
//               <p>Role: {usuario.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
