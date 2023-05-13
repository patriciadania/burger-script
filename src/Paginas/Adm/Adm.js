
import { Link } from 'react-router-dom';

export default function Administracao() {
    return (
      <div className='telaAtendimento'>
         <nav className='botaoSair'>
     <Link to='/' className='botaoSair'>Sair</Link>
</nav>
<h2 className='msgBoasVindas'>olá, </h2>

<span className='fazerPedido'>
        <Link to='/colaboradores' className='link'> 
      colaboradores
       <img src="../imagens/icones/colaboradores.png" alt="Icone de colaboradores" className="icones"/> 
      </Link>
      </span>

      <span className='fazerPedido'>
        <Link to='/fazerpedido' className='link'> 
      produtos
       <img src="../imagens/icones/iconeProdutos.png" alt="Icone de produtos" className="icones"/> 
      </Link>
      </span>
      </div>
    );
  }
  