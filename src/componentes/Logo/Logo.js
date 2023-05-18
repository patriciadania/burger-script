import "./Logo.css"

export const Logo = () => {
    // JSX
    return (
        <section className="logo">
            <img src="/imagens/tela.png" alt="Logo da pagina de login" className="img-login"/>
            {/* <h2 className="titulo-login">
                <span className="chaves">{"{"}</span>
                <span className="titulo-login"> Login </span>
                <span className="chaves">{"}"}</span>
            </h2> */}
        </section>
    )
}

export default Logo;