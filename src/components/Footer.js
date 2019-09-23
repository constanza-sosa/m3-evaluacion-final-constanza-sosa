import React from 'react';
import './Footer.scss';

const Footer = () => {

  return (
    <footer className="app-footer">
      <p className="footer-title">Rick and Morty</p>
      <a href="https://github.com/constanza-sosa" target="_blank" rel="noopener noreferrer" className="footer-copy"> © Constanza Sosa <span role="img" aria-label="Coconut"> 🥥 </span> 2019 </a>
    </footer> 
  );
};

export default Footer;