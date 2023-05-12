import './Botao.css'

const Botao = (props) => {
    return (<button className='botao' type='submit'>
        {props.children}
    </button>)
}

export default Botao