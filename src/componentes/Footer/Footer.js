import React from 'react';
import './Footer.css'
const Footer = ({ imagemSrc, imagemAlt}) => {
  return (
    <footer>
      
        <img src={imagemSrc} alt={imagemAlt} className='img-footer' />
    
    </footer>
  );
};

export default Footer;
