import './Botao.css'

const Botao = (props) => {
    return (<div className='div-botao'>
<button className='botao' type='submit' onClick={props.onClick}>
        {props.children}
    </button>
    </div>
    )
}

export default Botao