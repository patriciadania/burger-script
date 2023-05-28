import React from 'react';
import './Footer.css'
const Footer = ({ imagemSrc, imagemAlt}) => {
  return (
    <footer>
      <div>
        <img src={imagemSrc} alt={imagemAlt} className='img-footer' />
      </div>
    </footer>
  );
};

export default Footer;
