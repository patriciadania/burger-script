import React, { useState } from "react";

export default function BtnEditarUsuario({ usuario, aoSalvar, onCancel }) {
  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.email);
  const [cargo, setCargo] = useState(usuario.role);

  const btnSalvar = () => {
    const novoUsuario = {
      id: usuario.id,
      nome,
      email,
      role: cargo,
    };
    window.location.reload();
    aoSalvar(novoUsuario);
  };

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
      <button onClick={btnSalvar}>Salvar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}
