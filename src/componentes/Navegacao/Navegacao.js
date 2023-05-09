import estilos from './Navegacao.css'
import { Link } from 'react-router-dom'

export default function Navegacao(){
return (
    <nav className={estilos.link}>
    <ul>
      <li>
        <Link to='/atendimento'>Acessar</Link>
      </li>
    </ul>
  </nav>
)
}