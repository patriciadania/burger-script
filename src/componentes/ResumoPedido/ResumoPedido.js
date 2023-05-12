import './ResumoPedido.css'

export default function ResumoPedido() {
    return (
        <div className='table-cell'>
            <div className='infoPedido'>
                <h1 className='tituloResumoPedido'>resumo do pedido</h1>
                <div class="loader"></div>
                <div className='dadosPedido'>
                    <label className='labelResumoPedido'>mesa:</label>
                    <input />
                    <br></br>
                    <label>cliente:</label>
                    <input />
                    <br></br>
                    <label>atendente:</label>
                    <input />
                </div>
                <table>
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
                    </tbody>
                </table>

            </div>
        </div>
    )
}