// import React, { useEffect, useState } from 'react';
// import { obterNomeUsuario } from '../../API/Usuarios';

// export default function NomeUsuario() {
//   const [nomeUsuario, setNomeUsuario] = useState('');

//   useEffect(() => {
//     const buscarNomeUsuario = async () => {
//       try {
//         const nome = await obterNomeUsuario();
//         setNomeUsuario(nome);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     buscarNomeUsuario();
//   }, []);

//   return <h2 className='msgBoasVindas'>olá, {nomeUsuario}</h2>;
// }
