import React from 'react';
import './Footer.scss';

const Footer = () => {

  return (
    <footer className="app-footer">
      <p className="footer-title">Rick and Morty</p>
      <p className="footer-copy"> © Constanza Sosa <span role="img" aria-label="Coconut"> 🥥 </span> 2019 </p>
    </footer> 
  );
};

export default Footer;