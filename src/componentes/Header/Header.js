import './Header.css';

const Header = ({ msgBoasVindas }) => {
    return (
        <header className='card-header'>
            <div className="circulos-btn">
                <div className="btn-ferramentas"></div>
                <div className="btn-ferramentas"></div>
                <div className="btn-ferramentas"></div>
            </div>
            <div className="browser">
                <h2 className='msgBoasVindas'>
                    {msgBoasVindas}
                    <span className="terminal-cursor"></span>
                </h2>
            </div>
        </header>

    )
}

export default Header;