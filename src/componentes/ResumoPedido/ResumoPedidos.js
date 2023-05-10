//import ResumoPedido from './ResumoPedido.css'
import React, { useState } from 'react';

export default function FormularioPedido({ onSubmit }) {
  const [atendente, setAtendente] = useState('');
  const [mesa, setMesa] = useState('');
  const [cliente, setCliente] = useState('');
  const [itens, setItens] = useState('');
  const [valorTotal, setValorTotal] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const pedido = {
      atendente,
      mesa,
      cliente,
      itens,
      valorTotal,
    };
    onSubmit(pedido);
    setAtendente('');
    setMesa('');
    setCliente('');
    setItens('');
    setValorTotal('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="atendente">Nome do Atendente:</label>
        <input
          type="text"
          id="atendente"
          value={atendente}
          onChange={(event) => setAtendente(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mesa">Número da Mesa:</label>
        <input
          type="text"
          id="mesa"
          value={mesa}
          onChange={(event) => setMesa(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cliente">Nome do Cliente:</label>
        <input
          type="text"
          id="cliente"
          value={cliente}
          onChange={(event) => setCliente(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="itens">Itens:</label>
        <textarea
          id="itens"
          value={itens}
          onChange={(event) => setItens(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="valorTotal">Valor Total:</label>
        <input
          type="text"
          id="valorTotal"
          value={valorTotal}
          onChange={(event) => setValorTotal(event.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}



export function Contador() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

