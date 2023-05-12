import estilos from './Navegacao.css'
import { Link } from 'react-router-dom'

export default function Navegacao() {
  return (
    <nav className='acessar'>
      <Link to='/atendimento' className={estilos.link}>Acessar</Link>
    </nav>
  )
}