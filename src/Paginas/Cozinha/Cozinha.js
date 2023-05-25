import { Link } from "react-router-dom";


export default function Cozinha() {
    return (
        <section className='telaAtendimento'>
        <nav className='botaoSair'>
        <Link to='/' className='botaoSair'>Sair</Link>
   </nav>
   
         <h2 className='msgBoasVindas'>olá chef,</h2>
         <span className='fazerPedido'>
           <Link to='/' className='link'> 
           aguardando envio
          <img src="../imagens/icones/hamburger.png" alt="Icone de hamburger" className="icones"/> 
         </Link>
         </span>
         <span className='fazerPedido'>
           <Link to='/' className='link'>
             Pedidos Enviados
             <img src="../imagens/icones/relogio.png" alt="Icone de relogio" className="icones"/>
             </Link> 
             </span>

             <span className='fazerPedido'>
           <Link to='/PedidosEntregues' className='link'>
            lista de pedidos
             <img src="../imagens/icones/relogio.png" alt="Icone de relogio" className="icones"/>
             </Link> 
             </span>
         
       </section>
    );
  }
  