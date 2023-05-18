
import './ResumoPedido.css'
import CardTerminal from '../CardTerminal/CardTerminal';

export default function ResumoPedido() {
    return (
        <div className='container-resumo-pedido'>
            <CardTerminal>

                <h2 className="titulo-login">
                    <span className="chaves">{"{"}</span>
                    <span className="titulo-login"> Resumo do Pedido </span>
                    <span className="chaves">{"}"}</span>
                </h2>

                <div className='infoPedido'>
                    <label className='labelResumoPedido'>mesa:</label>
                    <input className='inputResumoPedido' />
                    <br></br>
                    <label className='labelResumoPedido'>cliente:</label>
                    <input className='inputResumoPedido' />
                    <br></br>
                    <label className='labelResumoPedido'>atendente:</label>
                    <input className='inputResumoPedido' />

                    <table className='conteudo-tabela-resumo'>
                        <thead>
                            <tr>
                                <th>Quantidade</th>
                                <th>Descrição</th>
                                <th>Valor R$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>Pizza de Pepperoni com abacai e limao</td>
                                <td>25.00</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Hambúrguer</td>
                                <td>15.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Refrigerante</td>
                                <td>5.00</td>
                            </tr>
                            <tr>
                                <td className='totalPedido'>TOTAL </td>
                                <td className='totalPedido'></td>
                                <td className='totalPedido'>45.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardTerminal>
        </div>
    )
}



