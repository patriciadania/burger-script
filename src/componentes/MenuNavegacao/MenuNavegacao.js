import './MenuNagevacao.css';
import { Link } from 'react-router-dom';

const MenuNavegacao = ({to, texto, imagemSrc}) =>{
    const caminhoBase = '../imagens/icones/';
    const imagemAlt = `icone de ${texto}`;
    return(
        <span className='menu-nav'>
 <Link to={to} className='link'> 
      {texto}
       <img src={`${caminhoBase}${imagemSrc}`} 
       alt={imagemAlt} 
       className="icones"/> 
      </Link>
        </span>
    )
}

export default MenuNavegacao;