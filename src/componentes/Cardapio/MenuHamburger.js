import React, { useState } from 'react';

const MenuHamburger = ({ conteudo, tipoRefeicao }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="menu-hamburger">
      <div className={`hamburger-icon ${menuAberto ? 'aberto' : ''}`} onClick={toggleMenu}>
        <h4 className='span-menu-hamburger'>{tipoRefeicao}</h4>
        
      </div>
      {menuAberto && (
        <div className="menu-conteudo">
          {conteudo}
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;
