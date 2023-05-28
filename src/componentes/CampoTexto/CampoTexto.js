import "./CampoTexto.css"

const CampoTexto = (props) => {
    const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value);
    };
  
    return (
      <div className="campo-texto">
        <input
          type={props.tipo || "text"}
          value={props.valor}
          onChange={aoDigitado}
          required={props.obrigatorio}
          placeholder={props.placeholder}
          aria-label={props.label}
          name={props.name} 
        />
        <label>{props.label}</label>
      </div>
    );
  };

export default CampoTexto;
